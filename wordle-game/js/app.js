// filepath: /wordle-game/wordle-game/js/app.js

const correctWord = "APPLE"; // The word to guess
let attempts = 6; // Number of allowed attempts
let guessedWords = []; // Array to store guessed words

const guessInput = document.getElementById("guessInput");
const submitGuessButton = document.getElementById("submitGuess");
const resultContainer = document.getElementById("resultContainer");

submitGuessButton.addEventListener("click", () => {
    const userGuess = guessInput.value.toUpperCase();
    guessInput.value = ""; // Clear input field

    if (userGuess.length !== 5) {
        alert("Please enter a 5-letter word.");
        return;
    }

    if (guessedWords.includes(userGuess)) {
        alert("You've already guessed that word.");
        return;
    }

    guessedWords.push(userGuess);
    attempts--;

    if (userGuess === correctWord) {
        resultContainer.innerHTML = `<p style="color: green;">Congratulations! You've guessed the word: ${correctWord}!</p>`;
    } else if (attempts === 0) {
        resultContainer.innerHTML = `<p style="color: red;">Out of attempts! The correct word was: ${correctWord}.</p>`;
    } else {
        resultContainer.innerHTML = `<p>Incorrect guess! You have ${attempts} attempts left.</p>`;
    }
});