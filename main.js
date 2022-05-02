const currScreen = document.querySelector('#currentOperationScreen');
const lastScreen = document.querySelector('#lastOperationScreen');
const digitBtns = document.querySelectorAll('.digit');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const opBtns = document.querySelectorAll('.operation');

digitBtns.forEach(digBtn => digBtn.addEventListener('click', () => handleDigit(digBtn)));
opBtns.forEach(opBtn => opBtn.addEventListener('click', () => handleOperation(opBtn)));
clearBtn.addEventListener('click', () => currScreen.textContent = 0);
deleteBtn.addEventListener('click', () => currScreen.textContent = currScreen.textContent.slice(0, -1));

function handleDigit(digBtn) {
    const digit = digBtn.textContent;
    const num = currScreen.textContent;
    currScreen.textContent = num !== '0' ? num + digit : digit;
}

function handleOperation(opBtn) {
    const op = opBtn.textContent;
    const a = Number(currScreen.textContent);
    lastScreen.textContent = a + ' ' + op;
}

function operate(op, a, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

