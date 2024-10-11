<?php
    session_start();
    $conn = new mysqli('localhost', 'root', '', 'fabianero'); // Adjust these values as needed

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm_password'];

        if ($password === $confirm_password) {
            // Check if the email already exists
            $stmt = $conn->prepare("SELECT email FROM users WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->store_result();

            if ($stmt->num_rows > 0) {
                $_SESSION['error'] = "This email is already registered. Please use a different email.";
                $stmt->close();
                $conn->close();
                header("Location:index.php");
                exit();
            } else {
                // If the email does not exist, proceed to register the user
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                $stmt = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
                $stmt->bind_param("ss", $email, $hashed_password);

                if ($stmt->execute()) {
                    // Redirect to login page after successful registration
                    $_SESSION['error'] = "Registeration Sucessful! " . $stmt->error;
                    $stmt->close();
                    $conn->close();
                    header("Location:index.php"); // Change this to your actual login page
                    exit();
                } else {
                    $_SESSION['error'] = "Error: " . $stmt->error;
                    $stmt->close();
                    $conn->close();
                    header("Location:index.php");
                    exit();
                }
            }
        } else {
            $_SESSION['error'] = "Passwords do not match.";
            $conn->close();
            header("Location:index.php");
            exit();
        }
    }
    $conn->close();
?>