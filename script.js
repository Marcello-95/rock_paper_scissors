function computerPlay(){
    const choice = ["rock","paper","scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}
computerPlay()

function playRound(playerSelection,computerSelection){
playerSelection = prompt("Choose between Rock, Paper or Scissors");
computerSelection = computerPlay();  
if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock"){
return ("Rock vs Rock, nobody wins");}
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
    return ("You lose, paper beats rock!");}
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
    return ("You win, rock beats scissors!");}
else if(playerSelection.toLowerCase() == "paper" && computerSelection == "paper"){
    return ("Paper vs Paper, nobody wins");}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
    return ("You win, paper beats rock!");}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
    return ("You lose, scissors beats paper!");}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
    return ("You lose, rock beats scissors");}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
    return ("You win, scissors beats paper!");}
else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors"){
    return ("Scissors vs Scissors, nobody wins");}
}
playRound(playerSelection,computerSelection)

console.log(playRound(playerSelection, computerSelection));