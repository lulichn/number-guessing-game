let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let userGuesses = [];

function checkGuess(userGuess) {
    // 入力した数を保持しておく
    userGuesses.push(userGuess);

    if (userGuess === randomNumber) {
        correct();
    } else if (guessCount === 10) {
        gameOver();
    } else {
        if (userGuess < randomNumber) {
            incorrect('今の予想は小さすぎです!もっと大きな数字です。');
        } else if (userGuess > randomNumber) {
            incorrect('今の予想は大きすぎです!もっと小さな数字です。');
        }
    }

    guessCount++;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 1;
    userGuesses = [];
}

