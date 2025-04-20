// assets/js/components/ourPolicy.js

document.addEventListener('DOMContentLoaded', () => {
    // Tải nội dung OurPolicy
    const ourPolicyContainer = document.getElementById('ourPolicy');
    fetch('./components/ourPolicy.html') // Đường dẫn từ ourPolicy.js tới ourPolicy.html
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            ourPolicyContainer.innerHTML = data;
            initializeOurPolicy();
        })
        .catch(error => console.error('Error loading OurPolicy:', error));
});

function initializeOurPolicy() {
}
