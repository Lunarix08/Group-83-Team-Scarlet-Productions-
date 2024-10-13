<?php
session_start();

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

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Validate the form data
    if (empty($email) || empty($password) || empty($confirm_password)) {
        $_SESSION['register_error'] = "All fields are required.";
        header("Location: index.php");
        exit();
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION['register_error'] = "Invalid email address.";
        header("Location: index.php");
        exit();
    } elseif ($password != $confirm_password) {
        $_SESSION['register_error'] = "Passwords do not match.";
        header("Location: index.php");
        exit();
    } else {
        // Check if the email address is already in use
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $_SESSION['register_error'] = "Email address is already in use.";
            header("Location: index.php");
            exit();
        } else {
            // Hash the password
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // Insert the user into the database
            $sql = "INSERT INTO users (email, password) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ss", $email, $hashed_password);
            $stmt->execute();

            // Set a success message
            $_SESSION['register_success'] = "Registration successful!";
            header("Location: index.php");
            exit();
        }
    }
}

// Close the database connection
$conn->close();
?>