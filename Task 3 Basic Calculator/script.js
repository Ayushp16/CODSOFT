const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.textContent = '';
        } else if (value === '=') {
            if (operator && previousInput !== '' && currentInput !== '') {
                currentInput = operate(previousInput, currentInput, operator);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            if (b === 0) {
                alert("Division by zero is not allowed");
                return '0';
            } else {
                return (a / b).toString();
            }
        default:
            return '0';
    }
}
