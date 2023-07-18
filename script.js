document.addEventListener('DOMContentLoaded', () => {
    
    let playerScore = 0;
    let computerScore = 0;

    game = () => {

        const playerChoice = prompt('Your Choice: ').toLowerCase();
        let computerChoice;
        (
            getComputerChoice = () => {
                let random = Math.floor(Math.random() * 3) + 1;
                switch (random) {
                    case 1:
                        computerChoice = 'rock';
                        break;
                    case 2:
                        computerChoice = 'paper';
                        break;
                    case 3:
                        computerChoice = 'scissors';
                        break;
                }
            }
        )();
    
        playRound = (playerChoice, computerChoice) => {

            if (playerChoice === computerChoice) {
                return "Its a tie!";
            } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
                playerScore++;
                return "You Win! Rock beats Scissors";
            } else if (playerChoice === 'paper' && computerChoice === 'rock') {
                playerScore++;
                return "You Win! Paper beats Rock";
            } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
                playerScore++;
                return "You Win! Scissors beats Paper";
            } else {
                computerScore++;
                return 'Computer Wins!'
            }
            
        }
    
        console.log(playRound(playerChoice, computerChoice));
    }

    for (let i = 0; i < 5; i++) {
        game();
    }
    console.log("Player: " + playerScore, "Computer: " + computerScore);
    const score = (playerScore > computerScore) ? 'Player Wins!' : 'Computer Wins!';
    console.log(score);







});