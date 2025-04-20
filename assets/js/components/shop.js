// Mock data for products
const products = [
  { _id: '1', name: 'Spike Earrings', category: "Earing", image: ['./assets/images/bongtai1.png'], price: 125, bestseller: true },
  { _id: '2', name: 'Diamonds and Gold Eternity Mini Hoops', category: "Earing", image: ['./assets/images/bongtai2.png'], price: 730, bestseller: true },
  { _id: '3', name: 'Infinity Necklace', category: "Necklace", image: ['./assets/images/vongco4.png'], price: 154, bestseller: true },
  { _id: '4', name: 'Twister Ring', category: "Ring", image: ['./assets/images/nhan1.png'], price: 95, bestseller: true },
  { _id: '5', name: 'Laura Bracelet', category: "Bracelet", image: ['./assets/images/vongtay1.png'], price: 87, bestseller: true },
  { _id: '7', name: 'Spike Earrings', category: "Earing", image: ['./assets/images/bongtai1.png'], price: 125, bestseller: true },
  { _id: '8', name: 'Diamonds and Gold Eternity Mini Hoops', category: "Earing", image: ['./assets/images/bongtai2.png'], price: 730, bestseller: true },
  { _id: '9', name: 'Infinity Necklace', category: "Necklace", image: ['./assets/images/vongco4.png'], price: 154, bestseller: true },
  { _id: '10', name: 'Twister Ring', category: "Ring", image: ['./assets/images/nhan1.png'], price: 95, bestseller: true },
  { _id: '11', name: 'Laura Bracelet', category: "Bracelet", image: ['./assets/images/vongtay1.png'], price: 87, bestseller: true },
  { _id: '12', name: 'Eternum Bracelet', category: "Bracelet", image: ['./assets/images/vongtay3.png'], price: 103, bestseller: false },
  { _id: '13', name: 'Blue lace agate Moon ring', category: "Ring", image: ['./assets/images/nhan6.png'], price: 60 },
  { _id: '14', name: 'Isa Diamond cord bracelet', category: "Bracelet", image: ['./assets/images/vongtay5.png'], price: 70 },
  { _id: '15', name: 'Loop chain bracelet', category: "Bracelet", image: ['./assets/images/vongtay4.png'], price: 80 },
  { _id: '16', name: 'Olga mini hoops', category: "Earing", image: ['./assets/images/bongtai3.png'], price: 90 },
  { _id: '17', name: 'Mini Crown Necklace', category: "Necklace", image: ['./assets/images/vongco3.png'], price: 100 },
];

// State variables
let filterProduct = [...products];
let categoryFilter = [];
let sortType = 'relevant';

// Render shop page
function renderShop() {
  const shopContainer = document.getElementById('shop-container');
  if (!shopContainer) {
      console.error("Shop container not found");
      return;
  }

  // Render filters and product section
  shopContainer.innerHTML = `
      <div class="filter-section">
          <p>FILTERS</p>
          <div class="check-box">
            <label>
                <input type="checkbox" value="Earing" onchange="toggleCategory(this)" ${categoryFilter.includes('Earing') ? 'checked' : ''} />
                Earing
            </label>
            <label>
                <input type="checkbox" value="Necklace" onchange="toggleCategory(this)" ${categoryFilter.includes('Necklace') ? 'checked' : ''} />
                Necklace
            </label>
            <label>
                <input type="checkbox" value="Ring" onchange="toggleCategory(this)" ${categoryFilter.includes('Ring') ? 'checked' : ''} />
                Ring
            </label>
            <label>
                <input type="checkbox" value="Bracelet" onchange="toggleCategory(this)" ${categoryFilter.includes('Bracelet') ? 'checked' : ''} />
                Bracelet
            </label>
          </div>
      </div>
      <div class="product-section">
          <div class="product-header">
              <h2>ALL COLLECTIONS</h2>
              <select onchange="setSortType(this.value)">
                  <option value="relevant">Sort by: Relevant</option>
                  <option value="low-high">Sort by: Low to High</option>
                  <option value="high-low">Sort by: High to Low</option>
              </select>
          </div>
          <div class="product-grid" id="product-grid">
              ${filterProduct.map(renderProductItem).join('')}
          </div>
      </div>
  `;
}

// Render individual product
function renderProductItem(product) {
  return `
      <div class="product-item">
          <img src="${product.image[0]}" alt="${product.name}" />
          <p>${product.name}</p>
          <p class="price">$${product.price}</p>
      </div>
  `;
}

// Toggle filter categories
function toggleCategory(checkbox) {
  const value = checkbox.value;
  if (checkbox.checked) {
      categoryFilter.push(value);
  } else {
      categoryFilter = categoryFilter.filter((item) => item !== value);
  }
  applyFilter();
}

// Apply filters
function applyFilter() {
  let filtered = [...products];

  // Category filter
  if (categoryFilter.length > 0) {
      filtered = filtered.filter((item) => categoryFilter.includes(item.category));
  }

  filterProduct = filtered;
  renderShop();
}

// Sort products
function setSortType(type) {
  sortType = type;

  switch (sortType) {
      case 'low-high':
          filterProduct.sort((a, b) => a.price - b.price);
          break;
      case 'high-low':
          filterProduct.sort((a, b) => b.price - a.price);
          break;
      default:
          break;
  }

  renderShop();
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderShop();
});
