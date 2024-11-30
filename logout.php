<?php
session_start(); // Start the session

// Clear all session variables
$_SESSION = array(); // This will clear all session variables

// If you want to destroy the session completely, you can also do this:
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Finally, destroy the session
session_destroy();

// Redirect to the login page or home page
header("Location: index.php"); // Change to your desired redirect page
exit();
?>