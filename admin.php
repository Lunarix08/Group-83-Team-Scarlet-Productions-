<html>
<head>
    <title>Fabianero || Admin Panel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <style>body {
    font-family: "Montserrat", sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
    display: flex;
}
.sidebar {
    width: 200px;
    background-color: #343a40;
    color: #fff;
    height: 100vh;
    padding-top: 20px;
    position: fixed;
}
.sidebar a {
    display: block;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
}
.sidebar a:hover {
    background-color: #495057;
}
.container {
    margin-left: 220px;
    width: calc(100% - 220px);
    height: fit-content;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1 {
    margin-bottom: 5px;
    background-color: #343a40;
    padding: 35;
    color: white;
}
h2 {
    margin-bottom: 20px;
    font-size: 35px;
}
.menu-item, .user-item, .order-item {
    padding: 25px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
}
.menu-item:nth-child(odd), .user-item:nth-child(odd), .order-item:nth-child(odd) {
    background-color: #f9f9f9;
}
.menu-item:nth-child(even), .user-item:nth-child(even), .order-item:nth-child(even) {
    background-color: #fff;
}
.menu-item div, .user-item div, .order-item div {
    margin-bottom: 10px;
    font-weight: bold;
}
.menu-item img {
    position: absolute;
    width: 165px;
    height: 165px;
    object-fit: cover;
    border-radius: 5px;
    right: 45;
    top: 17;
}

.btn {
    padding: 5px 10px;
    text-decoration: none;
    color: #fff;
    border-radius: 3px;
}
.btn-edit {
    font-weight:normal;
    background-color: #28a745;
    border-radius: 50px;
    cursor: pointer;
}
.btn-save {
    font-weight: normal;
    background-color: #193d0b91;
    border-radius: 50px;
    border: 1px solid black;
    font-family: 'Montserrat';
    width: 75;
    cursor: pointer;
}
.btn-delete {
    font-weight:normal;
    background-color: #dc3545;
    border-radius: 50px;
    cursor: pointer;
}
.btn-add {
    display: block;
    width: 200px;
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 3px;
    cursor: pointer;
}
.btn-view {
    background-color: #17a2b8;
    font-weight:normal;
    border-radius: 50px;
    cursor: pointer;
}
.hidden {
    display: none;
}
.modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 1000;
}
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 20px;
}
.modal-header h3 {
    margin: 0;
}
.modal-body p {
    margin: 10px 0;
}
.modal-close {
    cursor: pointer;
    color: #dc3545;
    font-size: 30px;
}
.modal-overlay {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
}
.modal-overlay.show {
    opacity: 1;
    visibility: visible;
}
.line {
    border-top: 1px solid #ddd;
    margin: 10px 0;
}
.menu-item{
    border-radius: 30px;
    position: relative;
}
input.input{
    font-family: "Montserrat", sans-serif;
    border-radius: 30px;
    border: 1px solid black;
    padding: 15px;
    font-size: 15px;
    width: 700;
    height: 40;
    margin-bottom: 8px;
}
input#product-name, input#product-id, input#product-price, input#product-description{
    font-family: "Montserrat", sans-serif;
    border-radius: 30px;
    border: 1px solid black;
    padding: 5px;
    font-size: 15px;
}
h3{
    font-size: 25px;
}
#order-details-modal.modal{
    width: 800;
    border-radius: 25px;
}
label{
    font-size:16px;
}
.user-details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.user-details p {
    margin-bottom: 10px;
    font-weight: normal;
}

.user-details strong {
    font-weight: bold;
}
span.text{
    font-weight: normal;
}
.user-details-container{
    font-weight: bold;
}
.btn-refresh {
    padding: 5px 10px;
    text-decoration: none;
    color: #fff;
    border-radius: 3px;
    background-color: #007bff;
    cursor: pointer;
    margin-bottom: 20px;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1001;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.modal-header h3 {
    margin: 0;
}

.modal-close {
    cursor: pointer;
    color: #dc3545;
    font-size: 30px;
}

.modal-body {
    padding: 20px;
}

#add-user-form {
    display: flex;
    flex-direction: column;
}

#add-user-form div {
    margin-bottom: 20px;
}

#add-user-form label {
    margin-bottom: 10px;
}

#add-user-form input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

#add-user-form button[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
span{
    font-weight: normal;
}
.status-select{
    font-family: "Montserrat", sans-serif;
    margin-bottom: 20px;
    border-radius: 30px;
    height: 30;
    padding: 5;
}
.order-item.cancelled {
    opacity: 0.5;
    pointer-events: none;
}
#btn-admin-logout{
    border-radius: 10px;
    width: 165;
    position: absolute;
    left: 15px;
    bottom: 55;
    height: 35;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 17;
    border: 2px solid white;
    color: #ffffff;
    background-color: #16181a7a;
    cursor: pointer;
}
</style>
</head>
<body>
    <div class="sidebar">
        <a href="#" onclick="showSection('menu-management')"><i class="fas fa-coffee"></i> Menu</a>
        <a href="#" onclick="showSection('user-management')"><i class="fas fa-users"></i> User</a>
        <a href="#" onclick="showSection('order-management')"><i class="fas fa-shopping-cart"></i> Order</a>
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
            <div id="user-list"></div>
        </div>

        <div id="order-management" class="hidden">
            <h2>Order Management</h2>
            
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