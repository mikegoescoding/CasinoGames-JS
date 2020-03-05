// WALLET TOTAL
let currentWallet = 0

// PLAYER NAME PROMPT
let player = prompt("Welcome to the House of Broken Dreams Casino! What is your name?:");
player = player.charAt(0).toUpperCase() + player.slice(1); 


// WALLET BET PROMPT
currentWallet = prompt(`\nHello ${player}, you seem like a trustworthy gambler!\n\nPlease enter an amount you would like to play with today! (Keep in mind that each guess costs $10.)\n`);
alert(`\n${player} has decided to play with a total of $${currentWallet} today, let's get ready for our first game!\n\n`)


// MAIN FUNCTION
function guesser() {

    // CREATES A RANDOM NUMBER BETWEEN 1 AND 10, BELOW !!!!!!
    // let number = Math.floor(Math.random() * 10);

    // JUST USE A STATIC NUMBER FOR TESTING, BELOW
    let number = 7;

    // CALL VARIABLES OUTSIDE OF THE DO/WHILE LOOP, BELOW
    let guess;
    let playAgain;
        do {
            // GUESS THE NUMBER
            guess = prompt("Guess a number between  1  =>  10: ");

            // OUT OF MONEY 
            if (currentWallet < 10) {
                alert(`\nWOMP WOMP!!! You do not have enough to bet again!\nYour current funds are $${currentWallet.toFixed(2)}\n\nThanks for playing!`);
                // alert(`Your current funds are $${currentWallet.toFixed(2)}`);
                // alert("Thanks for playing!")
                playAgain = prompt("\nWould you like to play again? [ y / n ] ").toLowerCase();
                if (playAgain == "y") { 
                    currentWallet = prompt(`\nPlease enter a new amount that you would like to play with today! (Keep in mind that each guess costs $10.)\n`);
                }
                else if (playAgain == "n") {
                    alert(`\nThanks for visiting, we hope your loss is our gain!\n\nCashing out: $${currentWallet.toFixed(2)}`)
                    break;
                }
            }

            // NUMBER TOO HIGH
            else if (number < guess) {
                alert("\nUh-oh, that's too high!\nTry again!\n");
                // alert("Try again!\n");
                currentWallet -= 10;
                alert(`Your current wallet is at $${currentWallet.toFixed(2)}\n`);
            }


            // NUMBER TOO LOW 
            else if (number > guess) {
                alert("\nUh-oh, that's too low!\nTry again!\n");
                // alert("Try again!\n");
                currentWallet -= 10;
                alert(`Your current wallet is at $${currentWallet.toFixed(2)}\n`);
            }

            // WINNER
            else if (number == guess) {
                alert("\nWinner, Winner, Chicken Dinner! You guessed it!\n");
                currentWallet += 10;
                
                //THIS DUMB LINE BELOW BREAKS AT RANDOM IN REPL.IT SO IF I DUPLICATE IT AND COMMENT IT OUT, AND RUN WITH THE DUPLICATE IT WORKS, WHYYY???
                //alert(`Your winnings are $${currentWallet.toFixed(2)}. Woohoo!\n`);
                alert(`Your winnings are $${currentWallet.toFixed(2)}. WooHoo!\n`);

                // PLAY AGAIN
                playAgain = prompt("\nWould you like to play again? [ y / n ] ").toLowerCase();
                if (playAgain == "y") {
                    alert(`Your current wallet is at $${currentWallet.toFixed(2)}`);

                    // ADD MORE $ OR STAY WITH BALANCE
                    newWallet = prompt(`\nAdd some more? Or enter '0' to keep current wallet... -$`);
                    currentWallet = parseInt(currentWallet) + parseInt(newWallet);
                    alert(`New wallet is: $${currentWallet.toFixed(2)}\n\n`);
                    guesser();
                }

                // DONT PLAY AGAIN + CASH OUT
                else if (playAgain == "n") {
                    alert(`\nThanks for visiting, we hope your loss is our gain!\n\nCashing out: $${currentWallet.toFixed(2)}`);
                    break;
                }                
            }
        } while (guess != number);
        
}
guesser();