<html>
<head>
    <title>Fabianero || Admin Panel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="admin_styles.css" rel="stylesheet">
</head>
<body>
    <div class="sidebar">
        <a href="#" onclick="showSection('menu-management')"><i class="fas fa-coffee"></i> Menu</a>
        <a href="#" onclick="showSection('user-management')"><i class="fas fa-users"></i> User</a>
        <a href="#" onclick="showSection('order-management')"><i class="fas fa-shopping-cart"></i> Order</a>
        <a href="#" onclick="showSection('payment-management')"><i class="fas fa-shopping-cart"></i> Payment</a>
        <button id="btn-admin-logout" onclick="Admin_LogOut()">Log Out</button>
    </div>
    <div class="container">
        <h1>Fabianero Admin Panel</h1>
        
        <div id="menu-management">
            <!--<a href="#" class="btn btn-add" onclick="showAddProductModal(event)">Add New Product</a> -->
            <h2>Menu Management</h2>
            <a href="#" class="btn btn-add" onclick="showAddProductModal(event)">Add New Product</a>
            <div id="espresso-beverages">
                <h3>Espresso Beverages</h3>
            </div>

            <div id="iced-espresso-beverages">
                <h3>Iced Espresso Beverages</h3>
            </div>

            <div id="blonde-roast-&-brewed-coffee">
                <h3>Blonde Roast & Brewed Coffee</h3>
            </div> 
            
            <div id="cold-coffee">
                <h3>Cold Coffee</h3>
            </div>

            <div id="donut">
                <h3>Donut</h3>
            </div>

            <div id="bagels">
                <h3>Bagels</h3>
            </div>

            <div id="savory-pastries">
                <h3>Savory Pastries</h3>
            </div>

            <div id="scones">
                <h3>Scones</h3>
            </div>

            <div id="sweet-pastries">
                <h3>Sweet Pastries</h3>
            </div>

            <div id="creamy-cakes">
                <h3>Creamy Cakes</h3>
            </div>

            <div id="layered-cakes">
                <h3>Layered Cakes</h3>
            </div>

            <div id="citrus-cakes">
                <h3>Citrus Cakes</h3>
            </div>

            <div id="brownie">
                <h3>Brownie</h3>
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
                                    <span class="text"><?php echo $row['role']; ?></span>
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
                        <div>Created At: <span class="text"><?php echo $row['created_at']; ?></span></div>
                        <div class="payment-details hidden">
                            <div>Full Name: <span class="text"><?php echo $row['name']; ?></span></div>
                            <div>Email: <span class="text"><?php echo $row['email']; ?></span></div>
                            <div>Phone Number: <span class="text"><?php echo $row['phone_number']; ?></span></div>
                            <div>Card Number: <span class="text"><?php echo str_repeat('*', strlen($row['card_number']) - 4) . substr($row['card_number'], -4); ?></span></div>
                            
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
                        <input type="text" id="role" name="role">
                    </div>
                    <div>
                        <label for="role">Phone Number:</label>
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

    <div class="modal" id="add-product-modal" style="width: 750; border-radius:25px;">
        <div class="modal-header">
            <h3>Add New Product</h3>
            <span class="modal-close" onclick="closeAddProductModal()">&times;</span>
        </div>
        <div class="modal-body">
            <form id="add-product-form">
                <div style="margin-top: 10;">
                    <label for="product-id">Product ID:</label>
                    <input type="text" id="product-id" name="product-id">
                </div>
                <div style="margin-top: 10;">
                    <label for="product-name">Product Name:</label>
                    <input type="text" id="product-name" name="product-name">
                </div>
                <div style="margin-top: 10;">
                    <label for="product-category-id">Product Category_ID:</label>
                    <select id="product-category-id" name="product-category-id">
                        <option value="coffee">Coffee</option>
                        <option value="bread">Bread</option>
                        <option value="cake">Cake</option>
                    </select>
                </div>
                <div style="margin-top: 10;">
                    <label for="product-category">Product Category:</label>
                    <select id="product-category" name="product-category">
                        <option value="espresso-beverages">Espresso Beverages</option>
                        <option value="iced-espresso-beverages">Iced Espresso Beverages</option>
                        <option value="blonde-roast-&-brewed-coffee">Blonde Roast & Brewed Coffee</option>
                        <option value="cold-coffee">Cold Coffee</option>
                        <option value="donut">Donut</option>
                        <option value="bagels">Bagels</option>
                        <option value="savory-pastries">Savory Pastries</option>
                        <option value="scones">Scones</option>
                        <option value="sweet-pastries">Sweet Pastries</option>
                        <option value="creamy-cakes">Creamy Cakes</option>
                        <option value="layered-cakes">Layered Cakes</option>
                        <option value="citrus-cakes">Citrus Cakes</option>
                        <option value="brownie">Brownie</option>
                        <option value="others">--- Others ---</option>
                    </select>
                </div>
                <div style="margin-top: 10;">
                    <label for="product-price">Price:</label>
                    <input type="text" id="product-price" name="product-price">
                </div>
                <div style="margin-top: 10;">
                    <label for="product-description">Description:</label>
                    <input type="text" id="product-description" name="product-description">
                </div>
                <div style="margin-top: 23;border-top:1px solid #dddd;padding-top:15px;">
                    <label for="product-image">Image:</label>
                    <input type="file" id="product-image" name="product-image">
                </div>
                <div style="margin-top: 10;">
                    <button type="submit" class="btn btn-save">Save</button>
                </div>
            </form>
        </div>
    </div>

    <script src="admin_scripts.js"></script>
</body>
</html>