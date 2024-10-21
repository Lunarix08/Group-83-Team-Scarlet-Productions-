<?php
session_start();
$isLoggedIn = isset($_SESSION['user']);

?>

<?php if (isset($_SESSION['login_error'])): ?>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            showLogin();
        });
    </script>
    <?php 
    $loginError = $_SESSION['login_error']; 
    unset($_SESSION['login_error']); 
    ?>
<?php elseif (isset($_SESSION['register_error'])): ?>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            showRegister();
        });
    </script>
    <?php 
    $registerError = $_SESSION['register_error']; 
    unset($_SESSION['register_error']); 
    ?>
<?php elseif (isset($_SESSION['register_success'])): ?>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            alert('Registeration Sucessful!')
            showLogin();
        });
    </script>
    <?php 
    unset($_SESSION['register_success']); 
    ?>
<?php else: ?>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            showHome();
        });
    </script>
<?php endif; ?>

<head>
    <title>Daily Grind || Homepage</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet">
    <link href="index_styles.css" rel="stylesheet">
</head>
<body>
    <?php // Start the session at the beginning of the file
    if (isset($_SESSION['payment_status'])): ?>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                var paymentStatus = '<?php echo $_SESSION['payment_status']; ?>';
                if (paymentStatus == 'success') {
                    alert('Payment successful!');
                } else if (paymentStatus == 'failed') {
                    alert('Payment failed. Please try again.');
                }
                viewMenu();
                <?php unset($_SESSION['payment_status']); ?> // Unset the session variable
            });
        </script>
    <?php endif; ?>   

    
    <div id="loading-screen" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: black; display: flex; justify-content: center; align-items: center; font-size: 24px; font-weight: bold;">
        <div class="spinner-border" role="status">
        </div>
    </div>
    <input type="hidden" id="is-logged-in" value="<?php echo $isLoggedIn ? 'true' : 'false'; ?>">
    <!-- Homepage -->
    
    <div class="navbar">
        <img src="assets/icon.webp" alt="Admin Panel Icon" style="
            width: 60;
            margin-right: 10;
            border-radius: 50%;
        ">
        <div class="logo">THE DAILY GRIND</div>

        <ul>
            <li><a href="#" onclick="showHome()">Home</a></li>
            <li><a href="#" onclick="showAbout()">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#" onclick="showContact()">Contact</a></li>
        </ul>
        <div class="right-items">
            <div class="right-icons">
                <div class="cart">
                    <a href="#" id="cartButton"><i class="fas fa-shopping-cart"></i> </a>
                </div>
            </div>
            <?php if ($isLoggedIn): ?>
                <a href="logout.php" class="logout-btn">Log-Out</a>
            <?php else: ?>
                <a href="#" onclick="showLogin()" class="login-btn">Log-In</a>
            <?php endif; ?>
        </div>
        
        
    </div>

    <!-- Login & Registeration Section-->
    <div class="login-container">
        <div class="login-box">
            <div class="close-btn" onclick="showHome()">×</div>
            <h2>Log-In </h2>
            <form method="POST" action="login.php">
                <div class="input-group">
                    <input name="email" placeholder="Email" type="text" required/>
                    <i class="fas fa-envelope"></i>
                </div>

                <div class="input-group">
                    <input name="password" placeholder="Password" type="password" required/><i class="fas fa-lock"></i>
                </div>

                <button class="login-btn">Log-In</button>
                <?php if (isset($loginError)): ?>
                    <p style="color: red;"><?php echo $loginError; ?></p>
                <?php endif; ?>
                <a class="register-link" href="#" onclick="showRegister()">Don't have an account? Register!</a>
            </form>
        </div>
    </div>
    
    <div class="register-container">
        <div class="register-box">
            <div class="close-btn" onclick="showHome()">×</div>
            <h2>Sign-Up</h2>

            <form method="POST" action="register.php">

                <div class="input-group">
                    <input name="username" placeholder="Username" type="text" required/>
                    <i class="fas fa-user"></i>
                </div>

                <div class="input-group">
                    <input name="email" placeholder="Email" type="text" required/>
                    <i class="fas fa-envelope"></i>
                </div>

                <div class="input-group">
                    <input name="phone_number" placeholder="Phone Number" type="text" required/>
                    <i class="fas fa-phone"></i>
                </div>

                <div class="input-group">
                    <input name="address" placeholder="Address" type="text" required/>
                    <i class="fas fa-map-marker-alt"></i>
                </div>

                <div class="input-group">
                    <input name="password" placeholder="Password" type="password" required/>
                    <i class="fas fa-lock"></i>
                </div>

                <div class="input-group">
                    <input name="confirm_password" placeholder="Confirm Password" type="password" required/>
                    <i class="fas fa-lock"></i>
                </div>

                <?php if (isset($registerError)): ?>
                    <p style="color: red;"><?php echo $registerError; ?></p>
                <?php endif; ?>

                <button class="register-btn">Sign-Up</button>
                <a class="login-link" href="#" onclick="showLogin()">Already have an account? Login</a>
            </form>
        </div>
    </div>

    <!-- Homepage -->
    
    <div id="non-menu">
        <div class="home-container" style="display: flex;">
            <div class="home-content">
                <div class="hero">
                    <div class="hero-text">

                        <?php if ($isLoggedIn): ?>
                            <p>DAILY GRIND ARE PROVIDING VARIOUS PRODUCTS RIGHT NOW!</p>
                            <h1>THE DAILY GRIND</h1>
                            <p style="font-size:15;">Welcome to The Daily Grind Coffee Shop, where each cup is brewed to perfection. Enjoy a cozy atmosphere with a diverse menu that caters to every coffee lover's cravings!</p>
                            <button class="view-menu-btn" onclick="viewMenu()">View Menu</button>
                        <?php else: ?>
                            <p>NEW HERE? GET YOUR IDENTITY!</p>
                            <h1>THE DAILY GRIND</h1>
                            <p style="font-size:15;">Welcome to The Daily Grind Coffee Shop, where each cup is brewed to perfection. Enjoy a cozy atmosphere with a diverse menu that caters to every coffee lover's cravings!</p>
                            <button class="login-btn" onclick="showLogin()">Log-In</button>
                            <button class="signup-btn" onclick="showRegister()">Sign-Up</button>
                        <?php endif; ?>
                    </div>
                    <div class="slides">
                        <div class="overlay-gradient"></div>
                        <img class="slide" alt="Hero Image 1" src="https://png.pngtree.com/background/20230519/original/pngtree-an-old-coffee-shop-with-very-dark-walls-picture-image_2652909.jpg">
                        <img class="slide active" alt="Hero Image 2" src="https://png.pngtree.com/background/20230611/original/pngtree-cup-of-latte-on-wooden-table-picture-image_3171730.jpg">
                        <img class="slide" alt="Hero Image 3" src="https://png.pngtree.com/background/20230611/original/pngtree-wooden-table-full-of-donuts-and-some-caffeine-drinks-picture-image_3170868.jpg">
                    </div>
                    
                </div>
                <div class="browse">
                    <h2>Browse</h2>
                    <h3>"Check out our categories at The Daily Grind Coffee! From espresso drinks to pastries, there's something for everyone."</h3>
                    <div class="items" style="height: 250;">
                        <div class="item">
                            <img alt="Item 1" src="https://c4.wallpaperflare.com/wallpaper/180/462/561/dark-coffee-cup-wallpaper-preview.jpg" />
                            <div class="hover-info" style="padding:23px;">
                                <p1>COFFEE</p1>
                                <p>Savor the rich and aromatic flavors of our expertly crafted coffee, from bold espressos to refreshing cold brews.</p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Item 2" src="https://img.pikbest.com/ai/illus_our/20230423/2be586f55a60e8db58568e3318309dfd.jpg!w700wp" />
                            <div class="hover-info" style="padding:23px;">
                                <p1>BREAD</p1>
                                <p>Enjoy our freshly baked bread, perfect for a quick snack or as a delicious side to complement your coffee.</p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Item 3" src="https://www.shutterstock.com/image-photo/beautiful-cake-cream-chocolate-decoration-600nw-1669432723.jpg" height="250px"/>
                            <div class="hover-info" style="padding:23px;">
                                <p1>CAKE</p1>
                                <p>Indulge in our delightful range of cakes, from creamy classics to fruity favorites, made to satisfy every sweet craving.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="recommendation">
                    <h2>Recommendation</h2>
                    <h3>
                    "Looking for something special? We recommend trying our smooth caramel coffee for a delightful pick-me-up, paired with a warm, flaky pastry. For dessert, indulge in our rich chocolate cake—it's sure to satisfy your sweet tooth!"<br></h3>
                    <div class="items">
                        <div class="item">
                            <img alt="Recommendation 1" height="200" src="https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Espresso---Feb-2023.jpeg" width="300"/>
                            <div class="hover-info">
                                <p1 style="font-size: 30px">ESPRESSO</p1>
                                <p>RM8.00</p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Recommendation 2" height="200" src="https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Cappuccino---Feb-2023.jpeg" width="300"/>
                            <div class="hover-info">
                                <p1 style="font-size: 30px">CAPPUCCINO</p1>
                                <p>RM13.00</p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Recommendation 3" height="200" src="https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Latte-Mug---Feb-2023.jpeg" width="300"/>
                            <div class="hover-info">
                                <p1 style="font-size: 30px">LATTE</p1>
                                <p>RM14.00</p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Recommendation 4" height="200" src="https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/CH-AT-MOP-Sugar-Donut.jpeg" width="300"/>
                            <div class="hover-info">
                                <p1 style="font-size: 30px">DONUT</p1>
                                <p>RM6.00</p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Recommendation 5" height="200" src="https://www.starbucks.com.hk/media/catalog/product/4/c/4ce5ff0e-7946-4a65-83c4-f8983842f62d.jpg" width="300"/>
                            <div class="hover-info">
                                <p1 style="font-size: 30px">TIRAIMISU</p1>
                                <p>RM16.00</p>
                            </div>
                        </div>
                        <div class="item">
                            <img alt="Recommendation 6" height="200" src="https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Mocha--Feb-2023.jpeg" width="300"/>
                            <div class="hover-info">
                                <p1 style="font-size: 30px">MOCHA</p1>
                                <p>RM16.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="introducing-products">
                    <div class="text">
                        <h2>Introducing Products</h2>
                        <p>Our latest collection features innovative designs and high-quality materials to ensure the best experience for our customers.</p>
                        <p>Explore our new range of products that combine functionality with style, perfect for any occasion.</p>
                        <p>Stay tuned for more exciting releases and updates on our upcoming products.</p>
                    </div>
                    <div class="video">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/vFcS080VYQ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video made by: Old Game Box</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="about-container" style="display:none;">
            <div class="about-content">
                <div class="about-title-container">
                    <h1>About Us</h1>
                    <p>The Daily Grind Coffee Shop is a cozy destination that prides itself on serving <br>high-quality coffee and a welcoming atmosphere. Our coffee<br>shop features a selection of pastries and light bites to <br>complement your drink.</p>
                    <p>We are passionate about providing excellent customer service<br> and creating a warm and inviting environment for our customers to<br>relax and enjoy their favorite beverages. Our team is dedicated to<br>sourcing the finest ingredients and using only the best practices to<br>ensure that every cup of coffee is perfect.</p>
                </div>
                

            <div class="about-mvg-container">
                        <div class="about-text-container">
                        <h1>Our Mission, Values & Goals</h1>
                        <h2>Our Mission</h2>
                        <p>At Daily Grind, our mission is to provide high-quality coffee and exceptional customer service in a warm and welcoming environment. We strive to create a sense of community among our customers and to make every visit a memorable one.</p>
                            <div class="about-mission-container">
                            <ul>
                                <li>
                                    <h4>Provide High-Quality Products</h4>
                                    <p>We are committed to providing our customers with the highest quality products and services.</p>
                                </li>
                                <li>
                                    <h4>Build Strong Relationships</h4>
                                    <p>We strive to build strong relationships with our customers, partners, and community.</p>
                                </li>
                                <li>
                                    <h4>Promote Sustainability</h4>
                                    <p>We aim to promote sustainability in all aspects of our business and operations.</p>
                                </li>
                            </ul>
                        </div>
                        <h2>Our Values</h2>
                        <p>At Daily Grind, our mission is to provide high-quality coffee and exceptional customer service in a warm and welcoming environment.</p>
                        <div class="about-values-container">
                            
                            <ul>
                                <li>
                                    <h4>Integrity</h4>
                                    <p>We operate with integrity and transparency in all our business dealings.</p>
                                </li>
                                <li>
                                    <h4>Respect</h4>
                                    <p>We respect our customers, partners, and community, and strive to build strong relationships with them.</p>
                                </li>
                                <li>
                                    <h4>Excellence</h4>
                                    <p>We strive for excellence in all aspects of our business and operations.</p>
                                </li>
                            </ul>
                        </div>
                        <h2>Our Goals</h2>
                        <p>We strive to create a sense of community among our customers and to make every visit a memorable one.</p>
                        <div class="about-goals-container">
                            <ul>
                                <li>
                                    <h4>Increase Customer Base</h4>
                                    <p>Increase our customer base by 20% within the next 12 months</p>
                                </li>
                                <li>
                                    <h4>Reduce Environmental Impact</h4>
                                    <p>Reduce our environmental impact by 10% within the next 12 months</p>
                                </li>
                                <li>
                                    <h4>Achieve High Customer Satisfaction</h4>
                                    <p>Achieve a customer satisfaction rating of 95% or higher within the next 12 months</p>
                                </li>
                                <li>
                                    <h4>Expand Product Offerings</h4>
                                    <p>Expand our product offerings to include a wider range of coffee and food options within the next 12 months</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--<div class="about-team-container">
                        <h2>Meet Our Team</h2>
                        <div class="team-members">
                            <div class="team-member">
                                <img src="team-member-1.jpg" alt="Team Member 1">
                                <h3>John Doe</h3>
                                <p>Founder and CEO</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                            </div>
                            <div class="team-member">
                                <img src="team-member-2.jpg" alt="Team Member 2">
                                <h3>Jane Smith</h3>
                                <p>Head of Coffee Operations</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                            </div>
                        </div>
                    </div>-->
            
                </div>  
            </div>
        </div>
        <div class="contact-feedback-container" style="display:none;">
            <div class="contact-section">
                <h1>Have any Questions or Inquiries?</h1>
                <p>Having problems when using website? Thinking of a potential ideas?<br/>Mail your feedback to
                <a href="mailto:hello@dailygrindcoffee.com">hello@dailygrindcoffee.com</a>. We'll be in touch.</p>
            </div>
            <div class="form-container">
                <input placeholder="Name" type="text"/>
                <input placeholder="E-mail" type="email"/>
                <textarea placeholder="Message"></textarea>
                <button onclick="sendFeedbackNotif()">Send Feedback</button>
            </div>
            </div>
        </div>
        
    </div>
    <div id="menu">
        <div class="header-image" style="background: url('https://png.pngtree.com/background/20230528/original/pngtree-hand-making-coffee-with-flowers-topped-with-plants-picture-image_2778722.jpg') no-repeat center center; background-size: cover;"></div>
        <div class="container">
            
            <h1 id="categoryTitle">All Products</h1>
            <div class="category-selector">
                <i class="fas fa-chevron-down"></i>
                <div class="category-dropdown" id="categoryDropdown">
                    <!-- Categories will be dynamically added here -->
                </div>
            </div>
            <div class="search-container">
                <input type="text" id="searchInput" placeholder="Search products...">
                <button id="searchButton">Search</button>
            </div>
            <div class="products" id="productsContainer">
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

                // Retrieve product data from the database
                $sql = "SELECT * FROM products";
                $result = $conn->query($sql);

                // Display product data
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        ?>
                        <div class="product">
                            <img src="<?php echo $row['image']; ?>" alt="<?php echo $row['name']; ?>">
                            <h2><?php echo $row['name']; ?> <span>$<?php echo number_format($row['price'], 2); ?></span></h2>
                            <p><?php echo $row['description']; ?></p>
                            <button class="add-to-cart" data-name="<?php echo $row['name']; ?>" data-price="<?php echo $row['price']; ?>" data-image="<?php echo $row['image']; ?>">+ Quick Add</button>
                        </div>
                        <?php
                    }
                } else {
                    echo "No products found.";
                }

                // Close the database connection
                $conn->close();
                ?>
            </div>
        </div>


        

        
    </div>
    <div class="cart-sidebar" id="cartSidebar">
            <button class="close-btn" id="closeCartButton">x</button>
            <h2 style="
    font-family: 'Oswald', sans-serif;
    font-size: 35;
    margin: 0;
    margin-bottom: 35px;
">Shopping Cart</h2>
            <div id="cartItemsContainer">
                <!-- Cart items will be dynamically added here -->
            </div>
            <?php if ($isLoggedIn): ?>
                <div class="cart-footer">
                <div class="total-price" id="totalPrice">Total: $0.00</div>

                <button class="checkout-btn" id="checkoutButton" onclick="makeCheckout()">Checkout</button>
            </div>
            <?php else: ?>
                <div class="cart-footer">
                <div class="total-price" id="totalPrice">Total: $0.00</div>
                <button class="checkout-btn" id="checkoutButton">Checkout</button>
            </div>
            <?php endif; ?>
            
    </div>
    <div class="payment-page">
        <button class="close-payment-btn" id="closePaymentButton">Close</button>
        <div class="payment-sidebar">
        <h2 style="font-family: 'Oswald', sans-serif;margin-top: 15;">Order Summary</h2>
        
        <ul id="order-summary">
            <!-- Cart items will be displayed here -->
        </ul>
        <p id="total-price">Total: $0.00</p>
        </div>
        <div class="payment-form">
        <h2 style="font-family: 'Oswald', sans-serif;font-size: 40;margin-bottom: 5;margin-top: 0;">Make Payment</h2>
            <form id="payment-form" method="POST" action="process_payment.php" style="display: block;">
                <input type="hidden" id="order-id" name="order_id" value="">
                
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br><br>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>

                <label for="expiration-date">Phone Number:</label>
                <input type="text" id="phone_number" name="phone_number" required><br><br>
                
                
                <label for="card-number">Card Number:</label>
                <input type="text" id="card-number" name="card-number" required><br><br>
                
                
                <label for="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" required><br><br>
                
                <button type="submit" id="make-payment" onclick="storeCartInSession();">MAKE PAYMENT</button>
            </form>
        </div>
    </div>
    
    <div class="overlay" id="overlay1"></div>
    <div class="contact-container" style="display: flex;">
        <h4 style="font-size: 45px;font-family: 'Oswald', sans-serif;">Contact</h4>
        <p>Want to learn more about Daily Grind or have a question about our coffee shop? We'd love to hear from you!</p>
        <div class="contact-info" style="font-weight:bold;">
                <p>Address: 123 Coffee Lane, Brewtown, CA 12345</p>
                <p>Phone: +601987-6543-210</p>
                <p>Email: hello@dailygrindcoffee.com</p>
        </div>
        <div class="socialMedia">
            <i class="bx bxl-facebook-circle"></i>
            <i class="bx bxl-instagram"></i>
            <i class="bx bxl-twitter"></i>
            <i class="bx bxs-phone"></i>
            <i class="bx bxl-gmail"></i>
        </div>
        </div>
    <script src="index_scripts.js"></script>
    
    <footer>
        <p>&copy; 2024 Daily Grind Coffee.( Scarlet Production )</p>
    </footer>
</body>
</html>