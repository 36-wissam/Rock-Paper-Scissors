// akfor bkol al paragraphat 
document.addEventListener("DOMContentLoaded", function () {

    const rockBtn = document.getElementById('rockBtn'); //to get the rock button value
    const paperBtn = document.getElementById('paperBtn'); //to get the paper button value
    const scissorBtn = document.getElementById('scissorBtn'); //to get the scissor button value
    const PCHOICE = document.getElementById('playerChoice'); // player choice paragraph
    const COMPCHOICE = document.getElementById('computerChoice'); // player choice paragraph
    const newtext = document.getElementById('paragraphtext'); // game staus paragraph
    const scoreP = document.getElementById('playerscore'); // player score paragraph
    const scoreC = document.getElementById('compscore'); // computer score paragraph
    let humanScore = 0; //fvar for human score
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
            newtext.textContent = "VICTORY IS YOURS ! ("+humanScore+"-"+computerScore+")";
            humanScore=0;
            computerScore=0;
            scoreP.textContent="YOURE SCORE : 0";
            scoreC.textContent="COMPUTER SCORE : 0";
        }
        // if the computer win
        else if(computerScore===5){
            newtext.textContent ="YOU LOST THE GAME! ("+humanScore+"-"+computerScore+")";
            humanScore=0;
            computerScore=0;
            scoreP.textContent="YOURE SCORE : 0";
            scoreC.textContent="COMPUTER SCORE : 0";
        }
    }


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

});