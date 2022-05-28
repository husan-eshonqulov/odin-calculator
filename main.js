const currScreen = document.querySelector('#currentOperationScreen');
const lastScreen = document.querySelector('#lastOperationScreen');
const digitBtns = document.querySelectorAll('.digit');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const equalBtn = document.querySelector('#equalsBtn');
const opBtns = document.querySelectorAll('.operation');
const pointBtn = document.querySelector('#pointBtn');
let isPressedEqual = false;
let isPressedOp = false;
const ops = '+*-/';
let op = '';
let num1 = '';
let num2 = '';
let res = '';

digitBtns.forEach(digBtn => digBtn.addEventListener('click', () => handleDigit(digBtn)));
opBtns.forEach(opBtn => opBtn.addEventListener('click', () => handleOperation(opBtn)));
clearBtn.addEventListener('click', () => handleClear());
deleteBtn.addEventListener('click', () => handleDelete());
equalBtn.addEventListener('click', () => handleEqual());
pointBtn.addEventListener('click', () => handlePoint());

function handleDigit(digBtn) {
    if (isPressedOp) {
        currScreen.textContent = '';
        isPressedOp = false;
    }
    const digit = digBtn.textContent;
    const num = currScreen.textContent;
    currScreen.textContent = num !== '0' ? num + digit : digit;
}

function handleClear() {
    currScreen.textContent = 0;
    lastScreen.textContent = '';
    isPressedEqual = false;
    isPressedOp = false;
    num1 = '';
    num2 = '';
    res = '';
    op = '';
}

function handleDelete() {
    currScreen.textContent = currScreen.textContent.slice(0, -1);
}

function handleOperation(opBtn) {
    if (isPressedOp) {
        op = opBtn.textContent;
        lastScreen.textContent = num1 + ' ' + op;
    }
    else {
        if (lastScreen.textContent === '') {
            op = opBtn.textContent;
            num1 = currScreen.textContent;
            lastScreen.textContent = num1 + ' ' + op;
        }
        else {
            if (isPressedEqual) {
                op = opBtn.textContent;
                lastScreen.textContent = num1 + ' ' + op;
                isPressedEqual = false;
            }
            else {
                num2 = currScreen.textContent;
                res = operate(op, Number(num1), Number(num2));
                op = opBtn.textContent;
                lastScreen.textContent = res + ' ' + op;
                num1 = res;
            }
        }
    }
    isPressedOp = true;
}

function handleEqual() {
    if (isPressedEqual) return;
    num2 = currScreen.textContent;
    lastScreen.textContent = num1 + ' ' + op + ' ' + num2 + ' ' + '=';
    res = operate(op, Number(num1), Number(num2));
    currScreen.textContent = res;
    num1 = res;
    isPressedEqual = true;
}

function handlePoint() {
    if (currScreen.textContent.includes('.')) return;
    if (currScreen.textContent === '0')
        currScreen.textContent = '0.';
    else currScreen.textContent += '.';
}

function operate(op, a, b) {
    switch (op) {
        case '+': return a + b;
        case '−': return a - b;
        case '×': return a * b;
        case '÷': return a / b;
    }
}

