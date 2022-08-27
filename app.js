let min = 1, max = 10;
let winNum = 5;

const minElement = document.querySelector('.min-num');
const maxElement = document.querySelector('.max-num');
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-submit');
const messageElement = document.getElementById('message');

minElement.textContent = min;
maxElement.textContent = max;

guessBtn.addEventListener('click',validateResult);

function validateResult(){
    let inputVal = parseInt(guessInput.value);
    if(isNaN(inputVal) || inputVal>10 || inputVal<1){
        setMessage(`Enter a number between ${min} and ${max}`,'red');
    }else{
        if(inputVal === winNum){
            guessInput.disabled = true;
            guessInput.style.borderBlockColor = 'green';
            setMessage(`Correct! ${winNum} is the correct number`,'green');
        }
    }
}

function setMessage(msg,clr){
    messageElement.textContent = msg;
    messageElement.style.color = clr
}
