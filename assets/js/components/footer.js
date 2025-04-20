// assets/js/components/footer.js

document.addEventListener('DOMContentLoaded', () => {
    // Tải nội dung Footer
    const footerContainer = document.getElementById('footer');
    fetch('./components/footer.html') // Đường dẫn từ footer.js tới footer.html
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data;
            initializeFooter();
        })
        .catch(error => console.error('Error loading footer:', error));
});

