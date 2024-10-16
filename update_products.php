<?php
header('Content-Type: application/json');

// Database connection
$db_host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'fabianero';

$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'update_product') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $description = $_POST['description'];

    $stmt = $conn->prepare("UPDATE products SET name = ?, price = ?, description = ? WHERE product_ID = ?");
    $stmt->bind_param("sdsi", $name, $price, $description, $id);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Product updated successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error updating product: ' . $conn->error]);
    }

    $stmt->close();
    $conn->close();
    exit;
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method or action']);
    exit;
}
?>