function computerPlay(){
    let choice= Math.floor((Math.random() * 3) + 1);
    if(choice === 1) {return "rock";}
    else if(choice === 2) {return "paper";}
    else{return "scissors";}
}

function playRound(playerSelection, computerSelection){
    let ps=playerSelection.toUpperCase();
    let cs=computerSelection.toUpperCase();
    
    console.log("Player Choice: " + ps);
    console.log("Computer Choice: " + cs);
    
    if( ps === "ROCK"){
        if (cs=== "PAPER")
         {return "Computer Wins! Paper beats Rock";}
        else if (cs=== "SCISSORS")
         {return "You Win! Rock beats scissors";}
        else {return "A draw!";}
    }
    else if(ps === "PAPER"){
         if (cs=== "ROCK")
         {return "You wins! Paper beats Rock";}
        else if (cs=== "SCISSORS")
         {return "Computer Wins! Scissors beats Paper";}
        else {return "A draw!";}
        
    }
    else if(ps === "SCISSORS"){
         if (cs=== "ROCK")
         {return "Computer Wins! Rock beats scissors";}
        else if (cs=== "PAPER")
         {return "You Win! Scissors beats Paper";}
        else {return "A draw!";}
    }
    
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
