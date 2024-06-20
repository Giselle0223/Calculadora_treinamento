const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstOperand = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.number || button.dataset.operator || button.dataset.equal || button.dataset.clear || button.dataset.dot;

    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else if (['+', '-', '*', '/'].includes(value)) {
      handleOperator(value);
    } else {
      updateDisplay(value);
    }
  });
});

function updateDisplay(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function handleOperator(op) {
  operator = op;
  firstOperand = currentInput;
  currentInput = '';
}

function calculateResult() {
  const secondOperand = currentInput;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
  }

  display.textContent = result;
  currentInput = result.toString();
  firstOperand = '';
  operator = '';
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = '';
  display.textContent = '';
}