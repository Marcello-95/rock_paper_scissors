function computerPlay(){
    const choice = ["rock","paper","scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection,computerSelection){
playerSelection = prompt("Choose between Rock, Paper or Scissors");
computerSelection = computerPlay();  
if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock"){
    console.log ("Rock vs Rock, nobody wins");}
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
    console.log ("You lose, paper beats rock!");}
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){  
    console.log ("You win, rock beats scissors!");}
else if(playerSelection.toLowerCase() == "paper" && computerSelection == "paper"){
    console.log ("Paper vs Paper, nobody wins");}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
    console.log ("You win, paper beats rock!");}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
    console.log ("You lose, scissors beats paper!");}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
    console.log ("You lose, rock beats scissors");}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
    console.log ("You win, scissors beats paper!");}
else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors"){
    console.log ("Scissors vs Scissors, nobody wins");}
else{ 
    console.log("Your input is invalid");}
}

function game(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    }
    game();
