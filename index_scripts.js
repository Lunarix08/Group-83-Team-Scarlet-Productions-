
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
function addToCartEventListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default button behavior
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');
            addToCart(name, price, image);
        });
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
function formatCategoryName(category) {
    return category
        .split(/[-\s]+/)
        .map(word => {
            return word.replace(/\w+/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        })
        .join(' ');
}

// Function to load subcategories
function loadSubcategories() {
    return fetch('get_subcategories.php')
        .then(response => response.json())
        .then(subcategories => {
            const categoryDropdown = document.querySelector('.category-dropdown');
            if (!categoryDropdown) {
                console.error('Category dropdown not found');
                return;
            }
            categoryDropdown.innerHTML = '<a href="#" data-category="all">All Products</a>';
            subcategories.forEach(subcategory => {
                categoryDropdown.innerHTML += `<a href="#" data-category="${subcategory}">${formatCategoryName(subcategory)}</a>`;
            });
            addCategoryEventListeners();
        })
        .catch(error => console.error('Error:', error));
}

// Function to add event listeners to category links
function addCategoryEventListeners() {
    const categoryLinks = document.querySelectorAll('.category-dropdown a');
    const categoryTitle = document.getElementById('categoryTitle');
    
    if (!categoryTitle) {
        console.warn('Category title element not found. Retrying in 500ms.');
        setTimeout(addCategoryEventListeners, 500);
        return;
    }

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            categoryTitle.textContent = category === 'all' ? 'All Products' : formatCategoryName(category);
            loadProducts(category);
            toggleCategoryDropdown();
        });
    });

    const categorySelector = document.querySelector('.category-selector');
    if (categorySelector) {
        categorySelector.addEventListener('click', toggleCategoryDropdown);
    } else {
        console.warn('Category selector not found');
    }
}

// Function to toggle category dropdown visibility
function toggleCategoryDropdown() {
    const dropdown = document.querySelector('.category-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Function to load products
function loadProducts(category = 'all') {
    const url = category === 'all' 
        ? 'get_products.php' 
        : `get_products.php?subcategory=${encodeURIComponent(category)}`;
    
    fetch(url)
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.querySelector('.products');
            const categoryTitle = document.getElementById('categoryTitle');
            
            if (!productsContainer) {
                console.error('Products container not found');
                return;
            }
            
            if (categoryTitle) {
                categoryTitle.textContent = category === 'all' ? 'All Products' : formatCategoryName(category);
            }

            productsContainer.innerHTML = '';
            products.forEach(product => {
                if (product && product.name && product.price && product.image) {
                    productsContainer.innerHTML += `
                        <div class="product">
                            <img src="${product.image}" alt="${product.name}">
                            <h2>${product.name} <span>RM${parseFloat(product.price).toFixed(2)}</span></h2>
                            <p>${product.description || ''}</p>
                            <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">+ Quick Add</button>
                         </div>
                    `;
                } else {
                    console.error('Invalid product data:', product);
                }
            });
            addToCartEventListeners();
        })
        .catch(error => console.error('Error:', error));
}

// Function to add event listeners to "Add to Cart" buttons
function addToCart(name, price, image) {

    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cartItems.push({ name, price, image, quantity: 1 });
    }
    updateCartDisplay();
}
// Function to update cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const orderSummary = document.getElementById('order-summary');
    if (!cartItemsContainer || !orderSummary) {
        console.error('Cart items container or order summary not found');
        return;
    }
    cartItemsContainer.innerHTML = '';
    orderSummary.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
        if (!item || typeof item.price !== 'number') {
            console.error(`Invalid item at index ${index}:`, item);
            return; // Skip this item and continue with the next
        }

        // Update cart sidebar
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image || ''}" alt="${item.name || 'Unknown Item'}">
            <div class="item-details">
                <h4>${item.name || 'Unknown Item'}</h4>
                <p>RM${item.price.toFixed(2)}</p>
            </div>
            <input type="number" class="quantity" value="${item.quantity || 1}" min="1" data-name="${item.name || ''}">
            <button class="remove-button">Remove</button>
        `;

        // Add event listeners for quantity input and remove button
        const quantityInput = cartItem.querySelector('.quantity');
        quantityInput.addEventListener('input', () => {
            const newQuantity = parseInt(quantityInput.value);
            const itemIndex = cartItems.findIndex(i => i.name === quantityInput.getAttribute('data-name'));
            if (itemIndex !== -1) {
                if (newQuantity > 0) {
                    cartItems[itemIndex].quantity = newQuantity;
                } else {
                    cartItems.splice(itemIndex, 1);
                }
                updateCartDisplay();
            }
        });

        const removeButton = cartItem.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            const itemIndex = cartItems.findIndex(i => i.name === item.name);
            if (itemIndex !== -1) {
                cartItems.splice(itemIndex, 1);
                updateCartDisplay();
            }
        });

        cartItemsContainer.appendChild(cartItem);

        // Update order summary
        const orderItem = document.createElement('li');
        orderItem.innerHTML = `
            <img src="${item.image || ''}" alt="${item.name || 'Unknown Item'}">
            <div class="item-details">
                <h4>${item.name || 'Unknown Item'}</h4>
                <p>RM${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-container">
                <p class="quantity">${item.quantity || 1}</p>
            </div>
        `;
        orderSummary.appendChild(orderItem);

        total += item.price * (item.quantity || 1);
    });

    // Update total price in cart sidebar
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.textContent = `Total: RM${total.toFixed(2)}`;
    }

    // Update total price in order summary
    const totalPriceElementInOrderSummary = document.getElementById('total-price');
    if (totalPriceElementInOrderSummary) {
        totalPriceElementInOrderSummary.textContent = `Total: RM${total.toFixed(2)}`;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    loadSubcategories();
    loadProducts();
});
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.category-dropdown');
    const categorySelector = document.querySelector('.category-selector');
    if (!categorySelector.contains(event.target) && dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    }
});