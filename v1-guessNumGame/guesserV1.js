// WALLET TOTAL
let currentWallet = 0

// GET THE PROMPT
const prompt = require('prompt-sync')();

// PLAYER NAME PROMPT
let player = prompt("Welcome to the House of Broken Dreams Casino! What is your name?:-");

// WALLET BET PROMPT
currentWallet = prompt(`\nHello ${player}, you seem like a trustworthy gambler!\n\nPlease enter an amount you would like to play with today! Keep in mind that each guess costs $10. -$`);
alert(`\n${player} has decided to play with a total of $${currentWallet} today, let's get ready for our first game!\n\n`)


// MAIN FUNCTION
function guesser() {

    // CREATES A RANDOM NUMBER BETWEEN 1 AND 10, BELOW !!!!!!
    // let number = Math.floor(Math.random() * 10);

    // JUST USE A STATIC NUMBER FOR TESTING, BELOW
    let number = 7;
    do {
        guess = prompt("Guess a number btwn 1-10: ");
        if (currentWallet < 10) {
            alert("\nWOMP WOMP!!! You do not have enough to bet again!");
            alert(`Your current funds are $${currentWallet.toFixed(2)}`);
            alert("Thanks for playing!")
            playAgain = prompt("\nWould you like to play again? [ y / n ] ")
            if (playAgain == "y") {
                currentWallet = prompt(`\nPlease enter a new amount that you would like to play with today! Keep in mind that each guess costs $10. -$`);
            }
            else if (playAgain == "n") {
                alert(`\nThanks for visiting, we hope your loss is our gain!\n\nCashing out: $${currentWallet.toFixed(2)}`)
                break;
            }
        }
        else if (number < guess) {
            alert("\nUh-oh, that's too high!");
            alert("Try again!\n");
            currentWallet -= 10;
            alert(`Your current wallet is at $${currentWallet.toFixed(2)}\n`);
        }
        else if (number > guess) {
            alert("\nOuch, that's too low!");
            alert("Try again!\n");
            currentWallet -= 10;
            alert(`Your current wallet is at $${currentWallet.toFixed(2)}\n`);
        }
        else if (number == guess) {
            alert("\nWinner, Winner, Chicken Dinner! You guessed it!\n");
            currentWallet += 10;
            alert(`Your winnings are $${currentWallet.toFixed(2)}\n`);
            playAgain = prompt("\nWould you like to play again? [ y / n ] ");
            if (playAgain == "y") {
                alert(`Your current wallet is at $${currentWallet.toFixed(2)}`);
                newWallet = prompt(`\nAdd some more? Or enter '0' to keep current wallet... -$`);
                currentWallet = parseInt(currentWallet) + parseInt(newWallet);
                alert(`New wallet is: $${currentWallet.toFixed(2)}\n\n`);
                guesser();
            }
            else if (playAgain == "n") {
                alert(`\nThanks for visiting, we hope your loss is our gain!\n\nCashing out: $${currentWallet.toFixed(2)}`);
                break;
            }
        }
    } while (guess != number);

}
guesser();