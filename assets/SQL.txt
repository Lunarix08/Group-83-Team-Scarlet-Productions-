
CREATE DATABASE fabianero;

USE fabianero;

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    card_number VARCHAR(20) NOT NULL,
    cvv VARCHAR(10) NOT NULL,
    created_at DATETIME NOT NULL
);

-- Insert data into the payments table
INSERT INTO payments (payment_id, order_id, name, email, phone_number, card_number, cvv, created_at) VALUES
(2, 'Ord2', 'GH', 'idk@gmail.com', '01203912390', '12345678', 'asad', '2024-10-15 21:52:29');


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    address VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    role ENUM('User', 'Admin') NOT NULL
);

-- Insert data into the users table
INSERT INTO users (id, email, username, phone_number, address, password, role) VALUES
(12125, 'DailyGrindAdmin@gmail.com', 'Admin', NULL, NULL, 'DailyGrindAdmin123', 'Admin'),

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    maincategory VARCHAR(255) NOT NULL,
    subcategory VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255),
    description TEXT,
    status VARCHAR(255) NOT NULL
);

-- Insert data into the products table
INSERT INTO products (product_id, maincategory, subcategory, name, price, image, description, status) VALUES
(1, 'coffee', 'espresso-beverages', 'Espresso', 8.00, 'https://www.digitalassets.starbucks.com/espresso.jpg', 'A strong shot of pure coffee.', 'Available'),
(2, 'coffee', 'espresso-beverages', 'Americano', 8.00, 'https://www.digitalassets.starbucks.com/americano.jpg', 'Espresso diluted with water for a lighter flavor.', 'Available'),
(3, 'coffee', 'espresso-beverages', 'Caffè Latte', 14.00, 'https://www.digitalassets.starbucks.com/latte.jpg', 'A balanced mix of espresso, steamed milk, and foam.', 'Available'),
(4, 'coffee', 'espresso-beverages', 'Cappuccino', 14.00, 'https://www.digitalassets.starbucks.com/cappuccino.jpg', 'Espresso steamed with milk and a light layer of foam.', 'Available'),
(5, 'coffee', 'espresso-beverages', 'Caramel Macchiato', 14.00, 'https://www.digitalassets.starbucks.com/caramel_macchiato.jpg', 'Layers of vanilla syrup, espresso, and caramel drizzle.', 'Available'),
(6, 'coffee', 'espresso-beverages', 'Mocha', 16.00, 'https://www.digitalassets.starbucks.com/mocha.jpg', 'Espresso, chocolate syrup, and steamed milk with whipped cream.', 'Available'),
(7, 'coffee', 'espresso-beverages', 'Flat White', 14.00, 'https://www.digitalassets.starbucks.com/flat_white.jpg', 'A shot of espresso with a dollop of steamed milk.', 'Available'),
(8, 'coffee', 'iced-espresso-beverages', 'Iced Americano', 10.00, 'https://www.digitalassets.starbucks.com/iced_americano.jpg', 'Espresso topped with ice and water.', 'Available'),
(9, 'coffee', 'iced-espresso-beverages', 'Iced Latte', 14.00, 'https://www.digitalassets.starbucks.com/iced_latte.jpg', 'Chilled espresso mixed with cold milk.', 'Available'),
(10, 'coffee', 'iced-espresso-beverages', 'Iced Blonde Vanilla Latte', 16.00, 'https://www.digitalassets.starbucks.com/iced_blonde_vanilla_latte.jpg', 'Light blonde espresso, milk, and ice, topped with vanilla.', 'Available'),
(11, 'coffee', 'iced-espresso-beverages', 'Iced Caramel Macchiato', 16.00, 'https://www.digitalassets.starbucks.com/iced_caramel_macchiato.jpg', 'Cold espresso, milk, and caramel drizzle.', 'Available'),
(12, 'coffee', 'blonde-roast-&-brewed-coffee', 'Blonde Roast Coffee', 8.00, 'https://www.digitalassets.starbucks.com/blonde_roast.jpg', 'Light and aromatic coffee.', 'Available'),
(13, 'coffee', 'cold-coffee', 'Nitro Cold Brew', 14.00, 'https://www.digitalassets.starbucks.com/nitro_cold_brew.jpg', 'Cold brew coffee with nitrogen for a rich foam.', 'Available'),
(14, 'bread', 'bagels', 'Plain Bagel', 7.00, 'https://www.digitalassets.starbucks.com/plain_bagel.jpg', 'Simple, plain bagel.', 'Available'),
(15, 'bread', 'savory-pastries', 'Ham & Cheese Roll', 8.00, 'https://www.digitalassets.starbucks.com/ham_cheese_roll.jpg', 'A savory baked roll filled with ham and cheese.', 'Available'),
(16, 'bread', 'scones', 'Blueberry Scone', 8.00, 'https://www.digitalassets.starbucks.com/blueberry_scone.jpg', 'A scone with juicy blueberries.', 'Available'),
(17, 'bread', 'sweet-pastries', 'Cinnamon Roll', 8.00, 'https://www.digitalassets.starbucks.com/cinnamon_roll.jpg', 'Soft pastry with cinnamon and sugar.', 'Available'),
(18, 'cake', 'creamy-cakes', 'Classic Cheesecake', 15.00, 'https://www.digitalassets.starbucks.com/classic_cheesecake.jpg', 'Rich cheesecake with a buttery graham crust.', 'Available'),
(19, 'cake', 'layered-cakes', 'Chocolate Fudge Cake', 16.00, 'https://www.digitalassets.starbucks.com/chocolate_fudge_cake.jpg', 'Layers of fudge and chocolate sponge.', 'Available'),
(20, 'cake', 'brownie', 'Chocolate Brownie', 14.00, 'https://www.digitalassets.starbucks.com/chocolate_brownie.jpg', 'Fudgy brownie with chocolate chunks.', 'Available');
