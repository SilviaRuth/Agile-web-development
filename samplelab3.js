function wordle(target, guess) {
    // Validate inputs
    if (typeof target !== 'string' || typeof guess !== 'string') {
        console.error("Error: Both inputs must be strings.");
        return;
    }
    if (target.length !== 5 || guess.length !== 5) {
        console.error("Error: Both words must be exactly five letters long.");
        return;
    }

    let result = '';

    for (let i = 0; i < 5; i++) {
        if (guess[i] === target[i]) {
            result += `The ${findPosition(i)} is in the correct position.\n`;
        } else if (target.includes(guess[i])) {
            result += `The ${findPosition(i)} appears in the word, but in a different position.\n`;
        } else {
            result += `The ${findPosition(i)} does not appear in the word.\n`;
        }
    }

    console.log(result);
}

function findPosition(position) {
    const positions = ['first letter', 'second letter', 'third letter', 'fourth letter', 'fifth letter'];
    return positions[position];
}

// Example usage
wordle('scope', 'scoop');