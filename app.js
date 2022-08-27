let min = 1, max = 10;
let winNum = 5;
let guessesRemaining = 3;

const minElement = document.querySelector('.min-num');
const maxElement = document.querySelector('.max-num');
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-submit');
const messageElement = document.getElementById('message');

minElement.textContent = min;
maxElement.textContent = max;

guessBtn.addEventListener('click', validateResult);

function validateResult() {
    let inputVal = parseInt(guessInput.value);
    if (isNaN(inputVal) || inputVal > 10 || inputVal < 1) {
        setMessage(`Enter a number between ${min} and ${max}`, 'red');
    }
    else {

        if (inputVal === winNum) {
            gameOver(true, `You win! ${winNum} is the correct number`);
        }
        else {

            guessesRemaining--;
            if (guessesRemaining === 0) {
                gameOver(false, `Game Over! You ran out of chances. The correct number is ${winNum}`);
            }
            else {
                guessInput.style.borderBlockColor = 'red';
                setMessage(`Incorrect! You have ${guessesRemaining} guess(es) remaining`, 'red');
            }

        }

    }
    
}

function setMessage(msg, clr) {
    messageElement.textContent = msg;
    messageElement.style.color = clr
}

function gameOver(won, msg) {
    let clr = won === true ? 'green' : 'red';
    guessInput.disabled = true;
    guessInput.style.borderBlockColor = clr;
    setMessage(msg, clr);
}
