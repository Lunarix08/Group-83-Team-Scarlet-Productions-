<?php
header('Content-Type: application/json');

$db_host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'fabianero';

$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['payment_id'])) {
        $payment_id = $_GET['payment_id'];

        $stmt = $conn->prepare("SELECT * FROM orders_and_payments WHERE payment_id = ?");
        $stmt->bind_param("s", $payment_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $order = $result->fetch_assoc();
            echo json_encode(['status' => 'success', 'order' => $order]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'No order found with the given payment ID.']);
        }

        $stmt->close();
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Payment ID not provided.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}

$conn->close();
?>