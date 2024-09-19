let count = 0;

const countDisplay = document.getElementById('countDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const colorBtn = document.getElementById('colorBtn');

function updateDisplay() {
    countDisplay.textContent = count;
}
function increment() {
    count++;
    updateDisplay();
}
function decrement() {
    if (count > 0) {
        count--;
    } else {
        alert("Count cannot be negative!");
    }
    updateDisplay();
}
function reset() {
    count = 0;
    updateDisplay();
}
function changeColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);
colorBtn.addEventListener('click', changeColor)

updateDisplay();
