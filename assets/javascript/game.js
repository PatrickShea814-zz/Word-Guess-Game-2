// ========================= Words and Global Variables =========================


// Game Stats
let stats = {
    WordBank: ["Cortana", "Halo", "Pelican", "Arbiter", "Covenant", "Master Chief"],
    Wins: 0,
    Losses: 0,
    GuessesLeft: 6,
    LettersGuessed: [],
    blankSpaces: []
}

// Allowed and restricted keys.
let keySelect = {
    optionKeys: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "`"],
    noKey: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "-", "=", "[", "]", "'\'", ";", "'", ",", ".", "/"],
    eachBlank: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
}

// Reset the game.
function gameReset() {
    stats.GuessesLeft = 6;
    stats.LettersGuessed = [];
    stats.blankSpaces = [];
}

// Game Start Function.
document.getElementById("start").onclick = function (start) {
    gameReset();
    gameWord = Math.floor(Math.random() * stats.WordBank.length);
    randWord = (stats.WordBank[gameWord]).toLowerCase();
    stats.blankSpaces = randWord.split('');
    word.innerHTML=" ";
    for (i = 0; i <word.innerHTML.length; i++) {
        word.innerHTML += ' _ ';
    }
    alert("Your trial begins! Council vs Heretic. Will you continue on The Great journey?");
}


// User begins guessing keys.
document.onkeyup = function (guess) {
    var userGuess = guess.key;
    if (stats.blankSpaces.includes(userGuess) && stats.LettersGuessed.indexOf(userGuess) === -1 && stats.GuessesLeft > 0) {
        // enter guess to word on html
        stats.LettersGuessed.push(userGuess);
    } else if (stats.LettersGuessed.includes(userGuess) && stats.GuessesLeft > 0) {
        alert("You have already guessed this letter! Are you getting nervous?");
    } else if (keySelect.noKey.includes(userGuess)) {
        alert("That is not a valid guess. I will let this slide. Try again Heretic!");
    } else {
        if (stats.GuessesLeft > 0) {
            stats.GuessesLeft = stats.GuessesLeft - 1;
            stats.LettersGuessed.push(userGuess)
            alert(`WRONG! You only have ${stats.GuessesLeft} left!`)
        } else {
            alert("Your trial has been concluded. Soon the Great Journey shall begin. But when it does, the weight of your heresy will stay your feet. And you shall be left behind.")
        }
    }
}