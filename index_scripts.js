
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
    }, 1000);
}

const prices = { 
    'Espresso': 8.00,
    'Americano': 10.00,
    'Cappuccino': 13.00,
    'Caffè Latte': 14.00,
    'Flat White': 14.00,
    'Caramel Macchiato': 16.00,
    'Mocha': 16.00,
    'Espresso Macchiato': 9.00,
    'Espresso Con Panna': 10.00,
    'Iced Americano': 10.00,
    'Iced Latte': 14.00,
    'Iced Caramel Macchiato': 16.00,
    'Iced Mocha': 16.00,
    'Iced Blonde Vanilla Latte': 15.00,
    'Cold Brew Coffee': 12.00,
    'Nitro Cold Brew': 14.00,
    'Cold Brew Latte': 9.00,
    'Blonde Vanilla Latte': 16.00,
    'Dark Roast Coffee': 8.00,
    'Caffè Misto': 12.00,
    'Classic Donut': 6.50,
    'Chocolate Cake': 13.00,
    'Classic Cheesecake': 10.00,
    'Cinnamon Roll': 10.50,
    'Chocolate Croissant': 9.00,
    'Almond Croissant': 10.00,
    'Cheese Danish': 9.50,
    'Banana Nut Bread': 12.00,
    'Blueberry Muffin': 9.50,
    'Chocolate Chip Muffin': 9.50,
    'Plain Scone': 8.00,
    'Blueberry Scone': 8.50,
    'Raisin Scone': 8.50,
    'Cheese Scone': 8.50,
    'Multigrain Bagel': 8.50,
    'Plain Bagel': 7.50,
    'Ham & Chesee Roll': 11.50,
    'Red Velvet Cake': 14.50,
    'Chocolate Fudge Cake': 16.00,
    'Carrot Cake': 14.00,
    'Tiramisu': 15.50,
    'Lemon Loaf Cake': 13.50,
    'Chocolate Brownie': 12.50,
    'Opera Cake': 16.50
};


function loadingPage(){
    document.getElementById('loading-screen').style.display = 'flex';
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
    }, 1000);
}
function showAbout() {
    loadingPage();
    document.getElementById('menu').style.display = 'none';
    document.getElementById('non-menu').style.display = 'flex';
    document.title = "Fabianero || About Us";
    document.querySelector('.home-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.about-container').style.display = 'flex';
}

function viewMenu(){
    loadingPage();
    document.getElementById('non-menu').style.display = 'none';
    const menu = document.getElementById('menu');
    if (menu) {
        menu.style.display = 'flex'; // or 'block', depending on your layout
    }
}


// Make sure to set this variable when logging in


function showLogin() {
    loadingPage();
    document.title = "Fabianero || Login";
    document.querySelector('.home-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'flex';
}

function showRegister() {
    loadingPage();
    document.title = "Fabianero || Register";
    document.querySelector('.home-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'flex';
}

let cartItems = [];
const categoryDropdown = document.getElementById('categoryDropdown');
const productsContainer = document.getElementById('productsContainer');
const categoryTitle = document.getElementById('categoryTitle');
const cartButton = document.getElementById('cartButton');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartButton = document.getElementById('closeCartButton');
const overlay = document.getElementById('overlay1');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const totalPriceElement = document.getElementById('totalPrice');
const checkoutButton = document.getElementById('checkoutButton');
const closePaymentButton = document.getElementById('closePaymentButton');

function makeCheckout() {
    // Hide the cart sidebar
    cartSidebar.classList.remove('open');

    // Show the payment container
    const paymentPage = document.querySelector('.payment-page');
    paymentPage.classList.add('show'); // Add the show class to trigger the transition

    // Show the overlay
    overlay.classList.add('show');
}

function createCategoryLink(category) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = category.name;
    link.addEventListener('click', () => {
        displayProducts(category.items, category.name);
    });
    return link;
}





function updateTotalPrice() {
    let total = 0;
    const quantities = document.querySelectorAll('.cart-item .quantity');
    quantities.forEach(input => {
        const price = parseFloat(input.getAttribute('data-price'));
        const quantity = parseInt(input.value);
        total += price * quantity;
    });
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
    const totalPriceElementInOrderSummary = document.getElementById('total-price');
    totalPriceElementInOrderSummary.textContent = `Total: $${total.toFixed(2)}`;

    // Update quantity in order summary
    const cartItems = document.querySelectorAll('.cart-item');
    const orderItems = document.querySelectorAll('#order-summary li');
    cartItems.forEach((cartItem, index) => {
        const quantityInput = cartItem.querySelector('.quantity');
        const orderItem = orderItems[index];
        const orderQuantity = orderItem.querySelector('.quantity');
        orderQuantity.textContent = quantityInput.value;
    });
}


// Display all products by default


// Cart sidebar functionality
cartButton.addEventListener('click', function(event) {
    event.preventDefault();
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('show');
});

closeCartButton.addEventListener('click', function() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('show');
});
closePaymentButton.addEventListener('click', function() {
    const paymentPage = document.querySelector('.payment-page');
    paymentPage.classList.remove('show'); 
    overlay.classList.remove('show');
});

overlay.addEventListener('click', function() {
    cartSidebar.classList.remove('open');
    const paymentPage = document.querySelector('.payment-page');
    paymentPage.classList.remove('show'); 
    overlay.classList.remove('show');
});

function addToCart(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const button = event.target;
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const image = button.getAttribute('data-image');

        const existingItem = cartItems.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ name, price, image, quantity: 1 });
        }

        updateCartDisplay();
    }
}

function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <input type="number" class="quantity" value="${item.quantity}" min="1" data-name="${item.name}">
            <button class="remove-button">Remove</button>
        `;

        const quantityInput = cartItem.querySelector('.quantity');
        quantityInput.addEventListener('input', () => {
            const newQuantity = parseInt(quantityInput.value);
            const itemIndex = cartItems.findIndex(item => item.name === quantityInput.getAttribute('data-name'));
            if (newQuantity > 0) {
                cartItems[itemIndex].quantity = newQuantity;
            } else {
                cartItems.splice(itemIndex, 1);
            }
            updateCartDisplay();
        });

        const removeButton = cartItem.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            const itemIndex = cartItems.findIndex(item => item.name === removeButton.parentNode.querySelector('.quantity').getAttribute('data-name'));
            cartItems.splice(itemIndex, 1);
            updateCartDisplay();
        });

        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;

    // Update order summary
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = '';
    cartItems.forEach(item => {
        const orderItem = document.createElement('li');
        orderItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-container">
                <p class="quantity">${item.quantity}</p>
            </div>
        `;
        orderSummary.appendChild(orderItem);
    });

    const totalPriceElementInOrderSummary = document.getElementById('total-price');
    totalPriceElementInOrderSummary.textContent = `Total: $${total.toFixed(2)}`;
}
// Add an event listener to the make payment button
productsContainer.addEventListener('click', addToCart);
function displayProducts(products, categoryName) {
    loadingPage();
    productsContainer.innerHTML = '';
    categoryTitle.textContent = categoryName;

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name} <span>$${product.price.toFixed(2)}</span></h2>
            <p>${product.description}</p>
            <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">+ Quick Add</button>
        `;
        productsContainer.appendChild(productElement);
    });
}
function showHome() {
    loadingPage();
    const homeContainer = document.querySelector('.home-container');
    const aboutContainer = document.querySelector('.about-container');
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');
    const menu = document.getElementById('menu');
    const nonmenu = document.getElementById('non-menu');
    const viewMenuBtn = document.querySelector('.view-menu-btn');
    const logoutBtn = document.querySelector('.logout-btn');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');

    if (homeContainer) {
        homeContainer.style.display = 'flex';
    }
    if (aboutContainer) {
        aboutContainer.style.display = 'none';
    }
    if (loginContainer) {
        loginContainer.style.display = 'none';
    }
    if (registerContainer) {
        registerContainer.style.display = 'none';
    }
    if (menu) {
        menu.style.display = 'none';
    }
    if (nonmenu) {
        nonmenu.style.display = 'flex';
    }

    // Check if user is logged in (you'll need to set this variable when logging in)
    if (isLoggedIn) {
        if (viewMenuBtn) {
            viewMenuBtn.style.display = 'block';
        }
        if (logoutBtn) {
            logoutBtn.style.display = 'block';
        }
        if (loginBtn) {
            loginBtn.style.display = 'none';
        }
        if (signupBtn) {
            signupBtn.style.display = 'none';
        }
    } else {
        if (viewMenuBtn) {
            viewMenuBtn.style.display = 'none';
        }
        if (logoutBtn) {
            logoutBtn.style.display = 'none';
        }
        if (loginBtn) {
            loginBtn.style.display = 'block';
        }
        if (signupBtn) {
            signupBtn.style.display = 'block';
        }
    }
}

function logout() {
    // Send a request to logout.php to destroy the session
    fetch('logout.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                isLoggedIn = false;
                showHome();
                // Optionally, show a logout success message
                alert('You have been logged out successfully.');
            }
        });
}

// Make sure to set this variable when logging in
let isLoggedIn = document.querySelector('#is-logged-in').value === 'true';

document.querySelector('.login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Assuming you're using fetch to submit the form
    fetch('login.php', {
        method: 'POST',
        body:new FormData(this)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            isLoggedIn = true;
            showHome();
            // Optionally, show a login success message
            alert('You have been logged in successfully.');
        }
    });
});

// Function to load subcategories
function loadSubcategories() {
    fetch('get_subcategories.php')
        .then(response => response.json())
        .then(subcategories => {
            const categoryDropdown = document.querySelector('.category-dropdown');
            categoryDropdown.innerHTML = '<a href="#" data-category="all">All Products</a>';
            subcategories.forEach(subcategory => {
                categoryDropdown.innerHTML += `<a href="#" data-category="${subcategory}">${subcategory}</a>`;
            });
            addCategoryEventListeners();
        })
        .catch(error => console.error('Error:', error));
}

// Function to add event listeners to category links
function addCategoryEventListeners() {
    const categoryLinks = document.querySelectorAll('.category-dropdown a');
    const categoryText = document.querySelector('.category-selector .category-text');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            categoryText.textContent = category === 'all' ? 'All Products' : category;
            loadProducts(category);
            toggleCategoryDropdown(); // Close the dropdown after selection
        });
    });

    // Add click event to the category selector to toggle dropdown
    const categorySelector = document.querySelector('.category-selector');
    categorySelector.addEventListener('click', toggleCategoryDropdown);
}

// Function to toggle category dropdown visibility
function toggleCategoryDropdown() {
    const dropdown = document.querySelector('.category-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Function to load products
function loadProducts(category = 'all') {
    const url = category === 'all' ? 'get_products.php' : `get_products.php?subcategory=${category}`;
    fetch(url)
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.querySelector('.products');
            productsContainer.innerHTML = '';
            products.forEach(product => {
                productsContainer.innerHTML += `
                    <div class="product">
                        <img src="${product.image}" alt="${product.name}">
                        <h2>${product.name} <span>RM${parseFloat(product.price).toFixed(2)}</span></h2>
                        <p>${product.description}</p>
                        <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">+ Quick Add</button>
                    </div>
                `;
            });
            addToCartEventListeners();
        })
        .catch(error => console.error('Error:', error));
}

// Function to add event listeners to "Add to Cart" buttons
function addToCartEventListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');
            addToCart(name, price, image);
        });
    });
}

// Call these functions when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSubcategories();
    loadProducts();

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const categorySelector = document.querySelector('.category-selector');
        const dropdown = document.querySelector('.category-dropdown');
        if (!categorySelector.contains(event.target) && dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    });
});

// ... (keep the rest of your existing functions like