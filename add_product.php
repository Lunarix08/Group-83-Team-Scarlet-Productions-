<?php
session_start();
header('Content-Type: application/json');

// Function to output JSON response and exit
function json_response($success, $message) {
    echo json_encode(['success' => $success, 'message' => $message]);
    exit();
}

// Disable error reporting
error_reporting(0);
ini_set('display_errors', 0);

$db_host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'fabianero';

$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    $_SESSION['error_message'] = 'Connection failed: ' . $conn->connect_error;
    json_response(false, 'Database connection error.');
}

$product_id = $_POST['product_id'] ?? '';
$name = $_POST['product_name'] ?? '';
$category = $_POST['product_category'] ?? '';
$subcategory = $_POST['product_subcategory'] ?? '';
$price = $_POST['product_price'] ?? '';
$description = $_POST['product_description'] ?? '';

// Handle file upload
$target_dir = "product_images/";
$target_file = $target_dir . basename($_FILES["product_image"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is an actual image or fake image
if(!isset($_FILES["product_image"]) || !isset($_FILES["product_image"]["tmp_name"])) {
    $_SESSION['error_message'] = 'No image file uploaded.';
    json_response(false, 'No image file uploaded.');
}

$check = getimagesize($_FILES["product_image"]["tmp_name"]);
if($check === false) {
    $_SESSION['error_message'] = 'File is not an image.';
    json_response(false, 'File is not an image.');
}

// Check if file already exists
if (file_exists($target_file)) {
    $_SESSION['error_message'] = 'Sorry, file already exists.';
    json_response(false, 'File already exists.');
}

// Check file size
if ($_FILES["product_image"]["size"] > 500000) {
    $_SESSION['error_message'] = 'Sorry, your file is too large.';
    json_response(false, 'File is too large.');
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
    $_SESSION['error_message'] = 'Sorry, only JPG, JPEG, PNG & GIF files are allowed.';
    json_response(false, 'Invalid file type.');
}

// Move uploaded file
if (!move_uploaded_file($_FILES["product_image"]["tmp_name"], $target_file)) {
    $_SESSION['error_message'] = 'Sorry, there was an error uploading your file.';
    json_response(false, 'Error uploading file.');
}

// Insert product into database
$stmt = $conn->prepare("INSERT INTO products (product_ID, name, maincategory, subcategory, price, description, image) VALUES (?, ?, ?, ?, ?, ?, ?)");
if (!$stmt) {
    $_SESSION['error_message'] = 'Error preparing statement: ' . $conn->error;
    json_response(false, 'Error preparing database statement.');
}

$stmt->bind_param("issssss", $product_id, $name, $category, $subcategory, $price, $description, $target_file);

if ($stmt->execute()) {
    $_SESSION['success_message'] = 'Product added successfully!';
    json_response(true, 'Product added successfully!');
} else {
    $_SESSION['error_message'] = 'Error adding product: ' . $stmt->error;
    json_response(false, 'Error adding product to database.');
}

$stmt->close();
$conn->close();
?>