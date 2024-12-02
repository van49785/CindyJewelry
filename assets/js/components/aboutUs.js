

document.addEventListener('DOMContentLoaded', () => {
    // Tải nội dung AboutUs
    const aboutUsContainer = document.getElementById('aboutUs');
    fetch('../../components/aboutUs.html') // Đường dẫn từ aboutUs.js tới aboutUs.html
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            aboutUsContainer.innerHTML = data;
            initializeAboutUs();
        })
        .catch(error => console.error('Error loading AboutUs:', error));
});

