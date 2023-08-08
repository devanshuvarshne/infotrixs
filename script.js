const display = document.getElementById('display');
const historyList = document.getElementById('history-list');

let currentExpression = '';

function updateDisplay(value) {
    currentExpression += value;
    display.value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    display.value = '';
}

function addToHistory(expression) {
    const historyItem = document.createElement('li');
    historyItem.textContent = expression;
    historyList.appendChild(historyItem);
}

document.querySelectorAll('.number, .operator').forEach(button => {
    button.addEventListener('click', event => {
        updateDisplay(event.target.value);
    });
});

document.getElementById('clear').addEventListener('click', () => {
    clearDisplay();
});

document.getElementById('equals').addEventListener('click', () => {
    const result = eval(currentExpression);
    addToHistory(currentExpression + '=' + result);
    clearDisplay();
});
