const rockBtn = document.getElementById('rockBtn'); //to get the rock button value
const paperBtn = document.getElementById('paperBtn'); //to get the paper button value
const scissorBtn = document.getElementById('scissorBtn'); //to get the scissor button value
const PCHOICE = document.getElementById('playerChoice'); // player choice paragraph
const COMPCHOICE = document.getElementById('computerChoice'); // player choice paragraph
const newtext = document.getElementById('paragraphtext'); // game staus paragraph
const scoreP = document.getElementById('playerscore'); // player score paragraph
const scoreC = document.getElementById('compscore'); // computer score paragraph
const popup = document.querySelector('.popup'); // popup element
const finalResult = document.getElementById('finalResult'); // final result element
const playAgainBtn = document.getElementById('playAgainBtn'); // play again button  


// varis for sound effects
const winSound = new Audio('/src/sounds/win.mp3');
const loseSound = new Audio('/src/sounds/lose.mp3');



let humanScore = 0; //var for human score
let computerScore = 0; // var for compter score




    // function to generate compute choice
    function getComputerChoice(){
        let ComputerChoice = Math.floor(Math.random() * 3);

        switch (ComputerChoice){
            case 0: return "rock";
            case 1: return "paper";
            case 2: return "scissors";
        }
    }



    // function for the game logic
    function Gamelogic(p,c){

        // if its tie
        if(p === c){
            newtext.textContent ="Its tie ";
            PCHOICE.textContent ="PLAYER :"+p;
            COMPCHOICE.textContent="COMPUTER :"+c;
        }

        // rock
        else if(p=="rock" && c=="scissors"){
            newtext.textContent ="You win! Great choice";
            humanScore+=1;
            PCHOICE.textContent ="PLAYER :"+p;
            COMPCHOICE.textContent="COMPUTER :"+c;
            scoreP.textContent="YOURE SCORE :"+ humanScore;
            scoreC.textContent="COMPUTER SCORE :"+ computerScore;
        }
        else if(p=="rock" && c=="paper"){
            newtext.textContent ="You lose! Try again";
            computerScore+=1;
            PCHOICE.textContent ="PLAYER :"+p;
            COMPCHOICE.textContent="COMPUTER :"+c;
            scoreP.textContent="YOURE SCORE :"+ humanScore;
            scoreC.textContent="COMPUTER SCORE :"+ computerScore;
        }

        // scissors 
        else if(p=="scissors" && c=="paper"){
            newtext.textContent ="You win! Great choice";
            humanScore+=1;
            PCHOICE.textContent ="PLAYER :"+p;
            COMPCHOICE.textContent="COMPUTER :"+c;
            scoreP.textContent="YOURE SCORE :"+ humanScore;
            scoreC.textContent="COMPUTER SCORE :"+ computerScore;
        }
        else if(p=="scissors" && c=="rock"){
            newtext.textContent ="You lose! Try again";
            computerScore+=1;
            PCHOICE.textContent ="PLAYER :"+p;
            COMPCHOICE.textContent="COMPUTER :"+c;
            scoreP.textContent="YOURE SCORE :"+ humanScore;
            scoreC.textContent="COMPUTER SCORE :"+ computerScore;
        }

        // paper
        else if(p=="paper" && c=="rock"){
            newtext.textContent ="You win! Great choice";
            humanScore+=1;
            PCHOICE.textContent ="PLAYER :"+p;
            COMPCHOICE.textContent="COMPUTER :"+c;
            scoreP.textContent="YOURE SCORE :"+ humanScore;
            scoreC.textContent="COMPUTER SCORE :"+ computerScore;
        }
        else if(p=="paper" && c=="scissors"){
            newtext.textContent ="You lose! Try again";
            computerScore+=1;
            PCHOICE.textContent ="PLAYER :"+p;
            COMPCHOICE.textContent="COMPUTER :"+c;
            scoreP.textContent="YOURE SCORE :"+ humanScore;
            scoreC.textContent="COMPUTER SCORE :"+ computerScore;
        }
        
        // for score status and reset the game
        if (humanScore === 5) {
            winSound.play();
            popup.style.display = 'flex';
            finalResult.textContent = "YOU WON! (" + humanScore + "-" + computerScore + ")";
        }
        // if the computer win
        else if(computerScore===5){
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
        scoreP.textContent = "YOUR SCORE : 0";
        scoreC.textContent = "COMPUTER SCORE : 0";
        newtext.textContent = "Start playing!";
        PCHOICE.textContent = "PLAYER :";
        COMPCHOICE.textContent = "COMPUTER :";
    });


    // event listener for the buttons
    rockBtn.addEventListener('click',()=>{
        Gamelogic("rock", getComputerChoice());
    });

    paperBtn.addEventListener('click',()=>{
        Gamelogic("paper", getComputerChoice());
    });

    scissorBtn.addEventListener('click',()=>{
        Gamelogic("scissors", getComputerChoice());
    });