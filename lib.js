const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

var resetButton;

function setMessage(message) {
    guesses.textContent = message;
}


function correct() {
    lastResult.textContent = 'おめでとう! 正解です!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
}

function incorrect(message) {
    lastResult.textContent = '間違いです!';
    lastResult.style.backgroundColor = 'red';
    lowOrHi.textContent = message;
}

function gameOver() {
    lastResult.textContent = '!!!ゲームオーバー!!!';
    setGameOver();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '新しいゲームを始める';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGameOrig);
}

function checkGuessOrig() {
    const userGuess = Number(guessField.value);

    // call
    checkGuess(userGuess);

    if (userGuesses.length > 0) {
        guesses.textContent = '前回の予想: ' + userGuesses;
    }

    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuessOrig);

function resetGameOrig() {
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    resetGame();
}