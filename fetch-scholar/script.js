const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

// Function to fetch products from the API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to display products on the DOM
function displayProducts(products) {
    productList.innerHTML = '';

    products.forEach((product) => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
        `;

        productList.appendChild(productItem);
    });
}

// Event listener for search input
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Event listener for sorting select
sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;

    if (sortBy === 'price-asc') {
        products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        products.sort((a, b) => b.price - a.price);
    }

    displayProducts(products);
});

let products = [];

// Fetch products and display them when the page loads
window.addEventListener('load', async () => {
    products = await fetchProducts();
    displayProducts(products);
});
