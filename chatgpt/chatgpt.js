const choices = document.querySelectorAll('.choice');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const messageEl = document.getElementById('message');

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showResult(winner, playerChoice, computerChoice);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function showResult(winner, playerChoice, computerChoice) {
    if (winner === 'player') {
        playerScore++;
        messageEl.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else if (winner === 'computer') {
        computerScore++;
        messageEl.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        messageEl.textContent = `It's a draw! You both chose ${playerChoice}`;
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}