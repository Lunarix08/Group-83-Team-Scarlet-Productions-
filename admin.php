<html>
<?php if (isset($_SESSION['error_message'])): ?>
    <script>
        alert('<?php echo $_SESSION['error_message']; ?>');
    </script>
    <?php unset($_SESSION['error_message']); ?>
<?php endif; ?>
<?php if (isset($_SESSION['success_message'])): ?>
    <script>
        alert('<?php echo $_SESSION['success_message']; ?>');
    </script>
    <?php unset($_SESSION['success_message']); ?>
<?php endif; ?>
<head>
    <title>Daily Grind || Admin Panel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="admin_styles.css" rel="stylesheet">
</head>
<body>
    <div class="sidebar">
        <a href="#" onclick="showSection('menu-management')"><i class="fas fa-coffee"></i> Menu</a>
        <a href="#" onclick="showSection('user-management')"><i class="fas fa-users"></i> User</a>
        <a href="#" onclick="showSection('payment-management')"><i class="fas fa-shopping-cart"></i> Payment</a>
        <button id="btn-admin-logout" onclick="Admin_LogOut()">Log Out</button>
    </div>
    <div class="container">
        <h1>Daily Grind Admin Panel</h1>
        
        <div id="menu-management">
            <h2>Menu Management</h2>

            <div id="productsContainer">
                <?php
                // Connect to the database
                $db_host = 'localhost';
                $db_user = 'root';
                $db_password = '';
                $db_name = 'fabianero';

                $conn = new mysqli($db_host, $db_user, $db_password, $db_name);

                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                // Function to format text: remove dashes and capitalize each word
                function formatText($text) {
                    $words = explode('-', $text);
                    $words = array_map('ucwords', $words);
                    return implode(' ', $words);
                }

                // Fetch main categories
                $sql_categories = "SELECT DISTINCT maincategory FROM products ORDER BY maincategory";
                $result_categories = $conn->query($sql_categories);

                while ($category = $result_categories->fetch_assoc()) {
                    echo "<div class='category-section'>";
                    echo "<h3>" . formatText(htmlspecialchars($category['maincategory'])) . "</h3>";

                    // Fetch subcategories for this main category
                    $sql_subcategories = "SELECT DISTINCT subcategory FROM products WHERE maincategory = ? ORDER BY subcategory";
                    $stmt_subcategories = $conn->prepare($sql_subcategories);
                    $stmt_subcategories->bind_param("s", $category['maincategory']);
                    $stmt_subcategories->execute();
                    $result_subcategories = $stmt_subcategories->get_result();

                    while ($subcategory = $result_subcategories->fetch_assoc()) {
                        echo "<div class='subcategory-section'>";
                        echo "<h4>" . formatText(htmlspecialchars($subcategory['subcategory'])) . "</h4>";

                        // Fetch products for this subcategory
                        $sql_products = "SELECT * FROM products WHERE maincategory = ? AND subcategory = ?";
                        $stmt_products = $conn->prepare($sql_products);
                        $stmt_products->bind_param("ss", $category['maincategory'], $subcategory['subcategory']);
                        $stmt_products->execute();
                        $result_products = $stmt_products->get_result();

                        while ($product = $result_products->fetch_assoc()) {
                            echo "<div class='menu-item'>";
                            echo "<div>";
                            echo "<div>ID: <span class='text'>" . htmlspecialchars($product['product_ID']) . "</span></div>";
                            echo "<div>Name: <span class='text'>" . formatText(htmlspecialchars($product['name'])) . "</span></div>";
                            echo "<div>Price: <span class='text'>$" . htmlspecialchars($product['price']) . "</span></div>";
                            echo "<div>Description: <span class='text'>" . htmlspecialchars($product['description']) . "</span></div>";
                            if (isset($product['image'])) {
                                echo "<img src='" . htmlspecialchars($product['image']) . "' alt='Product Image' width='100' height='100'>";
                            }
                            echo "<div>
                                    <a href='#' class='btn btn-edit' onclick='editItem(event)'>Edit</a>
                                    <a href='#' class='btn btn-save hidden' onclick='saveItem(event)'>Save</a>
                                    <a href='#' class='btn btn-delete' onclick='deleteMenuItem(event)'>Delete</a>
                                </div>";
                            echo "</div>";
                            echo "</div>"; // End of menu-item
                        }

                        echo "</div>"; // End of subcategory-section
                    }

                    echo "</div>"; // End of category-section
                }

                // Close the database connection
                $conn->close();
                ?>
            </div>
        </div>
    

        
        <div id="user-management" class="hidden">
            <h2>User Management</h2>
            <a href="#" class="btn btn-add" onclick="addNewUser(event)">Add New User</a>
            <div id="user-list">
                <?php
                // Connect to the database
                $db_host = 'localhost';
                $db_user = 'root';
                $db_password = '';
                $db_name = 'fabianero';

                $conn = new mysqli($db_host, $db_user, $db_password, $db_name);

                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                // Retrieve user data from the database
                $sql = "SELECT * FROM users";
                $result = $conn->query($sql);

                // Display user data
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        ?>
                        <div class="user-item">
                            <div>
                                <div>User ID: <span class="text"><?php echo $row['id']; ?></span><input type="text" class="input hidden" value="<?php echo $row['id']; ?>"></div>
                                <div>Username: <span class="text"><?php echo $row['email']; ?></span><input type="text" class="input hidden" value="<?php echo $row['email']; ?>"></div>
                                <div>
                                    <label for="role">Role:</label>
                                    <span class="text"><?php echo ucfirst(strtolower($row['role'])); ?></span>
                                    <select class="input hidden" id="role-select">
                                        <option value="user">User </option>
                                        <option value="staff">Staff</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                                <div class="user-details hidden">
                                    <p><strong>Email: </strong><span class="text"><?php echo $row['email']; ?></span><input type="text" class="input hidden" value="<?php echo $row['email']; ?>"></p>
                                    <p><strong>Phone Number: </strong><span class="text"><?php echo $row['phone_number']; ?></span><input type="text" class="input hidden" value="<?php echo $row['phone_number']; ?>"></p>
                                    <p><strong>Address: </strong><span class="text"><?php echo $row['address']; ?></span><input type="text" class="input hidden" value="<?php echo $row['address']; ?>"></p>

                                </div>
                                <div style="margin-top: 25;">
                                    <a href="#" class="btn btn-edit" onclick="editUser(event);editToggleDetail(event);">Edit</a>
                                    <a href="#" class="btn btn-save hidden" onclick="saveUser(event);">Save</a>
                                    <a href="#" class="btn btn-delete" onclick="deleteUser(event)">Delete</a>
                                    <a href="#" class="btn btn-view" onclick="toggleUserDetails(event)">View Details</a>
                                </div>
                            </div>
                        </div>
                        <?php
                    }
                } else {
                    echo "No users found.";
                }

                // Close the database connection
                $conn->close();
                ?>
            </div>
        </div>

        <div id="order-management" class="hidden">
            <h2>Order Management</h2>
            
        </div>
        <div id="payment-management" class="hidden">
            <h2>Payment Management</h2>
            <div id="payment-list">
                <?php
                // Connect to the database
                $db_host = 'localhost';
                $db_user = 'root';
                $db_password = '';
                $db_name = 'fabianero';

                $conn = new mysqli($db_host, $db_user, $db_password, $db_name);

                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                // Retrieve payment data from the database
                $sql = "SELECT * FROM payments";
                $result = $conn->query($sql);

                // Display payment data
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        ?>
                        <div class="payment-item">
                            <div>
                                <div>Payment ID: <span class="text"><?php echo $row['payment_id']; ?></span></div>
                                <div>Order ID: <span class="text"><?php echo $row['order_id']; ?></span></div>
                                <div class="payment-details hidden">
                                    <div>Name: <span class="text"><?php echo $row['name']; ?></span></div>
                                    <div>Email: <span class="text"><?php echo $row['email']; ?></span></div>
                                    <div>Phone Number: <span class="text"><?php echo $row['phone_number']; ?></span></div>
                                    <div>Card Number: <span class="text"><?php
                                        if (strlen($row['card_number']) >= 4) {
                                            echo str_repeat('*', strlen($row['card_number']) - 4) . substr($row['card_number'], -4);
                                        } else {
                                            echo $row['card_number'];
                                        }
                                    ?></span></div>
                                    <div>Created At: <span class="text"><?php echo $row['created_at']; ?></span></div>
                                </div>
                                
                                <div style="margin-top: 25;">
                                    <a href="#" class="btn btn-view" onclick="togglePaymentDetails(event)">View Details</a>
                                    <a href="#" class="btn btn-delete" onclick="deletePayment(event)">Delete</a>
                                </div>
                            </div>
                        </div>
                        <?php
                    }
                } else {
                    echo "No payments found.";
                }

                // Close the database connection
                $conn->close();
                ?>
            </div>
        </div>
    </div>
    </div>
    <div class="modal-overlay" id="modal-overlay"></div>
        <div class="modal" id="order-details-modal">
            <div class="modal-header">
                <h3>Order Details</h3>
                <span class="modal-close" onclick="closeDetails()">&times;</span>
            </div>
            <div class="modal-body" id="order-details-modal-body">
                <!-- Order details will be displayed here -->
            </div>
        </div>

    <div class="modal-overlay" id="modal-overlay"></div>
        <div class="modal" id="add-user-modal">
            <div class="modal-header">
                <h3>Add New User</h3>
                <span class="modal-close" onclick="closeAddUserModal()">×</span>
            </div>
            <div class="modal-body">
                <form id="add-user-form">
                    <div>
                        <label for="user-id">User  ID:</label>
                        <input type="text" id="user-id" name="user-id">
                    </div>
                    <div>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username">
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email">
                    </div>
                    <div>
                        <label for="role">Role:</label>
                        <select name="role" id="role">
                            <option value="admin">Admin</option>
                            <option value="editor">Staff</option>
                            <option value="viewer">User</option>
                        </select>
                    </div>
                    <div>
                        <label for="phone-number">Phone Number:</label>
                        <input type="text" id="phone-number" name="role">
                    </div>
                    <div>
                        <label for="role">Address:</label>
                        <input type="text" id="address" name="role">
                    </div>
                    
                    <div>
                        <button type="submit" class="btn btn-save">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>    


    <script src="admin_scripts.js"></script>
</body>
</html>