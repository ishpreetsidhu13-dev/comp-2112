"use strict";
function calculate() {
    // get nputs
    const xInput = document.getElementById('x');
    const yInput = document.getElementById('y');
    // output display
    const resultElement = document.getElementById('result');
    // input values  convert into numbers
    const x = parseFloat(xInput.value);
    const y = parseFloat(yInput.value);
    // validate for #'s
    if (isNaN(x) || isNaN(y)) {
        resultElement.textContent = 'Please enter valid numbers';
    }
    else {
        resultElement.textContent = `Result: ${x + y}`;
    }
}
function checkGuess() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    const guessInput = document.getElementById('guess');
    const guessResult = document.getElementById('guessResult');
    const guess = Number(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 10) {
        guessResult.textContent = 'Please enter a number between 1 and 10';
    }
    else if (guess === randomNumber) {
        guessResult.textContent = 'correct';
    }
    else if (guess < randomNumber) {
        guessResult.textContent = 'Too low,';
    }
    else {
        guessResult.textContent = 'Too high,';
    }
}
//# sourceMappingURL=calc.js.map