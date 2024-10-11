const items = [
    {
        id: "coffee",
        name: "COFFEE",
        items: [
            {
                id: "espresso-beverages",
                name: "Espresso Beverages",
                items: [
                    { 
                        name: "Espresso", 
                        price: 8.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Espresso---Feb-2023.jpeg", 
                        description: "A strong shot of pure coffee." 
                    },
                    { 
                        name: "Americano", 
                        price: 10.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Americano---Feb-2023.jpeg", 
                        description: "Espresso diluted with hot water for a lighter flavor." 
                    },
                    { 
                        name: "Cappuccino", 
                        price: 13.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Cappuccino---Feb-2023.jpeg", 
                        description: "A balanced mix of espresso, steamed milk, and foam." 
                    },
                    { 
                        name: "Caffè Latte", 
                        price: 14.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Latte-Mug---Feb-2023.jpeg", 
                        description: "Espresso with steamed milk and a light layer of foam." 
                    },
                    { 
                        name: "Flat White", 
                        price: 14.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Flat-White---Feb-2023.jpeg", 
                        description: "Velvety steamed milk over a double shot of espresso." 
                    },
                    { 
                        name: "Caramel Macchiato", 
                        price: 16.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Caramel-Macchiato---Feb-2023.jpeg", 
                        description: "Layers of vanilla syrup, espresso, and caramel drizzle." 
                    },
                    { 
                        name: "Mocha", 
                        price: 16.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Mocha--Feb-2023.jpeg", 
                        description: "Espresso, chocolate syrup, and steamed milk with whipped cream." 
                    },
                    { 
                        name: "Espresso Macchiato", 
                        price: 9.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Espresso-Macchiato---Feb-2023.jpeg", 
                        description: "A shot of espresso with a dollop of steamed milk." 
                    },
                    { 
                        name: "Espresso Con Panna", 
                        price: 10.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Espresso-Con-Pana---Feb-2023.jpeg", 
                        description: "Espresso topped with whipped cream." 
                    }
                ]
            },
            {
                id: "iced-espresso-beverages",
                name: "Iced Espresso Beverages",
                items: [
                    { 
                        name: "Iced Americano", 
                        price: 10.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Iced-Americano---Feb-2023.jpeg", 
                        description: "Chilled espresso with water over ice." 
                    },
                    { 
                        name: "Iced Latte", 
                        price: 14.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Iced-Cafe-Latte---Feb-2023.jpeg", 
                        description: "Espresso poured over ice and milk." 
                    },
                    { 
                        name: "Iced Caramel Macchiato", 
                        price: 16.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Iced-Caramel-Macchiato---Feb-2023.jpeg", 
                        description: "Cold milk, ice, espresso, vanilla, and caramel drizzle." 
                    },
                    { 
                        name: "Iced Mocha", 
                        price: 16.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Iced-Mocha---Feb-2023.jpeg", 
                        description: "Cold espresso, chocolate, milk, and ice, topped with whipped cream."
                    },
                    {
                        name: "Iced Blonde Vanilla Latte", 
                        price: 15.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190422_IcedVanillaLatte.jpg?impolicy=1by1_wide_topcrop_630", 
                        description: "Light blonde espresso, vanilla syrup, milk, and ice." 
                    }
                        
                    ]
                },
            {
                id: "blonde-roast-&-brewed-coffee",
                name: "Blonde Roast & Brewed Coffee",
                items: [
                    { 
                        name: "Blonde Vanilla Latte", 
                        price: 16.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630", 
                        description: "Milder espresso with vanilla and steamed milk." 
                    },
                    { 
                        name: "Dark Roast Coffee", 
                        price: 8.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Fresh-Brewed-Coffee---Feb-2023.jpeg", 
                        description: "Bold and robust dark roast drip coffee." 
                    },
                    { 
                        name: "Caffè Misto", 
                        price: 12.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Misto---Feb-2023.jpeg", 
                        description: "Half brewed coffee, half steamed milk." 
                    }
                ]
            },
            {
                id: "cold-coffee",
                name: "Cold Coffee",
                items: [
                    { 
                        name: "Cold Brew Coffee", 
                        price: 12.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Cold-Brew---Feb-2023.jpeg", 
                        description: "Smooth, slow-steeped coffee served cold." 
                    },
                    { 
                        name: "Cold Brew Latte", 
                        price: 9.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Cold-Brew-Latte--Feb-2023.jpeg", 
                        description: "Freshly brewed latte chilled with ice." 
                    },
                    { 
                        name: "Nitro Cold Brew", 
                        price: 14.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190410_NitroColdBrew.jpg?impolicy=1by1_wide_topcrop_630", 
                        description: "Creamy cold brew infused with nitrogen for a rich texture." 
                    }
                ]
            }
        ]
    },
    {
        id: "bread",
        name: "BREAD",
        items: [
            {
                id: "donut",
                name: "Donut",
                items: [
                    { 
                        name: "Classic Donut", 
                        price: 6.50, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/CH-AT-MOP-Sugar-Donut.jpeg", 
                        description: "A classic fried donut coated in a generous layer of granulated sugar, featuring a soft and fluffy interior." 
                    }
                ]
            },
            {
                id: "bagels",
                name: "Bagels",
                items: [
                    { 
                        name: "Plain Bagel", 
                        price: 7.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190715_PlainBagel.jpg?impolicy=1by1_medium_630", 
                        description: "A simple, soft, and chewy classic bagel, perfect for pairing with cream cheese, butter, or enjoyed on its own." 
                    },
                    { 
                        name: "Multigrain Bagel", 
                        price: 8.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190821_EverythingBagel_US.jpg?impolicy=1by1_medium_630", 
                        description: "A hearty, wholesome bagel made with a blend of grains and seeds." 
                    }
                ]
            },
            {
                id: "savory-pastries",
                name: "Savory Pastries",
                items: [
                    { 
                        name: "Ham & Cheese Roll", 
                        price: 11.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/HamAndSwissCroissant.jpg?impolicy=1by1_medium_630", 
                        description: "A savory bread roll filled with slices of ham and melted cheese, baked to golden perfection." 
                    }
                ]
            },
            {
                id: "scones",
                name: "Scones",
                items: [
                    { 
                        name: "Plain Scone", 
                        price: 8.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20230406_PetiteVanillaScone.jpg?impolicy=1by1_medium_630", 
                        description: "A classic, crumbly scone with a hint of sweetness, perfect when paired with butter or jam." 
                    },
                    { 
                        name: "Blueberry Scone", 
                        price: 8.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20181219_BlueberryScone.jpg?impolicy=1by1_medium_630", 
                        description: "A crumbly, golden scone with fresh blueberries for a burst of fruit flavor in every bite." 
                    },
                    { 
                        name: "Cheese Scone", 
                        price: 8.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190422_PumpkinScone.jpg?impolicy=1by1_medium_630", 
                        description: "A savory scone baked with sharp cheddar cheese for a delicious snack with a hint of richness." 
                    },
                    { 
                        name: "Raisin Scone", 
                        price: 8.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20200630_CranberryOrangeScone.jpg?impolicy=1by1_medium_630", 
                        description: "A buttery, lightly sweet scone with plump raisins, perfect for tea time." 
                    }
                ]
            },
            {
                id: "sweet-pastries",
                name: "Sweet Pastries",
                items: [
                    { 
                        name: "Cinnamon Roll", 
                        price: 10.50, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/CH-AT-MOP-Cinnamon-Swirl.jpeg", 
                        description: "A soft, fluffy roll swirled with a generous amount of cinnamon sugar and topped with a sweet vanilla glaze." 
                    },
                    { 
                        name: "Chocolate Croissant", 
                        price: 9.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220607_ChocolateCroissant-onGreen.jpg?impolicy=1by1_medium_630", 
                        description: "Buttery, flaky croissant filled with rich, smooth chocolate, perfect for a light snack or breakfast." 
                    },
                    { 
                        name: "Almond Croissant", 
                        price: 10.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190715_40001-AlmondCroissant.jpg?impolicy=1by1_medium_630", 
                        description: "A delicate, golden-brown croissant filled with a sweet almond paste, topped with sliced almonds." 
                    },
                    { 
                        name: "Cheese Danish", 
                        price: 9.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220125_CheeseDanish-onGreen.jpg?impolicy=1by1_medium_630", 
                        description: "A flaky Danish pastry filled with a creamy cheese filling and lightly glazed for a perfect balance of sweet and savory." 
                    },
                    { 
                        name: "Banana Nut Bread", 
                        price: 12.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190729_BananaNutBread_US.jpg?impolicy=1by1_medium_630", 
                        description: "Moist, soft banana bread made with ripe bananas and crunchy walnuts for a delightful combination of flavors." 
                    },
                    { 
                        name: "Blueberry Muffin", 
                        price: 9.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220125_BlueberryMuffin_US.jpg?impolicy=1by1_medium_630", 
                    description: "A soft, buttery muffin loaded with juicy blueberries and a hint of vanilla for a satisfying treat." 
                    },
                    { 
                        name: "Chocolate Chip Muffin", 
                        price: 9.50, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/AT-MOP-Triple-Chocolate-Muffin.jpeg", 
                        description: "A classic, crumbly scone with a hint of sweetness, perfect when paired with butter or jam." 
                    }
                ]
            }
        ]
    },
    {
        id: "cake",
        name: "CAKE",
        items: [
            {
                id: "creamy-cakes",
                name: "Creamy Cakes",
                items: [
                    { 
                        name: "Classic Cheesecake", 
                        price: 15.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/AT-MOP-New-York-Cheesecake.jpeg", 
                        description: "Rich and creamy cheesecake with a buttery graham cracker crust, perfect for indulgence." 
                    },
                    { 
                        name: "Tiramisu", 
                        price: 15.50, 
                        image: "https://www.starbucks.com.hk/media/catalog/product/4/c/4ce5ff0e-7946-4a65-83c4-f8983842f62d.jpg", 
                        description: "Layers of espresso-soaked sponge cake, mascarpone cream, and cocoa powder, perfect for coffee lovers." 
                    }
                ]
            },
            {
                id: "layered-cakes",
                name: "Layered Cakes",
                items: [
                    { 
                        name: "Red Velvet Cake", 
                        price: 14.50, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Red-Velvet-Loaf-Cake-_0.jpeg", 
                        description: "A moist, velvety cake with layers of cream cheese frosting, offering a perfect balance of sweetness and tang." 
                    },
                    { 
                        name: "Chocolate Fudge Cake", 
                        price: 16.00, 
                        image: "https://www.starbucks.co.th/stb-media/2020/08/Chocolate-Cake-1080.png", 
                        description: "Decadent layers of chocolate sponge cake filled with rich, velvety chocolate fudge frosting." 
                    },
                    { 
                        name: "Carrot Cake", 
                        price: 14.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Carrot-Cake_0.jpeg", 
                        description: "Moist spiced carrot cake with walnuts and a luscious cream cheese frosting." 
                    }
                ]
            },
            {
                id: "citrus-cakes",
                name: "Citrus Cakes",
                items: [
                    { 
                        name: "Lemon Loaf Cake", 
                        price: 13.50, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Lemon-Loaf-Cake---Feb-2023.jpeg", 
                        description: "A zesty, moist cake with a tangy lemon glaze, offering a burst of citrus in every bite." 
                    }
                ]
            },
            {
                id: "brownie",
                name: "Brownie",
                items: [
                    { 
                        name: "Chocolate Brownie", 
                        price: 12.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190715_DoubleChocolateChunkBrownie.jpg?impolicy=1by1_medium_630", 
                        description: "A rich, fudgy brownie with chunks of chocolate for an indulgent treat." 
                    }
                ]
            }
        ]
    }
];
const orders = [
    {
        id: 1,
        customerName: 'Lim Guan Hong',
        orderDate: '2023-10-01',
        time: '01:30 p.m.',
        status: 'pending',
        products: getRandomProducts(items, 3),
    },
    {
        id: 2,
        customerName: 'Jane Doe',
        orderDate: '2023-10-02',
        time: '02:30 p.m.',
        status: 'completed',
        products: getRandomProducts(items, 2),
    },
    {
        id: 3,
        customerName: 'Bob Smith',
        orderDate: '2023-10-03',
        time: '03:30 p.m.',
        status: 'pending',
        products: getRandomProducts(items, 4),
    },
];
const users = [
    {
        userId: 1,
        username: 'admin',
        email: 'admin@example.com',
        role: 'Admin',
        phoneNumber: '123-456-7890',
        address: '123 Main St, Anytown, USA'
    },
    {
        userId: 2,
        username: 'user',
        email: 'user@example.com',
        role: 'User ',
        phoneNumber: '987-654-3210',
        address: '456 Elm St, Othertown, USA'
    }
];

function getRandomProducts(items, count) {
    const randomProducts = [];
    for (let i = 0; i < count; i++) {
        const randomCategoryIndex = Math.floor(Math.random() * items.length);
        const randomCategory = items[randomCategoryIndex];
        const randomSubcategoryIndex = Math.floor(Math.random() * randomCategory.items.length);
        const randomSubcategory = randomCategory.items[randomSubcategoryIndex];
        const randomProductIndex = Math.floor(Math.random() * randomSubcategory.items.length);
        const randomProduct = randomSubcategory.items[randomProductIndex];
        const product = {
            name: randomProduct.name,
            price: randomProduct.price,
            quantity: Math.floor(Math.random() * 5) + 1,
        };
        randomProducts.push(product);
    }
    return randomProducts;
}
function renderOrderList() {
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
        var productName = menuItem.querySelector('div > div:nth-child(2) > span.text').textContent;
        var productPrice = menuItem.querySelector('div > div:nth-child(3) > span.text').textContent;
        var productDescription = menuItem.querySelector('div > div:nth-child(4) > span.text').textContent;
        var productImage = menuItem.querySelector('img').src;

        // Find the product in the items array
        var productIndex = -1;
        items.forEach((category, categoryIndex) => {
            category.items.forEach((subcategory, subcategoryIndex) => {
                subcategory.items.forEach((product, productIndex) => {
                    if (product.name === productName && product.price === parseFloat(productPrice) && product.description === productDescription && product.image === productImage) {
                        productIndex = categoryIndex + subcategoryIndex + productIndex;
                    }
                });
            });
        });

        // Remove the product from the items array
        if (productIndex !== -1) {
            var categoryIndex = Math.floor(productIndex / (items[0].items.length * items[0].items[0].items.length));
            var subcategoryIndex = Math.floor((productIndex % (items[0].items.length * items[0].items[0].items.length)) / items[0].items[0].items.length);
            var productIndexInSubcategory = productIndex % items[0].items[0].items.length;
            items[categoryIndex].items[subcategoryIndex].items.splice(productIndexInSubcategory, 1);
        }

        // Remove the product from the DOM
        menuItem.remove();
    }
}

function renderMenuItems() {
    items.forEach(category => {
        category.items.forEach(subcategory => {
            const subcategoryDiv = document.getElementById(subcategory.id);
            if (!subcategoryDiv) {
                console.error(`Subcategory div for ${subcategory.id} not found!`);
                return; 
            }

            subcategory.items.forEach(product => {
                const newItem = document.createElement('div');
                newItem.classList.add('menu-item');               
                newItem.innerHTML = `
                    <div>
                        <div>Product ID: <span class="text">1</span><input type="text" class="input hidden" value="1"></div>
                        <div>Product Name: <span class="text">${product.name}</span><input type="text" class="input hidden" value="${product.name}"></div>
                        <div>Price (RM): <span class="text">${product.price.toFixed(2)}</span><input type="text" class="input hidden" value="${product.price.toFixed(2)}"></div>
                        <div>Description: <span class="text">${product.description}</span><input type="text" class="input hidden" value="${product.description}"></div>
                        <img src="${product.image}" alt="Image of ${product.name}" width="100" height="100">
                        <div>
                            <a href="#" class="btn btn-edit" onclick="editItem(event)">Edit</a>
                            <a href="#" class="btn btn-save hidden" onclick="saveItem(event)">Save</a>
                            <a href="#" class="btn btn-delete" onclick="deleteMenuItem(event)">Delete</a>
                        </div>
                    </div>
                `;

                subcategoryDiv.appendChild(newItem);
            });
        });
    });
}


document.addEventListener('DOMContentLoaded', renderMenuItems);
function renderUserList() {
    // Load users from local storage
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.innerHTML = `
            <div>
                <div>User ID: <span class="text">${user.userId}</span><input type="text" class="input hidden" value="${user.userId}"></div>
                <div>Username: <span class="text">${user.username}</span><input type="text" class="input hidden" value="${user.username}"></div>
                <div>Role: <span class="text">${user.role}</span><input type="text" class="input hidden" value="${user.role}"></div>
                <div class="user-details hidden">
                    <p><strong>Email:</strong> <span class="text">${user.email}</span><input type="text" class="input hidden" value="${user.email}"></p>
                    <p><strong>Phone Number:</strong> <span class="text">${user.phoneNumber}</span><input type="text" class="input hidden" value="${user.phoneNumber}"></p>
                    <p><strong>Address:</strong> <span class="text">${user.address}</span><input type="text" class="input hidden" value="${user.address}"></p>
                </div>
                <div>
                    <a href="#" class="btn btn-edit" onclick="editUser(event);editToggleDetail(event);">Edit</a>
                    <a href="#" class="btn btn-save hidden" onclick="saveUser(event);">Save</a>
                    <a href="#" class="btn btn-delete" onclick="deleteUser(event)">Delete</a>
                    <a href="#" class="btn btn-view" onclick="toggleUserDetails(event)">View Details</a>
                </div>
            </div>
        `;
        
        userList.appendChild(userItem);
    });
}
function deleteUser(event) {
    if (confirm("Are you sure you want to delete this user?")) {
        const userItem = event.target.closest('.user-item');
        const userId = userItem.querySelector('div > div:first-child > span.text').textContent;
        const userIndex = users.findIndex(user => user.userId === parseInt(userId));
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
        }
        userItem.remove();
    }
}
document.addEventListener('DOMContentLoaded', renderUserList);
function addNewUser(event) {
    event.preventDefault();
    const addUserModal = document.getElementById('add-user-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    
    modalOverlay.classList.add('show');
    addUserModal.style.display = 'block';
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
document.getElementById('add-user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userId = document.getElementById('user-id').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const address = document.getElementById('address').value;
    
    const newUser = document.createElement('div');
    newUser .classList.add('user-item');
    newUser .classList.add('user-details-container');
    newUser.innerHTML = `
        <div>User ID: <span class="text">${userId}</span><input type="text" class="input hidden" value="${userId}"></div>
        <div>Username: <span class="text">${username}</span><input type="text" class="input hidden" value="${username}"></div>
        <div>Role: <span class="text">${role}</span><input type="text" class="input hidden" value="${role}"></div>
        <div class="user-details hidden">
            <p><strong>Email:</strong> <span class="text">${email}</span><input type="text" class="input hidden" value="${email}"></p>
            <p><strong>Phone Number:</strong> <span class="text">${phoneNumber}</span><input type="text" class="input hidden" value="${phoneNumber}"></p>
            <p><strong>Address:</strong> <span class="text">${address}</span><input type="text" class="input hidden" value="${address}"></p>
        </div>
        <div>
            <a href="#" class="btn btn-edit" onclick="editUser(event);editToggleDetail(event);">Edit</a>
            <a href="#" class="btn btn-save hidden" onclick="saveUser(event);">Save</a>
            <a href="#" class="btn btn-delete" onclick="deleteUser(event)>Delete</a>
            <a href="#" class="btn btn-view" onclick="toggleUserDetails(event)">View Details</a>
        </div>
    `;
    
    document.getElementById('user-list').appendChild(newUser);
    closeAddUserModal();
});
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
function saveUser(event) {
    event.preventDefault();
    const item = event.target.closest('.user-item');
    const userDetailsContainer = item.querySelector('.user-details-container');
    const userDetails = item.querySelector('.user-details');
    const phoneNumber = userDetails.querySelector('p:first-child');
    const address = userDetails.querySelector('p:nth-child(2)');
    const email = userDetails.querySelector('p:last-child');
    
    phoneNumber.innerHTML = `<strong>Phone Number:</strong> ${phoneNumber.querySelector('input').value}`;
    address.innerHTML = `<strong>Address:</strong> ${address.querySelector('input').value}`;
    email.innerHTML = `<strong>Email:</strong> ${email.querySelector('input').value}`;
    
    event.target.classList.add('hidden');
    item.querySelector('.btn-edit').classList.remove('hidden');
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
    document.getElementById('menu-management').classList.add('hidden');
    document.getElementById('user-management').classList.add('hidden');
    document.getElementById('order-management').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}
function closeDetails() {
    document.getElementById('modal-overlay').classList.remove('show');
    document.getElementById('order-details-modal').style.display = 'none';
}

function editItem(event) {
    event.preventDefault();
    const item = event.target.closest('.menu-item');
    item.querySelectorAll('.text').forEach(el => el.classList.add('hidden'));
    item.querySelectorAll('.input').forEach(el => el.classList.remove('hidden'));
    item.querySelector('.btn-edit').classList.add('hidden');
    item.querySelector('.btn-save').classList.remove('hidden');
}

function saveItem(event) {
    event.preventDefault();
    const item = event.target.closest('.menu-item');
    item.querySelectorAll('.text').forEach(el => {
        const input = el.nextElementSibling;
        el.textContent = input.value;
        el.classList.remove('hidden');
        input.classList.add('hidden');
    });
    item.querySelector('.btn-edit').classList.remove('hidden');
    item.querySelector('.btn-save').classList.add('hidden');
}

function editUser(event) {
    event.preventDefault();
    const item = event.target.closest('.user-item');
    item.querySelectorAll('.text').forEach(el => el.classList.add('hidden'));
    item.querySelectorAll('.input').forEach(el => el.classList.remove('hidden'));
    item.querySelector('.btn-edit').classList.add('hidden');
    item.querySelector('.btn-save').classList.remove('hidden');
}

function saveUser(event) {
    event.preventDefault();
    const item = event.target.closest('.user-item');
    item.querySelectorAll('.text').forEach(el => {
        const input = el.nextElementSibling;
        el.textContent = input.value;
        el.classList.remove('hidden');
        input.classList.add('hidden');
    });
    item.querySelector('.btn-edit').classList.remove('hidden');
    item.querySelector('.btn-save').classList.add('hidden');
}

function showAddProductModal(event) {
    event.preventDefault();
    document.getElementById('modal-overlay').classList.add('show');
    document.getElementById('add-product-modal').style.display = 'block';
}

function closeAddProductModal() {
    document.getElementById('modal-overlay').classList.remove('show');
    document.getElementById('add-product-modal').style.display = 'none';
}

document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productId = document.getElementById('product-id').value;
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;
    const productImage = document.getElementById('product-image').files[0];
    const productCategory = document.getElementById('product-category').value; // Get the selected category ID

    if (!productName || !productDescription) {
        alert('Please fill in all the required fields');
        return;
    }

    if (!productImage) {
        alert('Please select a product image');
        return;
    }

    if (!/^\d+$/.test(productId)) {
        alert('Product ID must be a number');
        return;
    }

    const priceParts = productPrice.split('.');
    if (priceParts.length > 2) {
        alert('Price must be a number with up to 2 decimal places');
        return;
    }

    if (priceParts.length === 2 && priceParts[1].length > 2) {
        alert('Price must be a number with up to 2 decimal places');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const newItem = document.createElement('div');
        newItem.classList.add('menu-item');
        newItem.innerHTML = `
            <div>
                <div>Product ID: <span class="text">${productId}</span><input type="text" class="input hidden" value="${productId}" required pattern="[0-9]*"></div>
                <div>Product Name: <span class="text">${productName}</span><input type="text" class="input hidden" value="${productName}" required></div>
                <div>Price (RM): <span class="text">${productPrice}</span><input type="text" class="input hidden" value="${productPrice}" required></div>
                <div>Description: <span class="text">${productDescription}</span><input type="text" class="input hidden" value="${productDescription}" required></div>
                <img src="${e.target.result}" alt="Image of ${productName}" width="100" height="100">
                <div>
                    <a href="#" class="btn btn-edit" onclick="editItem(event)">Edit</a>
                    <a href="#" class="btn btn-save hidden" onclick="saveItem(event)">Save</a>
                    <a href="#" class="btn btn-delete" onclick="deleteMenuItem(event)">Delete</a>
                </div>
            </div>
        `;

        // Append the new item to the selected category
        const categoryDiv = document.getElementById(productCategory);
        if (categoryDiv) {
            categoryDiv.appendChild(newItem);
        } else {
            alert('Selected category not found!');
        }

        closeAddProductModal();
    };
    reader.readAsDataURL(productImage);
});

function Admin_LogOut(){
    if (confirm("You are trying log-out admin system panel, proceed to continue this action.")) {
        isLoggedIn = false;
        window.location.href = 'index.php';
    }
}