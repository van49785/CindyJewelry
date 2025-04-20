// Mock product data
const products = [
    { _id: '1', name: 'Spike Earrings', image: ['./assets/images/bongtai1.png'], price: 125, bestseller: true },
    { _id: '2', name: 'Diamonds and Gold Eternity Mini Hoops', image: ['./assets/images/bongtai2.png'], price: 730, bestseller: true },
    { _id: '3', name: 'Infinity Necklace', image: ['./assets/images/vongco4.png'], price: 154, bestseller: true },
    { _id: '4', name: 'Twister Ring', image: ['./assets/images/nhan1.png'], price: 95, bestseller: true },
  ];
  
  const currency = '$';
  
  // Render orders page
  function renderOrders() {
    const container = document.getElementById('orders-container');
    container.innerHTML = `
      <div class="container-order">
        <div class="title">MY ORDERS</div>
        <div>
          ${products.slice(1, 4).map(renderOrderItem).join('')}
        </div>
      </div>
    `;
  }
  
  // Render individual order item
  function renderOrderItem(product) {
    return `
      <div class="order-item">
        <div class="order-details">
          <img src="${product.image[0]}" alt="${product.name}" />
          <div class="order-info">
            <p class="name">${product.name}</p>
            <div class="details">
              <span class="price">${currency}${product.price}</span>
              <span>Quantity: 1</span>
              <span>Color: Gold</span>
            </div>
            <p>Date: <span class="date">3, Oct, 2024</span></p>
          </div>
        </div>
        <div class="order-status">
          <div class="status">
            <span class="status-circle"></span>
            <span>Ready to ship</span>
          </div>
          <div class="track-order-container">
             <button class="track-order-btn">Track Order</button>
          </div>

        </div>
      </div>
    `;
  }
  
  // Initial render
  renderOrders();
  