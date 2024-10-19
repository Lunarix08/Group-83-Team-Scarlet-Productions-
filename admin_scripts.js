window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
    }, 1000);
}
const orders = [
    {
        id: 1,
        customerName: 'Lim Guan Hong',
        orderDate: '2023-10-01',
        time: '01:30 p.m.',
        status: 'pending',
        products: 'a',
    },
    {
        id: 2,
        customerName: 'Jane Doe',
        orderDate: '2023-10-02',
        time: '02:30 p.m.',
        status: 'completed',
        products: 'a',
    },
    {
        id: 3,
        customerName: 'Bob Smith',
        orderDate: '2023-10-03',
        time: '03:30 p.m.',
        status: 'pending',
        products:'a',
    },
];




function renderOrderList() {
    loadingPage()
    // Load orders from local storage
    const orderList = document.getElementById('order-management');
    orderList.innerHTML = '';
    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        if (order.status === 'cancelled') {
            orderItem.style.opacity = '0.5';
            orderItem.style.pointerEvents = 'none';
        }
        orderItem.innerHTML = `
            <div>
                <div>Order ID: <span class="text">${order.id}</span><input type="text" class="input hidden" value="${order.id}"></div>
                <div>Customer Name: <span class="text">${order.customerName}</span><input type="text" class="input hidden" value="${order.customerName}"></div>
                <div>Order Date: <span class="text">${order.orderDate}</span><input type="text" class="input hidden" value="${order.orderDate}"></div>
                <div>Time Stamp: <span class="text">${order.time}</span><input type="text" class="input hidden" value="${order.time}"></div>
            
                <div>Status:
                    <select class="status-select" onchange="refreshOrderManagement(event)">
                        <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>Completed</option>
                        <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                </div>
                <div>
                    <a href="#" class="btn btn-view" onclick="showOrderDetails(${order.id})">View Details</a>
                </div>
            </div>
        `;
        orderList.appendChild(orderItem);
    });
}
function refreshOrderManagement(event) {
    const button = event.target;
    
    const orderItem = button.parentNode.parentNode.parentNode;
    const orderId = orderItem.querySelector('div > div:first-child > span.text').textContent;
    const orderStatus = orderItem.querySelector('.status-select').value;
    if (confirm('Order ID '+orderId + ' has been changed to status "' + orderStatus +'"'+ '\n' + 'The status will be updated after refreshing the page.'+'\n'+'(Press OK to proceed)')) {
        // Update the orders array
        const orderIndex = orders.findIndex(order => order.id === parseInt(orderId));
        if (orderIndex !== -1) {
            orders[orderIndex].status = orderStatus;
        }
        
        // Update the order status in the DOM
        const statusDiv = orderItem.querySelector('div > div:nth-child(5)');
        statusDiv.innerHTML = `
        <div>Status:
            <select class="status-select" onchange="refreshOrderManagement(event)">
                <option value="pending" ${orderStatus === 'pending' ? 'selected' : ''}>Pending</option>
                <option value="completed" ${orderStatus === 'completed' ? 'selected' : ''}>Completed</option>
                <option value="cancelled" ${orderStatus === 'cancelled' ? 'selected' : ''}>Cancelled</option>
            </select>
        </div>`;
        
        // Update the order item style
        if (orderStatus === 'cancelled') {
            orderItem.style.opacity = '0.5';
            orderItem.style.pointerEvents = 'none';
        } else {
            orderItem.style.opacity = '1';
            orderItem.style.pointerEvents = 'auto';
        }
    }
}
function showOrderDetails(orderId) {
    const order = orders.find(order => order.id === orderId);
    const modalBody = document.getElementById('order-details-modal-body');
    modalBody.innerHTML = `
        <p><strong>Customer Name:</strong> ${order.customerName}</p>
        <p><strong>Phone Number:</strong> 123-456-7890</p>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <div class="line"></div>
        <p><strong>Items Bought:</strong></p>
        <div class="line"></div>
        <div style="max-height: 340px; overflow-y: auto;">
            ${order.products.map(product => `
                <div>
                    <p style="margin-top: 15;font-weight: bold;">${product.name}</p>
                    <p>Quantity: ${product.quantity}</p>
                    <p style="margin-bottom: 30;">Sub total (RM): ${Number(product.price * product.quantity).toFixed(2)}</p>
                </div>
            `).join('')}
        </div>
        <div class="line"></div>
        <p><strong style="font-size: 26;font-weight: bold;">Total Price (RM): ${Number(order.products.reduce((total, product) => total + product.price * product.quantity, 0)).toFixed(2)}</strong></p>
    `;
    document.getElementById('modal-overlay').classList.add('show');
    document.getElementById('order-details-modal').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', renderOrderList);

function deleteMenuItem(event) {
    if (confirm("Are you sure you want to delete this menu item?")) {
        var menuItem = event.target.closest('.menu-item');
        var productId = menuItem.querySelector('div > div:nth-child(1) > span.text').textContent;

        // Send AJAX request to delete the product
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'delete_product.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            console.log('Server response:', xhr.responseText); // Log the server response
            if (xhr.status === 200) {
                // Remove the product from the DOM
                menuItem.remove();
                console.log('Product deleted successfully');
                renderProductList();
            } else {
                console.error('Error deleting product. Status:', xhr.status, 'Response:', xhr.responseText);
            }
        };
        xhr.send('product_id=' + encodeURIComponent(productId));
    }
}
function deleteUser(event) {
    if (confirm("Are you sure you want to delete this user?")) {
        const userId = event.target.closest('.user-item').querySelector('div > div:first-child > span.text').textContent;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'delete_user.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('user_id=' + userId);
        xhr.onload = function() {
            if (xhr.status === 200) {
                event.target.closest('.user-item').remove();
            } else {
                alert('Error deleting user.');
            }
        };
    }
} 

function addNewUser (event) {
    event.preventDefault();
    const addUserModal = document.getElementById('add-user-modal');
    const modalOverlay = document.getElementById('modal-overlay');

    modalOverlay.classList.add('show');
    addUserModal.style.display = 'block';
}

document.getElementById('add-user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userId = document.getElementById('user-id').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const address = document.getElementById('address').value;

    const newUser   = document.createElement('div');
    newUser  .classList.add('user-item');
    newUser  .innerHTML = `
        <div>
            <div style='font-size: 30px;'>User ID: <span class="text">${userId}</span><input type="text" class="input hidden" value="${userId}"></div>
            <div>Username: <span class="text">${username}</span><input type="text" class="input hidden" value="${username}"></div>
            <div>
            <label for="role" style="color:red;">Role:</label>
                <span class="text" style="color:red;">${role}</span>
                <select class="input hidden" id="role-select">
                    <option value="User">User </option>
                    <option value="Staff">Staff</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div class="user-details hidden">
                <p><strong>Email:</strong> <span class="text">${email}</span><input type="text" class="input hidden" value="${email}"></p>
                <p><strong>Phone Number:</strong> <span class="text">${phoneNumber}</span><input type="text" class="input hidden" value="${phoneNumber}"></p>
                <p><strong>Address:</strong> <span class="text">${address}</span><input type="text" class="input hidden" value="${address}"></p>
            </div>
            <div>
                <a href="#" class="btn btn-edit" onclick="editUser (event);editToggleDetail(event);">Edit</a>
                <a href="#" class="btn btn-save hidden" onclick="saveUser (event);">Save</a>
                <a href="#" class="btn btn-delete" onclick="deleteUser (event)">Delete</a>
                <a href="#" class="btn btn-view" onclick="toggleUser Details(event)">View Details</a>
            </div>
        </div>
    `;

    document.getElementById('user-list').appendChild(newUser);
    closeAddUserModal();

    // Send the new user data to the server using Fetch
    fetch('add_user.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            user_id: userId,
            username: username,
            email: email,
            role: role,
            phone_number: phoneNumber,
            address: address
        })
    })
    .then(response => response.text()) // Use response.json() if your PHP script returns JSON
    .then(data => {
        console.log('User  added successfully!');
        console.log(data); // Log the response from the server
    })
    .catch(error => {
        alert('Error adding user.');
        console.error('Error:', error);
    });
});

function closeAddUserModal() {
    const addUserModal = document.getElementById('add-user-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('show');
    addUserModal.style.display = 'none';
}

function closeAddUserModal() {
    const addUserModal = document.getElementById('add-user-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('show');
    addUserModal.style.display = 'none';
}

function editToggleDetail(event){
    event.preventDefault();
    const item = event.target.closest('.user-item');
    const userDetails = item.querySelector('.user-details');
    
    if (userDetails.classList.contains('hidden')) {
        userDetails.classList.remove('hidden');
    }
}

function closeAddUserModal() {
    const addUserModal = document.getElementById('add-user-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('show');
    addUserModal.style.display = 'none';
}

function editUser(event) {

    const item = event.target.closest('.user-item');
    const userDetailsContainer = item.querySelector('.user-details-container');
    const phoneNumber = userDetails.querySelector('p:first-child');
    const address = userDetails.querySelector('p:nth-child(2)');
    const email = userDetails.querySelector('p:last-child');
    const userDetails = item.querySelector('.user-details');
    const editButton = event.target;
    
    phoneNumber.innerHTML = `<strong>Phone Number:</strong><input type="text" value="123-456-7890">`;
    address.innerHTML = `<strong>Address:</strong><input type="text" value="123 Main St, Anytown, USA">`;
    email.innerHTML = `<strong>Email:</strong><input type="text" value="">`;
    
    
    event.target.classList.add('hidden');
    item.querySelector('.btn-save').classList.remove('hidden');
}

function toggleUserDetails(event) {
    event.preventDefault();
    const item = event.target.closest('.user-item');
    const userDetails = item.querySelector('.user-details');
    const email = item.querySelector('.email');
    const emailDetail = userDetails.querySelector('p:last-child');
    
    if (userDetails.classList.contains('hidden')) {
        userDetails.classList.remove('hidden');
            event.target.textContent = 'Hide Details';
        
    } else {
        userDetails.classList.add('hidden');
        event.target.textContent = 'View Details';
    }
}

function showSection(sectionId) {
    loadingPage()
    document.getElementById('menu-management').classList.add('hidden');
    document.getElementById('user-management').classList.add('hidden');
    document.getElementById('order-management').classList.add('hidden');
    document.getElementById('payment-management').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}

function closeDetails() {
    document.getElementById('modal-overlay').classList.remove('show');
    document.getElementById('order-details-modal').style.display = 'none';
}

function editItem(event) {
    event.preventDefault();
    const item = event.target.closest('.menu-item');
    item.querySelectorAll('.text').forEach(el => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = el.textContent;
        input.className = 'input';
        el.parentNode.insertBefore(input, el.nextSibling);
        el.classList.add('hidden');
    });
    item.querySelector('.btn-edit').classList.add('hidden');
    item.querySelector('.btn-save').classList.remove('hidden');
}

function saveItem(event) {
    event.preventDefault();
    const item = event.target.closest('.menu-item');
    const id = item.querySelector('div > div:nth-child(1) > span.text').textContent;
    const name = item.querySelector('div > div:nth-child(2) > input.input').value;
    const price = item.querySelector('div > div:nth-child(3) > input.input').value;
    const description = item.querySelector('div > div:nth-child(4) > input.input').value;

    // Create a FormData object to send the data
    const formData = new FormData();
    formData.append('action', 'update_product');
    formData.append('id', id);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);

    // Send the data to the server using fetch
    fetch('update_products.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Update the UI
            item.querySelector('div > div:nth-child(2) > span.text').textContent = name;
            item.querySelector('div > div:nth-child(3) > span.text').textContent = price;
            item.querySelector('div > div:nth-child(4) > span.text').textContent = description;

            // Hide inputs and show text
            item.querySelectorAll('.text').forEach(el => el.classList.remove('hidden'));
            item.querySelectorAll('.input').forEach(el => el.classList.add('hidden'));

            // Show edit button and hide save button
            item.querySelector('.btn-edit').classList.remove('hidden');
            item.querySelector('.btn-save').classList.add('hidden');

            alert('Product updated successfully');
        } else {
            alert('Error updating product: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while updating the product');
    });
}
function editUser(event) {
    event.preventDefault();
    const item = event.target.closest('.user-item');
    item.querySelectorAll('.text').forEach(el => el.classList.add('hidden'));
    item.querySelectorAll('.input').forEach(el => el.classList.remove('hidden'));
    item.querySelector('.btn-edit').classList.add('hidden');
    item.querySelector('.btn-save').classList.remove('hidden');
}



function Admin_LogOut(){
    if (confirm("You are trying log-out admin system panel, proceed to continue this action.")) {
        isLoggedIn = false;
        
        window.location.href = 'index.php';
    }
}

function saveUser(event) {
    event.preventDefault();
    const item = event.target.closest('.user-item');

    if (!item) {
        console.error('User item not found.');
        return;
    }

    // Select all necessary input fields
    const userIdInput = item.querySelector('div > div:nth-child(1) > input.input');
    const usernameInput = item.querySelector('div > div:nth-child(2) > input.input');
    const emailInput = item.querySelector('.user-details p:nth-child(1) input.input');
    const phoneNumberInput = item.querySelector('.user-details p:nth-child(2) input.input');
    const addressInput = item.querySelector('.user-details p:nth-child(3) input.input');
    const roleSelect = item.querySelector('div > div:nth-child(3) select.input');

    if (!userIdInput || !usernameInput || !emailInput || !phoneNumberInput || !addressInput || !roleSelect) {
        console.error('One or more input fields are missing.');
        return;
    }

    const userId = userIdInput.value;
    const username = usernameInput.value;
    const email = emailInput.value;
    const phoneNumber = phoneNumberInput.value;
    const address = addressInput.value;
    const role = roleSelect.value;

    // Update the UI to show the new values
    item.querySelectorAll('.text').forEach(el => {
        const input = el.nextElementSibling;
        if (input && input.classList.contains('input')) {
            el.textContent = input.value;
            el.classList.remove('hidden');
            input.classList.add('hidden');
        }
    });

    item.querySelector('.btn-edit').classList.remove('hidden');
    item.querySelector('.btn-save').classList.add('hidden');

    // Send the updated user data to the server
    console.log("Sending data to update_user.php:", {
        user_id: userId,
        username: username,
        email: email,
        phone_number: phoneNumber,
        address: address,
        role: role
    });

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'update_user.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`user_id=${userId}&username=${username}&email=${email}&phone_number=${phoneNumber}&address=${address}&role=${role}`);

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('User  updated successfully!');
        } else {
            console.error('Error updating user:', xhr.statusText);
        }
    };
}
function deletePayment(event) {
    event.preventDefault();
    const paymentItem = event.target.closest('.payment-item');
    const paymentId = paymentItem.querySelector('.text').textContent; // Assuming the first text element is the Payment ID

    if (confirm('Are you sure you want to delete this payment?')) {
        // Send an AJAX request to delete the payment record in the database
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'delete_payment.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Payment deleted successfully.');
                paymentItem.remove();
            } else {
                alert('Failed to delete payment.');
            }
        };
        xhr.send('payment_id=' + encodeURIComponent(paymentId));
    }
}
function togglePaymentDetails(event) {
    event.preventDefault();
    const paymentItem = event.target.closest('.payment-item');
    paymentItem.querySelector('.payment-details').classList.toggle('hidden');
}
// In admin_scripts.js

function addNewProduct(event) {
    event.preventDefault();
    const addProductModal = document.getElementById('add-product-modal');
    const modalOverlay = document.getElementById('modal-overlay');

    modalOverlay.classList.add('show');
    addProductModal.style.display = 'block';
}

function closeAddProductModal() {
    const addProductModal = document.getElementById('add-product-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('show');
    addProductModal.style.display = 'none';
}

document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('add_product.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Product added successfully!');
            closeAddProductModal();
            renderProductList();
        } else {
            alert('Error adding product: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while adding the product');
    });
});
function renderProductList() {
    loadingPage()
    const productList = document.getElementById('productsContainer');
    productList.innerHTML = '';

    fetch('get_categories.php')
        .then(response => response.json())
        .then(categories => {
            categories.forEach(category => {
                console.log("Processing category:", category);
                const categorySection = document.createElement('div');
                categorySection.className = 'category-section';
                categorySection.innerHTML = `<h3>${formatText(category)}</h3>`;

                fetch(`get_subcategories_admin.php?maincategory=${encodeURIComponent(category)}`)
                    .then(response => response.json())
                    .then(subcategories => {
                        subcategories.forEach(subcategory => {
                            const subcategorySection = document.createElement('div');
                            subcategorySection.className = 'subcategory-section';
                            subcategorySection.innerHTML = `<h4>${formatText(subcategory)}</h4>`;

                            fetch(`get_products.php?maincategory=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`)
                                .then(response => response.json())
                                .then(products => {
                                    products.forEach(product => {
                                        const productItem = document.createElement('div');
                                        productItem.className = 'menu-item';
                                        productItem.innerHTML = `
                                            <div>
                                                <div style='font-size: 30px;'>ID: <span class="text">${product.product_ID}</span></div>
                                                <div>Name: <span class="text">${formatText(product.name)}</span></div>
                                                <div>Price: <span class="text">$${product.price}</span></div>
                                                <div class="line" style="margin-top:25;"></div>
                                                <div>Description: <span class="text"><br>${product.description}</span></div>
                                                ${product.image ? `<img src="${product.image}" alt="Product Image" width="100" height="100">` : ''}
                                                <div>
                                                    <a href="#" class="btn btn-edit" onclick="editItem(event)">Edit</a>
                                                    <a href="#" class="btn btn-save hidden" onclick="saveItem(event)">Save</a>
                                                    <a href="#" class="btn btn-delete" onclick="deleteMenuItem(event)">Delete</a>
                                                </div>
                                            </div>
                                        `;
                                        subcategorySection.appendChild(productItem);
                                    });
                                });

                            categorySection.appendChild(subcategorySection);
                        });
                    });

                productList.appendChild(categorySection);
            });
        });
}
function formatText(text) {
    // Check if text is null, undefined, or not a string
    if (text == null || typeof text !== 'string') {
        return ''; // Return an empty string or some default value
    }
    // If text is an empty string, return it as is
    if (text.length === 0) {
        return text;
    }
    // Implement your text formatting logic here
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarContainer = document.querySelector('.sidebar-container');
    const container = document.querySelector('.container');

    sidebarToggle.addEventListener('click', function() {
        sidebarContainer.classList.toggle('collapsed');
        container.classList.toggle('expanded');
        
        // Change button text based on sidebar state
        if (sidebarContainer.classList.contains('collapsed')) {
            sidebarToggle.textContent = '>';
        } else {
            sidebarToggle.textContent = '<';
        }
    });
});
function loadingPage(){
    document.getElementById('loading-screen').style.display = 'flex';
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
    }, 1000);
}