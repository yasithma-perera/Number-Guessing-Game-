// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

function checkGuess() {

    // Get user's input
    let userGuess = Number(document.getElementById("txtGuess").value);

    // Increase attempt count
    attempts++;

    // Compare user's guess with random number
    if (userGuess < randomNumber) {

        document.getElementById("result").innerHTML =
            " Try again.";

    } else if (userGuess > randomNumber) {

        document.getElementById("result").innerHTML =
            "Try again.";

    } else {

        document.getElementById("result").innerHTML =
            "🎉 YESSSSSSSSSSSSSSS! You guessed the number correctly!";

    }

    // Display attempts
    document.getElementById("attempts").innerHTML =
        "Attempts: " + attempts;
}


// Press ENTER to submit the guess
document.getElementById("txtGuess").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        checkGuess();

    }

});