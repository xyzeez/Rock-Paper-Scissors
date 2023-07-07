const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    generateREsult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function generateREsult() {
    if (computerChoice === userChoice) {
        result = 'draw';
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Win';
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Lose';
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Lose';
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Win';
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Lose';
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Win';
    }

    resultDisplay.innerHTML = result;
}