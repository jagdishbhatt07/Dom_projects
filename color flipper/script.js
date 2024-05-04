const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#3498db", "#e74c3c", "#8e44ad", "#2ecc71"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomIndex = getRandomNumber();
    const selectedColor = colors[randomIndex];
    document.body.style.backgroundColor = selectedColor;
    color.textContent = selectedColor;
    color.style.color = selectedColor; // Set text color to match background
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
