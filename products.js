// Product data
const products = [
    {
        id: 1,
        name: "Classic White Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        description: "Minimalist design meets comfort in these versatile sneakers."
    },
    {
        id: 2,
        name: "Denim Jacket",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0",
        description: "Timeless denim jacket perfect for any casual outfit."
    },
    {
        id: 3,
        name: "Leather Backpack",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
        description: "Handcrafted leather backpack with modern functionality."
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
        description: "Feature-packed smartwatch with elegant design."
    }
];

// Render products
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize products
document.addEventListener('DOMContentLoaded', renderProducts);