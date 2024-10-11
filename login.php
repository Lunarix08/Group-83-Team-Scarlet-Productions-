<?php
    session_start();

    $conn = new mysqli('localhost', 'root', '', 'fabianero');  
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];
        $password = $_POST['password'];

     
        $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

   
        if ($stmt->num_rows > 0) {
       
            $stmt->bind_result($hashed_password);
            $stmt->fetch();

  
            if (password_verify($password, $hashed_password)) {
                $_SESSION['email'] = $email;
                $_SESSION['isLoggedIn'] = true;
                header("Location:index.php");
                
                exit();

            } else if ($email == "Admin_Fabianero" && $password == "Fabianero") {
                $_SESSION['email'] = $email;
                $_SESSION['isLoggedIn'] = true;
                header("Location:admin.php");
                
                exit();
            } else {
                $_SESSION['isLoggedIn'] = false;
                $_SESSION['error'] = "Invalid password.";
                header("Location:index.php");
                
                
                exit();
            }
        } else {
            $_SESSION['isLoggedIn'] = false;
            $_SESSION['error'] = "No user found with that email.";
            header("Location:index.php");
            
            
            exit();
        }
    

        
    }
    $stmt->close();
    $conn->close();
?>

