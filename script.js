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

}
playRound(playerSelection,computerSelection)