document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.getElementById('hero');

    fetch ('../../components/hero.html')
    .then(response => {
        if (!response.ok){
            throw new Error(`HTTP Error! Status: ${response.status}`)
        }
        return response.text();
    })
    .then(data => {
        heroContainer.innerHTML = data;
    })
    .catch(error => console.error('Error loading hero', error));
})