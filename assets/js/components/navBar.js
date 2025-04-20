// assets/js/components/navBar.js

document.addEventListener('DOMContentLoaded', () => {
    // Tải nội dung Navbar
    const navbarContainer = document.getElementById('navbar');
    fetch('./components/navbar.html') // Đường dẫn từ navBar.js tới navbar.html
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
    const cartCountElement = document.getElementById('cartCount');

    // Mở sidebar khi nhấp vào menu icon
    if (menuIcon && sidebar) {
        menuIcon.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    // Đóng sidebar khi nhấp vào back icon
    if (backIcon && sidebar) {
        backIcon.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Cập nhật số lượng giỏ hàng từ localStorage
    updateCartCount();

// Hàm cập nhật số lượng giỏ hàng
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

}
