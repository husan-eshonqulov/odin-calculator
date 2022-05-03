const currScreen = document.querySelector('#currentOperationScreen');
const lastScreen = document.querySelector('#lastOperationScreen');
const digitBtns = document.querySelectorAll('.digit');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const opBtns = document.querySelectorAll('.operation');
let isPressedOp = false;
const ops = '+*-/';
let op = '';
let num1 = '';
let num2 = '';
let res = '';

digitBtns.forEach(digBtn => digBtn.addEventListener('click', () => handleDigit(digBtn)));
opBtns.forEach(opBtn => opBtn.addEventListener('click', () => handleOperation(opBtn)));
clearBtn.addEventListener('click', () => handleClick());
deleteBtn.addEventListener('click', () => handleDelete());

function handleDigit(digBtn) {
    if (isPressedOp) {
        currScreen.textContent = '';
        isPressedOp = false;
    }
    const digit = digBtn.textContent;
    const num = currScreen.textContent;
    currScreen.textContent = num !== '0' ? num + digit : digit;
}

function handleClick() {
    currScreen.textContent = 0;
    lastScreen.textContent = '';
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
            num2 = currScreen.textContent;
            res = operate(op, Number(num1), Number(num2));
            op = opBtn.textContent;
            lastScreen.textContent = res + ' ' + op;
            num1 = res;
        }
    }
    isPressedOp = true;
}

function operate(op, a, b) {
    switch (op) {
        case '+': return a + b;
        case '−': return a - b;
        case '×': return a * b;
        case '÷': return a / b;
    }
}

