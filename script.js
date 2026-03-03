// akfor bkol al paragraphat 
document.addEventListener("DOMContentLoaded", function () {

    const rockBtn = document.getElementById('rockBtn');
    const paperBtn = document.getElementById('paperBtn');
    const scissorBtn = document.getElementById('scissorBtn');
    const PCHOICE = document.getElementById('playerChoice');
    const COMPCHOICE =document.getElementById('computerChoice')
    const newtext = document.getElementById('paragraphtext');
    let humanScore =0
    let computerScore =0

    function getComputerChoice(){
        let ComputerChoice = Math.floor(Math.random() * 3)

        switch (ComputerChoice){
            case 0: return "rock";
            case 1: return "paper";
            case 2: return "scissors";
        }
    }

    function Gamelogic(p,c){
    // if its tie
        if(p === c){
            newtext.textContent ="Its tie ";
            PCHOICE.textContent ="PLAYER :"+p
            COMPCHOICE.textContent="COMPUTER :"+c
        }

        // rock
        else if(p=="rock" && c=="scissors"){
            newtext.textContent ="You win! Great choice";
            humanScore+=1;
            PCHOICE.textContent ="PLAYER :"+p
            COMPCHOICE.textContent="COMPUTER :"+c
        }
        else if(p=="rock" && c=="paper"){
            newtext.textContent ="You lose! Try again";
            computerScore+=1;
            PCHOICE.textContent ="PLAYER :"+p
            COMPCHOICE.textContent="COMPUTER :"+c
        }
        // scissors
        else if(p=="scissors" && c=="paper"){
            newtext.textContent ="You win! Great choice";
            humanScore+=1;
            PCHOICE.textContent ="PLAYER :"+p
            COMPCHOICE.textContent="COMPUTER :"+c
        }
        else if(p=="scissors" && c=="rock"){
            newtext.textContent ="You lose! Try again";
            computerScore+=1;
            PCHOICE.textContent ="PLAYER :"+p
            COMPCHOICE.textContent="COMPUTER :"+c
        }
        // paper
        else if(p=="paper" && c=="rock"){
            newtext.textContent ="You win! Great choice";
            humanScore+=1;
            PCHOICE.textContent ="PLAYER :"+p
            COMPCHOICE.textContent="COMPUTER :"+c
        }
        else if(p=="paper" && c=="scissors"){
            newtext.textContent ="You lose! Try again";
            computerScore+=1;
            PCHOICE.textContent ="PLAYER :"+p
            COMPCHOICE.textContent="COMPUTER :"+c
        }

    }

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