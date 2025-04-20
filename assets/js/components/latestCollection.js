// Mock data to simulate the products
const products = [
    { _id: '7', name: 'Spike Earrings', image: ['/assets/images/bongtai1.png'], price: 125, bestseller: true },
    { _id: '8', name: 'Diamonds and Gold Eternity Mini Hoops', image: ['/assets/images/bongtai2.png'], price: 730, bestseller: true },
    { _id: '9', name: 'Infinity Necklace', image: ['/assets/images/vongco4.png'], price: 154, bestseller: true },
    { _id: '10', name: 'Twister Ring', image: ['/assets/images/nhan1.png'], price: 95, bestseller: true },
    { _id: '11', name: 'Laura Bracelet', image: ['/assets/images/vongtay1.png'], price: 87, bestseller: true },
    { _id: '12', name: 'Eternum Bracelet', image: ['/assets/images/vongtay3.png'], price: 103, bestseller: false },
    { _id: '13', name: 'Blue lace agate Moon ring', image: ['/assets/images/nhan6.png'], price: 60 },
    { _id: '14', name: 'Isa Diamond cord bracelet', image: ['/assets/images/vongtay5.png'], price: 70 },
    { _id: '15', name: 'Loop chain bracelet', image: ['/assets/images/vongtay4.png'], price: 80 },
    { _id: '16', name: 'Olga mini hoops', image: ['/assets/images/bongtai3.png'], price: 90 },
    { _id: '17', name: 'Mini Crown Necklace', image: ['/assets/images/vongco3.png'], price: 100 },
];

// Fetch và nhúng nội dung Latest Collection
document.addEventListener('DOMContentLoaded', () => {
    const latestCollectionContainer = document.getElementById('latestCollection');
    if (!latestCollectionContainer) {
        console.error("Container for latest collection not found");
        return;
    }

    fetch('../../components/latestCollection.html')
    .then(response => response.text())
    .then(data => {
        latestCollectionContainer.innerHTML = data;
        renderLatestCollection(products); // Gọi hàm render dành riêng cho Latest Collection
    })
    .catch(error => console.error('Error loading latestCollection:', error));

});

// Function to render product items
const renderLatestCollection = (products) => {
    const productGrid = document.getElementById('latestCollection-grid'); // ID container riêng cho latest collection
    if (!productGrid) {
        console.error("Product grid container for latest collection not found");
        return;
    }

    products.slice(0, 10).forEach((product) => {
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

