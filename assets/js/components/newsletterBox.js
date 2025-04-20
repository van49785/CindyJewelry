// assets/js/components/newsLetterBox.js

document.addEventListener('DOMContentLoaded', () => {
    // Tải nội dung NewsLetterBox
    const newsletterContainer = document.getElementById('newsletterBox');
    fetch('./components/newsLetterBox.html') // Đường dẫn từ newsLetterBox.js tới newsLetterBox.html
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            newsletterContainer.innerHTML = data;
            initializeNewsLetterBox();
        })
        .catch(error => console.error('Error loading NewsLetterBox:', error));
});

function initializeNewsLetterBox() {
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của form

            const email = newsletterEmail.value.trim();

            if (validateEmail(email)) {
                // Thực hiện hành động sau khi xác thực email thành công
                // Ví dụ: Gửi email tới server hoặc hiển thị thông báo thành công
                alert(`Thank you for subscribing with ${email}!`);
                newsletterForm.reset(); // Làm mới form
            } else {
                // Hiển thị thông báo lỗi nếu email không hợp lệ
                alert('Please enter a valid email address.');
            }
        });
    }
}

// Hàm kiểm tra định dạng email hợp lệ
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
