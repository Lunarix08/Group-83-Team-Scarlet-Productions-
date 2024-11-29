<?php
// record_order.php

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

// Generate a random order status
$order_statuses = ['in-progress', 'completed', 'cancelled'];
$order_status = $order_statuses[array_rand($order_statuses)]; // Randomly select an order status

// Generate a new order_id
$result = $conn->query("SELECT MAX(order_id) AS max_order_id FROM orders");
$row = $result->fetch_assoc();
$max_order_id = $row['max_order_id'];

// Generate new order_id
if ($max_order_id) {
    $number = (int)substr($max_order_id, 4); // Remove 'Ord_' and convert to integer
    $new_order_id = 'Ord_' . ($number + 1); // Increment and prepend 'Ord_'
} else {
    $new_order_id = 'Ord_1'; // Start with Ord_1 if no orders exist
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO orders (order_id, order_list, total_price, order_status) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssds", $new_order_id, $items_bought, $total_price, $order_status);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Order recorded successfully.', 'order_status' => $order_status, 'order_id' => $new_order_id]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to record order.']);
}
$stmt->close();
$conn->close();
?>