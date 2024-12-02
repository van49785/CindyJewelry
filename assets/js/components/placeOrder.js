// Mocking navigation (replace this with your actual logic if needed)
function navigate(url) {
    alert(`Navigating to: ${url}`);
    window.location.href = url;
  }
  
  // Payment method state
  let selectedMethod = 'cod';
  
  // Render Place Order Page
  function renderPlaceOrder() {
    const container = document.getElementById('place-order-container');
    container.innerHTML = `
      <div class="container-order">
        <!-- Left Section: Delivery Information -->
        <div class="form-section">
          <div class="title">DELIVERY INFORMATION</div>
          <div class="input-field-group">
            <input type="text" class="input-field" placeholder="First name" />
            <input type="text" class="input-field" placeholder="Last name" />
          </div>
          <input type="email" class="input-field" placeholder="Email address" />
          <input type="text" class="input-field" placeholder="Street" />
          <div class="input-field-group">
            <input type="text" class="input-field" placeholder="City" />
            <input type="text" class="input-field" placeholder="State" />
          </div>
          <div class="input-field-group">
            <input type="number" class="input-field" placeholder="Zipcode" />
            <input type="text" class="input-field" placeholder="Country" />
          </div>
          <input type="number" class="input-field" placeholder="Phone" />
        </div>
  
        <!-- Right Section: Cart Summary and Payment -->
        <div class="summary-section">
  
          <!-- Payment Method -->
          <div class="title">PAYMENT METHOD</div>
          <div class="payment-methods">
            <div class="payment-option ${selectedMethod === 'card' ? 'active' : ''}" onclick="selectPaymentMethod('card')">
              <div class="circle"></div>
              <img src="/assets/images/Paymentcard.jpg" alt="Card" />
            </div>
            <div class="payment-option ${selectedMethod === 'zalopay' ? 'active' : ''}" onclick="selectPaymentMethod('zalopay')">
              <div class="circle"></div>
              <img src="/assets/images/zalopay.png" alt="ZaloPay" />
            </div>
            <div class="payment-option ${selectedMethod === 'cod' ? 'active' : ''}" onclick="selectPaymentMethod('cod')">
              <div class="circle"></div>
              <span>Cash on Delivery</span>
            </div>
          </div>
  
          <!-- Place Order Button -->
          <button class="place-order-btn" onclick="placeOrder('/Order.html')">PLACE ORDER</button>
        </div>
      </div>
    `;
  }
  
  // Handle payment method selection
  function selectPaymentMethod(method) {
    selectedMethod = method;
    renderPlaceOrder();
  }
  
  // Handle place order action
  function placeOrder() {
    alert(`Order placed with ${selectedMethod} method!`);
    navigate('/Order.html'); // Mock navigation
  }
  
  // Initial render
  renderPlaceOrder();
  