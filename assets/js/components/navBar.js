document.addEventListener('DOMContentLoaded', () => {
    // Load Navbar content
    const navbarContainer = document.getElementById('navbar');
    fetch('./components/navbar.html') // Update with your repository name
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            navbarContainer.innerHTML = data;
            initializeNavbar();
        })
        .catch(error => console.error('Error loading navbar:', error.message));
});

function initializeNavbar() {
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    const backIcon = document.getElementById('backIcon');

    // Open sidebar when clicking menu icon
    if (menuIcon && sidebar) {
        menuIcon.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    } else {
        console.warn('menuIcon or sidebar element not found');
    }

    // Close sidebar when clicking back icon
    if (backIcon && sidebar) {
        backIcon.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    } else {
        console.warn('backIcon or sidebar element not found');
    }

    // Update cart count from localStorage
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    } else {
        console.warn('cartCountElement not found');
    }
}