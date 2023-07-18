let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.querySelector('#player-result');
const computerScoreDisplay = document.querySelector('#computer-result');
let playerChoice;
let computerChoice;
const playerSelectionDisplay = document.querySelector('#player-choice');
const computerSelectionDisplay = document.querySelector('#computer-choice');
const commentDisplay = document.querySelector('#game-comment');
let comment = '';

    game = () => {

        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                playerChoice = e.target.value;
                playerSelectionDisplay.textContent = playerChoice;

                (
                    () => {
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
                        computerSelectionDisplay.textContent = computerChoice; 
                    }
                )();

                playRound(playerChoice, computerChoice)

            })
        })
    
        playRound = (playerChoice, computerChoice) => {

            if (playerChoice === computerChoice) {
                comment = "Its a tie!";
            } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
                //playerScore++;
                comment = "You Win! Rock beats Scissors";
            } else if (playerChoice === 'paper' && computerChoice === 'rock') {
                playerScore++;
                comment = "You Win! Paper beats Rock";
            } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
                playerScore++;
                comment = "You Win! Scissors beats Paper";
            } else {
                computerScore++;
                comment = 'Computer Wins!'
            }

            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            commentDisplay.textContent = comment;

            if (playerScore === 5 || computerScore === 5) {
                if (playerScore === 5) {
                    comment = "Player Wins the Game!";
                } else {
                    comment = "Computer Wins the Game!";
                }
                commentDisplay.textContent = comment;
                
                setTimeout(() => {
                    playerScore = computerScore = 0;
                    playerScoreDisplay.textContent = playerScore;
                    computerScoreDisplay.textContent = computerScore;
                    playerSelectionDisplay.textContent = ' ';
                    computerSelectionDisplay.textContent = ' ';
                    commentDisplay.textContent = ' ';
                }, 1000)
            }
            
        }
    
    }
    game();