// Mock data to simulate products from ShopContext
const products = [
    { _id: '1', name: 'Spike Earrings', image: ['/assets/images/bongtai1.png'], price: 125, bestseller: true },
    { _id: '2', name: 'Diamonds and Gold Eternity Mini Hoops', image: ['/assets/images/bongtai2.png'], price: 730, bestseller: true },
    { _id: '3', name: 'Infinity Necklace', image: ['/assets/images/vongco4.png'], price: 154, bestseller: true },
    { _id: '4', name: 'Twister Ring', image: ['/assets/images/nhan1.png'], price: 95, bestseller: true },
    { _id: '5', name: 'Laura Bracelet', image: ['/assets/images/vongtay1.png'], price: 87, bestseller: true },
    { _id: '6', name: 'Eternum Bracelet', image: ['/assets/images/vongtay3.png'], price: 103, bestseller: false },
];

// Fetch và nhúng nội dung Best Seller
document.addEventListener('DOMContentLoaded', () => {
    const bestsellerContainer = document.getElementById('bestSeller');
    if (!bestsellerContainer) {
        console.error("Container for best sellers not found");
        return;
    }

    fetch('./components/bestSeller.html')
    .then(response => response.text())
    .then(data => {
        bestsellerContainer.innerHTML = data;
        renderBestSellers(products); // Gọi hàm render dành riêng cho Best Sellers
    })
    .catch(error => console.error('Error loading bestSeller:', error));
});

// Function để render sản phẩm
const renderBestSellers = (products) => {
    const productGrid = document.getElementById('bestSeller-grid'); // ID container riêng cho best seller
    if (!productGrid) {
        console.error("Product grid container for best sellers not found");
        return;
    }

    const bestSellers = products.filter(product => product.bestseller).slice(0, 5);
    bestSellers.forEach((product) => {
        const productItem = document.createElement('a');
        productItem.className = 'product-item';
        productItem.href = `/product/${product._id}`;

        const productImage = document.createElement('img');
        productImage.src = product.image[0];
        productImage.alt = product.name;

        const productName = document.createElement('p');
        productName.className = 'product-name';
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.className = 'product-price';
        productPrice.textContent = `$${product.price}`;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);

        productGrid.appendChild(productItem);
    });
};
