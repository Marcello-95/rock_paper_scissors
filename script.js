
//This function makes the computer choose between 3 strings
function computerPlay(){
    const choice = ["rock","paper","scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}
//This function evaluates the computer random choice and the user input, then prints the evaluation result
function playRound(playerSelection,computerSelection){
playerSelection = prompt("Choose between Rock, Paper or Scissors");
computerSelection = computerPlay();  
if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock"){ 
    console.log ("Rock vs Rock, nobody wins");}
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
    computerScore++;
    console.log ("You lose, paper beats rock!");}
else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){  
    playerScore++;
    console.log ("You win, rock beats scissors!");}
else if(playerSelection.toLowerCase() == "paper" && computerSelection == "paper"){
    console.log ("Paper vs Paper, nobody wins");}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
    playerScore++;
    console.log ("You win, paper beats rock!");}
else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
    computerScore++;
    console.log ("You lose, scissors beats paper!");}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
    computerScore++;
    console.log ("You lose, rock beats scissors");}
else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
    playerScore++;
    console.log ("You win, scissors beats paper!");}
else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors"){
    console.log ("Scissors vs Scissors, nobody wins");}
else{
    console.log("Your input is invalid");} //In case an invalid input is given
}
//Player and Computer scores variables to store
let playerScore = 0
let computerScore = 0

//This function loops the game 5 times, no for loop, prints the score, evaluates the results and prints who is the winner, if there is one
function game(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log("Player score is" + " " + playerScore);
    console.log("Computer score is" + " " + computerScore);
    if(playerScore > computerScore){
        console.log("Player wins!");
    }
    else if(computerScore > playerScore){ 
        console.log("Computer wins, you are a donkey!")
    }
    else{
        console.log("Tie!")
    }
    }
    game();
//Marcello Godenzi wrote this code in June, 2021