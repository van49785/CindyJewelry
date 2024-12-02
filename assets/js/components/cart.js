// Mock data
const products = [
    { _id: '1', name: 'Spike Earrings', image: ['/assets/images/bongtai1.png'], price: 125, bestseller: true },
    { _id: '2', name: 'Diamonds and Gold Eternity Mini Hoops', image: ['/assets/images/bongtai2.png'], price: 730, bestseller: true },
    { _id: '3', name: 'Infinity Necklace', image: ['/assets/images/vongco4.png'], price: 154, bestseller: true }
];
  
  const cartItems = {
    '1': { gold: 2, silver: 1 },
    '2': { gold: 1 },
  };
  
  // Mock currency
  const currency = '$';
  
  // Mock function for updating quantity
  function updateQuantity(productId, color, quantity) {
    if (quantity === 0) {
      delete cartItems[productId][color];
      if (Object.keys(cartItems[productId]).length === 0) delete cartItems[productId];
    } else {
      if (!cartItems[productId]) cartItems[productId] = {};
      cartItems[productId][color] = quantity;
    }
    renderCart(); // Re-render cart
  }
  
  // Mock function for navigation
  function navigate(url) {
    // alert(`Navigating to: ${url}`);
    window.location.href = url; // Uncomment this to enable navigation
  }
  
  // Calculate total cart price
  function calculateTotal() {
    let total = 0;
    for (const productId in cartItems) {
      for (const color in cartItems[productId]) {
        const product = products.find((p) => p._id === productId);
        if (product) {
          total += product.price * cartItems[productId][color];
        }
      }
    }
    return total;
  }
  
  // Render cart
  function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = `
      <div class="cart-title">Your Cart</div>
      <div>
        ${Object.keys(cartItems)
          .map((productId) => {
            const product = products.find((p) => p._id === productId);
            return Object.keys(cartItems[productId])
              .map((color) => {
                const quantity = cartItems[productId][color];
                return `
                  <div class="cart-item">
                    <div class="details">
                      <img src="${product.image[0]}" alt="${product.name}" />
                      <div>
                        <p>${product.name}</p>
                        <div class="price">
                          <span>${currency}${product.price}</span>
                          <span>${color}</span>
                        </div>
                      </div>
                    </div>
                    <input
                      type="number"
                      min="1"
                      value="${quantity}"
                      onchange="updateQuantity('${productId}', '${color}', parseInt(this.value))"
                    />
                    <img
                      src="./assets/images/bin-icon.png"
                      alt="Remove"
                      class="remove-icon"
                      onclick="updateQuantity('${productId}', '${color}', 0)"
                    />
                  </div>
                `;
              })
              .join('');
          })
          .join('')}
      </div>
      <div class="cart-total">
        <p>Total: ${currency}${calculateTotal()}</p>
        <button class="checkout-button" onclick="navigate('/PlaceOrder.html')">Proceed to Checkout</button>
      </div>
    `;
  }
  
  // Initial render
  renderCart();
  