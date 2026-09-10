
function calculate(): void {
    // get nputs
    const xInput = document.getElementById('x') as HTMLInputElement;
    const yInput = document.getElementById('y') as HTMLInputElement;
 
    // output display
    const resultElement = document.getElementById('result') as HTMLParagraphElement;
 
    // input values  convert into numbers
    const x: number = parseFloat(xInput.value);
    const y: number = parseFloat(yInput.value);
 
    // validate for #'s
    if (isNaN(x) || isNaN(y)) {
        resultElement.textContent = 'Please enter valid numbers';
    }
    else {
        resultElement.textContent = `Result: ${x + y}`;
    }
}
 
 
 
function checkGuess(): void {
 let randomNumber: number = Math.floor(Math.random() * 10) + 1;
    const guessInput = document.getElementById('guess') as HTMLInputElement;
    const guessResult = document.getElementById('guessResult') as HTMLParagraphElement;
 
    const guess: number = Number(guessInput.value);
    
 
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