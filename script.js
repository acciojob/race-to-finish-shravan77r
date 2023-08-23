window.promises = [];
const outputDiv = document.getElementById('output');

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const promises = Array.from({ length: 5 }, (_, index) => {
    return new Promise(resolve => {
        const delay = getRandomTime(1000, 5000);
        setTimeout(() => {
            resolve(`Promise ${index + 1} resolved in ${delay / 1000} seconds`);
        }, delay);
    });
});
Promise.any(promises)
    .then(result => {
        outputDiv.textContent = result;
    })
    .catch(error => {
        console.error(error);
    });