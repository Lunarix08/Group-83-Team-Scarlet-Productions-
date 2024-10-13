<?php
session_start();

// Database configuration
$db_host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'fabianero';

// Create a connection to the database
$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (empty($email) || empty($password)) {
        $_SESSION['login_error'] = "Email and password are required.";
        header("Location: index.php");
        exit();
    } else {
        // Update this query to use the correct column names
        $sql = "SELECT * FROM users WHERE email = ? AND password = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $email, $password);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            if ($user['email'] == 'admin@example.com') {
                header("Location: admin.php");
                echo json_encode(['success' => true]);
                exit();
            } else {
                $_SESSION['user'] = $email;
                header("Location: index.php");
                exit();
            }
        } else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $_SESSION['login_error'] = "Invalid email address.";
            } elseif (!password_verify($password, $user['password'])) {
                $_SESSION['login_error'] = "Invalid password.";
            } else {
                $_SESSION['login_error'] = "Invalid email or password.";
            }
            header("Location: index.php");
            exit();
        }
    }
}

$conn->close();
?>