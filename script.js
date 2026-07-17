const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
const PCHOICE = document.getElementById('playerChoice');
const COMPCHOICE = document.getElementById('computerChoice');
const newtext = document.getElementById('paragraphtext');
const scoreP = document.getElementById('playerscore');
const scoreC = document.getElementById('compscore');
const popup = document.querySelector('.popup');
const finalResult = document.getElementById('finalResult');
const playAgainBtn = document.getElementById('playAgainBtn');

// varis for sound effects
const winSound = new Audio('src/sounds/win.mp3');
const loseSound = new Audio('src/sounds/lose.mp3');

let humanScore = 0;
let computerScore = 0;

// function to generate compute choice
function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3);
    switch (ComputerChoice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

// function for the game logic
function Gamelogic(p, c) {
    // Determine winner
    if (p === c) {
        newtext.textContent = "It's a tie!";
    } else if (
        (p === "rock" && c === "scissors") ||
        (p === "scissors" && c === "paper") ||
        (p === "paper" && c === "rock")
    ) {
        newtext.textContent = "You win! Great choice";
        humanScore += 1;
    } else {
        newtext.textContent = "You lose! Try again";
        computerScore += 1;
    }

    // Update UI
    PCHOICE.textContent = "PLAYER: " + p.toUpperCase();
    COMPCHOICE.textContent = "COMPUTER: " + c.toUpperCase();
    scoreP.textContent = "YOUR SCORE: " + humanScore;
    scoreC.textContent = "COMPUTER SCORE: " + computerScore;
    
    // Check for game over
    if (humanScore === 5) {
        winSound.play();
        popup.style.display = 'flex';
        finalResult.textContent = "YOU WON! (" + humanScore + "-" + computerScore + ")";
    } else if (computerScore === 5) {
        loseSound.play();
        popup.style.display = 'flex';
        finalResult.textContent = "YOU LOST! (" + humanScore + "-" + computerScore + ")";
    }
}

// play again button event
playAgainBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    humanScore = 0;
    computerScore = 0;
    scoreP.textContent = "YOUR SCORE: 0";
    scoreC.textContent = "COMPUTER SCORE: 0";
    newtext.textContent = "CHOOSE YOUR WEAPON";
    PCHOICE.textContent = "PLAYER:";
    COMPCHOICE.textContent = "COMPUTER:";
});

// event listener for the buttons
rockBtn.addEventListener('click', () => {
    Gamelogic("rock", getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    Gamelogic("paper", getComputerChoice());
});

scissorBtn.addEventListener('click', () => {
    Gamelogic("scissors", getComputerChoice());
});