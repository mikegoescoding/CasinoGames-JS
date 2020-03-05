// WALLET TOTAL
let currentWallet = 0

// PLAYER NAME PROMPT
let player = prompt("Welcome to the House of Broken Dreams Casino! What is your name?:");
player = player.charAt(0).toUpperCase() + player.slice(1); 


// WALLET BET PROMPT
currentWallet = prompt(`\nHello ${player}, you seem like a trustworthy gambler!\n\nPlease enter an amount you would like to play with today! (Keep in mind that each guess costs $1.)\n`);
alert(`\n${player} has decided to play with a total of $${currentWallet} today, let's get ready for our first game!\n\n`)


// SLOT FUNCTION
function slots() {

    // WHEEL1 CATEGORIES & VALUES
    let wheel1 = {"NOPE": 1,
                "JACKPOT": 7,
                "SO-CLOSE": 2,
                "JACKPOT": 7,
                "CLOWN": 3,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
            }
    // WHEEL2 CATEGORIES & VALUES
    let wheel2 = {"NOPE": 1,
                "JACKPOT": 7,
                "SO-CLOSE": 2,
                "JACKPOT": 7,
                "CLOWN": 3,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
            }
    // WHEEL3 CATEGORIES & VALUES
    let wheel3 = {"NOPE": 1,
                "JACKPOT": 7,
                "SO-CLOSE": 2,
                "JACKPOT": 7,
                "CLOWN": 3,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
                "JACKPOT": 7,
            }   

    // CALL VARIABLES OUTSIDE OF THE DO/WHILE LOOP, BELOW
    let spin;
    let playAgain;
    let spinIt;

        do {
            // SPIN THE WHEEL
            spin = prompt("Enter x to spin the wheel: ");

            // USE MATH.RANDOM TO GET RANDOM KEYS, VALUES FROM WHEEL OBJECTS
            wheel1spin = Object.entries(wheel1)[Math.floor(Math.random()*Object.keys(wheel1).length)];
            spin1 = wheel1spin[Object.keys(wheel1spin)[0]];

            wheel2spin = Object.entries(wheel2)[Math.floor(Math.random()*Object.keys(wheel2).length)];
            spin2 = wheel2spin[Object.keys(wheel2spin)[0]];

            wheel3spin = Object.entries(wheel3)[Math.floor(Math.random()*Object.keys(wheel3).length)];
            spin3 = wheel3spin[Object.keys(wheel3spin)[0]];
            // console.log(spin1, spin2, spin3)
            
            // OUTPUTS RESULT OF EACH SPIN, IN-LINE, DYNAMIC
            alert(`\nSPINNING...\n\n\u25D6|  ${spin1} | ${spin2} | ${spin3}  |\u25D7\n`)

            // ACCOUNTING FOR THE NUMBER VALUE OF EACH SPIN, FOR POINT KEEPIING
            wheel1spinValue = wheel1spin[Object.keys(wheel1spin)[1]];
            wheel2spinValue = wheel2spin[Object.keys(wheel2spin)[1]];
            wheel3spinValue = wheel3spin[Object.keys(wheel3spin)[1]];
            // console.log(wheel1spinValue, wheel2spinValue, wheel3spinValue);

            // ADDING ALL 3 VALUES UP AND STORING IN A VARIABLE
            spinIt = wheel1spinValue + wheel2spinValue + wheel3spinValue;
            // console.log(spinIt)
            
            // OUT OF MONEY 
            if (currentWallet < 1) {
                alert(`\nWOMP WOMP!!! You do not have enough to bet again!\nYour current funds are $${currentWallet.toFixed(2)}\n\nThanks for playing!`);
                // alert(`Your current funds are $${currentWallet.toFixed(2)}`);
                // alert("Thanks for playing!")
                playAgain = prompt("\nWould you like to play again? [ y / n ] ").toLowerCase();
                if (playAgain == "y") { 
                    currentWallet = prompt(`\nPlease enter a new amount that you would like to play with today! (Keep in mind that each guess costs $1.)\n`)
                    // alert(`Your current wallet is at $${currentWallet.toFixed(2)}`)
                }
                else if (playAgain == "n") {
                    alert(`\nThanks for visiting, we hope your loss is our gain!\n\nCashing out: $${currentWallet.toFixed(2)}`)
                    break;
                }
            }

            // NOT A WINNER
            else if (spinIt < 21) {
                alert("\nUh-oh, that's not a win!\nTry again!\n");
                // alert("Try again!\n");
                currentWallet -= 1;
                alert(`Your current wallet is at $${currentWallet.toFixed(2)}\n`);
                spinIt;
            }

            // // THIS PART NOT NEEDED UNTIL A FURTHER BUILD-OUT 
            // else if (spinIt > 9) {
            //     alert("\nUh-oh, that's also not a win!\nTry again!\n");
            //     // alert("Try again!\n");
            //     currentWallet -= 1;
            //     alert(`Your current wallet is at $${currentWallet.toFixed(2)}\n`);
            // }

            // WINNER
            else if (spinIt == 21) {
                alert("\nWinner, Winner, Chicken Dinner! You hit the Jackpot!\n");
                currentWallet += 5;
                
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
                    slots();
                }

                // DONT PLAY AGAIN + CASH OUT
                else if (playAgain == "n") {
                    alert(`\nThanks for visiting, we hope your loss is our gain!\n\nCashing out: $${currentWallet.toFixed(2)}`);
                    break;
                }                
            }
        } while (spinIt != 21);
        
}
slots();