// 1. Categories & Products List
let products = [
    // --- Electronic Devices ---
    { id: 1, name: "Wireless Headphones", price: 1499, category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { id: 2, name: "Smart Watch", price: 1999, category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
    { id: 3, name: "Bluetooth Speaker", price: 999, category: "electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400" },
    { id: 4, name: "Smartphone", price: 15999, category: "electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { id: 5, name: "Gaming Mouse", price: 799, category: "electronics", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400" },
    { id: 6, name: "Mechanical Keyboard", price: 2499, category: "electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
    { id: 7, name: "DSLR Camera", price: 35000, category: "electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400" },

    // --- Female Fashion ---
    { id: 8, name: "Floral Summer Dress", price: 1299, category: "female", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400" },
    { id: 9, name: "Designer Handbag", price: 1899, category: "female", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400" },
    { id: 10, name: "Classic Gold Earrings", price: 799, category: "female", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400" },
    { id: 11, name: "Women's Heels", price: 1499, category: "female", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400" },
    { id: 12, name: "Silk Scarf", price: 499, category: "female", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400" },
    { id: 13, name: "Chic Sunglasses", price: 899, category: "female", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400" },
    { id: 14, name: "Casual Denim Jacket", price: 1799, category: "female", image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=400" },

    // --- Male Fashion ---
    { id: 15, name: "Running Shoes", price: 1299, category: "male", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
    { id: 16, name: "Men's Casual Shirt", price: 999, category: "male", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400" },
    { id: 17, name: "Leather Wallet", price: 599, category: "male", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400" },
    { id: 18, name: "Formal Blazer", price: 2999, category: "male", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400" },
    { id: 19, name: "Sports Track Pants", price: 899, category: "male", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400" },
    { id: 20, name: "Aviator Sunglasses", price: 799, category: "male", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" },
    { id: 21, name: "Men's Leather Belt", price: 499, category: "male", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400" },

    // --- Makeup Products ---
    { id: 22, name: "Matte Lipstick", price: 499, category: "makeup", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400" },
    { id: 23, name: "Liquid Foundation", price: 899, category: "makeup", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400" },
    { id: 24, name: "Eyeshadow Palette", price: 1199, category: "makeup", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400" },
    { id: 25, name: "Waterproof Mascara", price: 599, category: "makeup", image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400" },
    { id: 26, name: "Makeup Brush Set", price: 799, category: "makeup", image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400" },
    { id: 27, name: "Blush & Highlighter", price: 699, category: "makeup", image: "https://images.unsplash.com/photo-1537090150536-b5c6d377508c?w=400" },
    { id: 28, name: "Nail Polish Kit", price: 399, category: "makeup", image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400" },

    // --- Home Accessories ---
    { id: 29, name: "Modern Table Lamp", price: 1299, category: "home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400" },
    { id: 30, name: "Scented Candles Set", price: 699, category: "home", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400" },
    { id: 31, name: "Decorative Wall Clock", price: 999, category: "home", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400" },
    { id: 32, name: "Plush Sofa Cushion", price: 499, category: "home", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400" },
    { id: 33, name: "Indoor Ceramic Planter", price: 599, category: "home", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
    { id: 34, name: "Wall Art Painting", price: 1499, category: "home", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400" },
    { id: 35, name: "Cotton Bed Sheet", price: 1199, category: "home", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400" }
];

let cart = [];
let orders = []; // Array to store order history

// Display products based on selected category
function displayProducts(category = "all") {
    const productList = document.getElementById("product-list");
    if (!productList) return;
    productList.innerHTML = "";

    const filteredProducts = (category === "all") 
        ? products 
        : products.filter(p => p.category === category);

    filteredProducts.forEach(function (product) {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

// Add a product to the cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    displayCart();
}

// Display cart items with quantity controls
function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    
    if (!cartItems) return;
    cartItems.innerHTML = "";
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(function (item) {
            total += item.price * item.quantity;
            count += item.quantity;
            
            cartItems.innerHTML += `
                <div class="cart-item">
                    <span>${item.name} (x${item.quantity}) — ₹${item.price * item.quantity}</span>
                    <div>
                        <button onclick="changeQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, 1)">+</button>
                        <button onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
        });
    }

    if (cartCount) cartCount.textContent = count;
    if (cartTotal) cartTotal.textContent = total;
}

// Change quantity
function changeQuantity(productId, change) {
    const item = cart.find(product => product.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    displayCart();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCart();
}

// Display user order history
function displayOrders() {
    const orderHistoryItems = document.getElementById("order-history-items");
    if (!orderHistoryItems) return;

    if (orders.length === 0) {
        orderHistoryItems.innerHTML = "<p>You haven't placed any orders yet.</p>";
        return;
    }

    orderHistoryItems.innerHTML = "";
    orders.forEach(function (order) {
        orderHistoryItems.innerHTML += `
            <div class="cart-item" style="border-bottom: 2px solid #f3e8ff; padding: 15px 0;">
                <div>
                    <h4 style="color: #581c87;">Order ID: ${order.id}</h4>
                    <p style="font-size: 14px; color: #6b7280;">Date: ${order.date}</p>
                    <p style="font-size: 14px; color: #1f2937;">Total Amount: <b>₹${order.total}</b></p>
                </div>
                <div style="font-size: 12px; color: #4b5563;">
                    <p>Payment Method: ${order.paymentMethod}</p>
                    <p>Status: <strong>Order Placed</strong></p>
                </div>
            </div>
        `;
    });
}

// Redirect to separate checkout.html payment page
const checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty! Please add products first.");
            return;
        }

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        // Save total in browser local storage
        localStorage.setItem("cartTotal", total);

        // Save current cart as order to history (will be confirmed in checkout page in a real app)
        const orderId = "ORD" + Date.now().toString().slice(-6);
        const orderDate = new Date().toLocaleString();
        
        // Demo purpose: Assuming COD/UPI payment chosen for history entry here
        // (In a real app, this logic happens *after* successful payment in checkout.html)
        orders.push({
            id: orderId,
            total: total,
            date: orderDate,
            paymentMethod: "UPI/COD (Demo History Entry)",
            items: [...cart]
        });
        displayOrders();

        // Open separate payment page
        window.location.href = "checkout.html";

        // Optional: Clear cart after order is *assumed* placed
        cart = [];
        displayCart();
    });
}

// Initialize page on load
displayProducts("all");
displayCart();
displayOrders();