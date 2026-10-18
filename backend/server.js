
const express = require("express");

const app = express();
const PORT = 3000;

// Allow the server to read JSON data
app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.send("Welcome to ShopEase Backend API!");
});

// Test products API
app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 1499
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 1999
        },
        {
            id: 3,
            name: "Running Shoes",
            price: 1299
        }
    ];

    res.json(products);
});

// Start the server
app.listen(PORT, () => {
    console.log(`ShopEase server running at http://localhost:${PORT}`);
});
