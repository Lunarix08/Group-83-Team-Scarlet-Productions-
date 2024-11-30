<?php
session_start(); // Start the session at the beginning

// Database connection
$servername = "localhost"; // Your database server
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "fabianero"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Check if user is logged in
    if (!isset($_SESSION['user_id'])) {
        echo json_encode(['status' => 'error', 'message' => 'User  not logged in.']);
        exit();
    }

    // Get the current maximum order_id
    $result = $conn->query("SELECT order_id FROM orders_and_payments ORDER BY order_id DESC LIMIT 1");
    $row = $result->fetch_assoc();
    $max_order_id = $row['order_id'];

    // Generate new order_id
    if ($max_order_id) {
        // Extract the numeric part and increment it
        $number = (int)substr($max_order_id, 4); // Remove 'Ord_' and convert to integer
        $new_order_id = 'Ord_' . ($number + 1); // Increment and prepend 'Ord_'
    } else {
        // If there are no orders, start with Ord_1
        $new_order_id = 'Ord_1';
    }

    // Get payment information from the form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $card_number = $_POST['card-number'];
    $cvv = $_POST['cvv'];
    $way_to_eat = $_POST['way_to_eat']; // Get the selected way to eat
    $order_list = $_POST['order_list']; // Capture the order list
    $total_price = $_POST['total_price']; // Capture the total price
    $user_id = $_SESSION['user_id']; // Get the user ID from the session

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO orders_and_payments (order_id, name, email, phone_number, card_number, cvv, way_to_eat, order_list, total_price, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssssi", $new_order_id, $name, $email, $phone_number, $card_number, $cvv, $way_to_eat, $order_list, $total_price, $user_id);

    // Execute the statement
    if ($stmt->execute()) {
        $_SESSION['payment_status'] = 'success';
    } else {
        $_SESSION['payment_status'] = 'failed';
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();

    // Redirect to index.php
    header("Location: index.php");
    exit();
} else {
    // If not a POST request, redirect to index.php or show an error
    header("Location: index.php");
    exit();
}
?>