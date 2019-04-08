// visual variables
var winCount = 0;
var guessCount = 0;

// Component variables
var wordChoices = ["klekhya", "keishawn", "kenyal", "kristina", "sal", "bashari", "carl", "chris", "erica", "jake", "jaque", "jack", "kat", "kevin", "lalit", "lamont", "michael", "nick", "olivier", "stephen", "sabrina", "youssef", "zak"];

// starts game
document.onkeyup = function (event) {

    var directions = document.getElementById("directions");

    // Chooses random word from wordChoices array
    var gameChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    // logs all letters & dashes in chosen word
    var letters = [];
    var dashes = [];

    for (i = 0; i < gameChoice.length; i++) {
        // document.write("_ ");
        var newLetters = gameChoice.charAt(i);
        letters.push(newLetters);
        dashes.push("- ");
    };
    // console both arrays for word
    console.log(letters);
    console.log(dashes);
    console.log(dashes.join(' '));
    console.log(letters.join(' '));
    // takes player guess and compares it to letters in chosen word
    document.onkeyup = function (guess) {
        var currentWord = document.getElementById("current-word");
        var lettersGuessed = document.getElementById("letters-guessed");
        var guessesLeft = document.getElementById("guesses-left");
        var userGuess = guess.key;
        var remainingGuesses = 20;
        var lettersAlreadyGuessed = [];
        for (var i = 0; i < letters.length; i++)
            if (userGuess == letters[i]) {
                dashes.splice(i, 1, userGuess);
                currentWord.textContent = "Current name is: " + dashes.join(' ');
            }
        if (userGuess !== letters[i]) {
            remainingGuesses--;
            lettersAlreadyGuessed.push(userGuess);
            lettersGuessed.textContent = "Letters guessed: " + lettersAlreadyGuessed.join(' ');
            guessesLeft.textContent = "Guesses Left: " + remainingGuesses;
        }

    }


};

// };
