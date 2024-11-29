<?php
// add_product .php

$db_host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'fabianero';

$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$data = json_decode(file_get_contents('php://input'), true);

// Record the order

$order_items = [];
foreach ($data['items'] as $item) {
    $order_items[] = $item['name'] . " x" . $item['quantity'];
}
$items_bought = implode(", ", $order_items);
$total_price = $data['total'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO orders (items_bought, total_price) VALUES (?, ?)");
$stmt->bind_param("sd", $items_bought, $total_price);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Order recorded successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to record order.']);
}
$stmt->close();
$conn->close();
?>