<html>
<head>
    <title>Skibidi Toilet</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
    <style>
        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background-color: #000;
            color: #fff;
        }
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #1a1a1a;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
        .navbar a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
        }
        .navbar a:hover {
            text-decoration: underline;
        }
        .navbar .right-icons i {
            margin: 0 10px;
        }
        .hero {
            position: relative;
            text-align: center;
            color: white;
            overflow: hidden;
            margin-top: 60px; /* Adjust this value based on the height of your navbar */
        }
        .hero img {
            width: 100%;
            height: auto;
            transition: opacity 1s ease-in-out;
        }
        .hero-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .hero-text h1 {
            font-size: 50px;
            margin: 0;
        }
        .hero-text p {
            font-size: 20px;
            margin: 10px 0;
        }
        .hero-text button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #fff;
            color: #000;
            border: none;
            cursor: pointer;
        }
        .browse, .recommendation, .introducing-products, .contact, .feedback {
            padding: 20px;
            background-color: #1a1a1a;
        }
        .browse h2, .recommendation h2, .introducing-products h2, .contact h2, .feedback h2 {
            margin: 0 0 20px 0;
        }
        .browse .items, .recommendation .items {
            display: flex;
            justify-content: space-between;
        }
        .browse .item, .recommendation .item {
            width: 30%;
            background-color: #333;
            padding: 10px;
            border-radius: 5px;
            position: relative;
            overflow: hidden;
        }
        .browse .item img, .recommendation .item img {
            width: 100%;
            height: auto;
            border-radius: 5px;
        }
        .recommendation .items {
            overflow-x: auto;
            white-space: nowrap;
        }
        .recommendation .item {
            display: inline-block;
            width: 200px;
            margin-right: 10px;
        }
        .introducing-products {
            display: flex;
            justify-content: space-between;
        }
        .introducing-products .text {
            width: 60%;
        }
        .introducing-products .video {
            width: 35%;
        }
        .contact p, .feedback p {
            margin: 10px 0;
        }
        .feedback form {
            display: flex;
            flex-direction: column;
        }
        .feedback form input, .feedback form textarea {
            margin-bottom: 10px;
            padding: 10px;
            border: none;
            border-radius: 5px;
        }
        .feedback form button {
            padding: 10px;
            background-color: #fff;
            color: #000;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .item .hover-info {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
            color: #fff;
            padding: 10px;
            box-sizing: border-box;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .item:hover .hover-info {
            opacity: 1;
        }
    </style>
</head>
<body>
    <div class="navbar">
        <div class="left">
            <a href="#">
                <img alt="Logo" height="50" src="https://storage.googleapis.com/a1aa/image/iaz7taOYOdofW6iM4ONO3FosYOfYq9SOzF0C1c4fA1wyNpQnA.jpg" width="100"/>
            </a>
        </div>
        <div class="center">
            <a href="#">HOME</a>
            <a href="#">RETAIL</a>
            <a href="#">SHOP <i class="fas fa-caret-down"></i></a>
            <a href="#">CONTACT</a>
        </div>
        <div class="right-icons">
            <a href="#"><i class="fas fa-globe"></i> MYR RM</a>
            <a href="#"><i class="fas fa-search"></i></a>
            <a href="#"><i class="fas fa-user"></i></a>
            <a href="#"><i class="fas fa-shopping-cart"></i></a>
        </div>
    </div>
    <div class="hero">
        <div class="slides">
            <img class="slide" alt="Hero Image 1" src="https://storage.googleapis.com/a1aa/image/1bT0i9y4onoOMZHkXakWst1kYoGWr8lfG9QJ1bzR6IsemUoTA.jpg" style="opacity: 1;">
            <img class="slide" alt="Hero Image 2" src="https://storage.googleapis.com/a1aa/image/XOdsS7AL4RqaMVc8y1S3AZKj4procgAlaseX1GAvmPtfmUoTA.jpg" style="opacity: 0;">
            <img class="slide" alt="Hero Image 3" src="https://storage.googleapis.com/a1aa/image/Da6aLetQnMzTe0fe88OV7hW4gO8ZeIcpkGyNgBCSgl713kCdC.jpg" style="opacity: 0;">
        </div>
        <div class="hero-text">
            <p>GLOBAL RETAIL LAUNCH</p>
            <h1>IN STORES NOW</h1>
            <button>Shop Products</button>
        </div>
    </div>
    <div class="browse">
        <h2>Browse</h2>
        <div class="items">
            <div class="item">
                <img alt="Item 1" height="200" src="https://storage.googleapis.com/a1aa/image/XOdsS7AL4RqaMVc8y1S3AZKj4procgAlaseX1GAvmPtfmUoTA.jpg" width="300"/>
                <div class="hover-info">
                    <p>Product Name: Item 1</p>
                    <p>Price: $10.00</p>
                </div>
            </div>
            <div class="item">
                <img alt="Item 2" height="200" src="https://storage.googleapis.com/a1aa/image/Da6aLetQnMzTe0fe88OV7hW4gO8ZeIcpkGyNgBCSgl713kCdC.jpg" width="300"/>
                <div class="hover-info">
                    <p>Product Name: Item 2</p>
                    <p>Price: $20.00</p>
                </div>
            </div>
            <div class="item">
                <img alt="Item 3" height="200" src="https://storage.googleapis.com/a1aa/image/2SUs2W4fQqwoOKD4SRaFEGFin7kUWbqX4lDDCETrDV0dTK0JA.jpg" width="300"/>
                <div class="hover-info">
                    <p>Product Name: Item 3</p>
                    <p>Price: $30.00</p>
                </div>
            </div>
        </div>
    </div>
    <div class="recommendation">
        <h2>Recommendation</h2>
        <div class="items">
            <div class="item">
                <img alt="Recommendation 1" height="200" src="https://storage.googleapis.com/a1aa/image/1bT0i9y4onoOMZHkXakWst1kYoGWr8lfG9QJ1bzR6IsemUoTA.jpg" width="300"/>
                <div class="hover-info">
                    <p>Product Name: Recommendation 1</p>
                    <p>Price: $40.00</p>
                </div>
            </div>
            <div class="item">
                <img alt="Recommendation 2" height="200" src="https://storage.googleapis.com/a1aa/image/XOdsS7AL4RqaMVc8y1S3AZKj4procgAlaseX1GAvmPtfmUoTA.jpg" width="300"/>
                <div class="hover-info">
                    <p>Product Name: Recommendation 2</p>
                    <p>Price: $50.00</p>
                </div>
            </div>
            <div class="item">
                <img alt="Recommendation 3" height="200" src="https://storage.googleapis.com/a1aa/image/Da6aLetQnMzTe0fe88OV7hW4gO8ZeIcpkGyNgBCSgl713kCdC.jpg" width="300"/>
                <div class="hover-info">
                    <p>Product Name: Recommendation 3</p>
                    <p>Price: $60.00</p>
                </div>
            </div>
            <div class="item">
                <img alt="Recommendation 4" height="200" src="https://storage.googleapis.com/a1aa/image/2SUs2W4fQqwoOKD4SRaFEGFin7kUWbqX4lDDCETrDV0dTK0JA.jpg" width="300"/>
                <div class="hover-info">
                    <p>Product Name: Recommendation 4</p>
                    <p>Price: $70.00</p>
                </div>
            </div>
            <div class="item">
                <img alt="Recommendation 5" height="200" src="https://storage.googleapis.com/a1aa/image/XOdsS7AL4RqaMVc8y1S3AZKj4procgAlaseX1GAvmPtfmUoTA.jpg" width="300"/>
                <div class="hover-info">
                    <p>Product Name: Recommendation 5</p>
                    <p>Price: $80.00</p>
                </div>
            </div>
            <div class="item">
                <img alt="Recommendation 6" height="200" src="https://storage.googleapis.com/a1aa/image/Da6aLetQnMzTe0fe88OV7hW4gO8ZeIcpkGyNgBCSgl713kCdC.jpg" width="300"/>
                <div class="hover-info">
                    <p>Product Name: Recommendation 6</p>
                    <p>Price: $90.00</p>
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
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    <div class="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need further information, please feel free to contact us:</p>
        <p>Email: support@skibiditoilet.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Skibidi Street, Toilet City, TC 12345</p>
    </div>
    <div class="feedback">
        <h2>Feedback</h2>
        <form>
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" rows="5" placeholder="Your Feedback" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 3000);
    </script>
</body>
</html>