$(function() {
    // declare counter variables
    let wins = 0;
    let losses = 0;
    let ties = 0;

    // compare user vs CPU
    let compare = function(userSelect,computerSelect){
        console.log("calculating result...");

        if (userSelect === computerSelect) {
            // increment ties counter
            ties++;
            console.log(ties);
            $('.ties').text(ties);
            $('.commentary').text("It's a tie!");
        }

        else if (userSelect === "rock") {
            if (computerSelect === "scissors") {
                // increment wins counter
                wins++;
                console.log(wins);
                $('.wins').text(wins);
                $('.commentary').text("You won! Smash that scissors to oblivion!");
            } else {
                // increment losses counter
                losses++;
                console.log(losses);
                $('.losses').text(losses);
                $('.commentary').text("What, you lost!? Never seen rock lose before.");
            }
        }

        else if (userSelect === "paper") {
            if (computerSelect === "rock") {
                wins++;
                console.log(wins);
                $('.wins').text(wins);
                $('.commentary').text("You won! Are you a professional?");
            } else {
                losses++;
                console.log(losses);
                $('.losses').text(losses);
                $('.commentary').text("Damn, you lost! You shouldn't have bet your house on that.");
            }
        }

        else if (userSelect === "scissors") {
            if (computerSelect === "rock") {
                losses++;
                console.log(losses);
                $('.losses').text(losses);
                $('.commentary').text("Damn, you lost! Be better.");
            } else {
                wins++;
                console.log(wins);
                $('.wins').text(wins);
                $('.commentary').text("You won! You're a natural at this.");
            }
        }
    }   

    $('.rock-paper-scissors').on('submit', function(event){
        // user choice
        // console.log('choice submitted');
        event.preventDefault();
        
        let userChoice = $('input[name="game"]:checked').val();

        console.log(`the user chooses ${userChoice}`);
        $('.result-user').text(`You chose ${userChoice}!`);
        
        // CPU choice
        let computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        
        console.log(`The CPU chooses ${computerChoice}`);
        $('.result-cpu').text(`The computer chose ${computerChoice}!`);


        console.log(compare(userChoice, computerChoice));

        computerChoice = '';

    })
});