// Sets the computer choices 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

// Declares the tallies to 0 
var wins = 0;
var losses = 0;
var left = 10;
var guessed = [];


// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // This sets the computer guess equal to the random.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Making sure the user chooses a letter of alphabet
    if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') || (userGuess == 'd') || (userGuess == 'e') || (userGuess == 'f') || (userGuess == 'g') || (userGuess == 'h') || (userGuess == 'i') || (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') || (userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') || (userGuess == 'p') || (userGuess == 'q') || (userGuess == 'r') || (userGuess == 's') || (userGuess == 't') || (userGuess == 'u') || (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') || (userGuess == 'y') || (userGuess == 'z')){


        // It tests to determine if the computer or the user won the round and then increments 
        if (userGuess == computerGuess){
            wins++; 
        }else {left = (left-1); guessed.push(userGuess);
        }


        // Taking the tallies and displaying them in HTML
        var html = "<p>Press any letter to start playing</p>" +
        "<p>wins: " + 
        wins + 
        "</p>" +
        "<p>losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses left: " + 
        left + 
        "</p>" +
        "<p>Guessed: " + 
        guessed + 
        "</p>";

        // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;

    }
}


