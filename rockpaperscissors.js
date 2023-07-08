
//get random move
function getComputerChoice() {
    let choice = 0 ; 
    choice = Math.floor((Math.random() * 3)+1); 
    if(choice == 1){
        choice = "ROCK";
    }

    else if(choice == 2){
        choice = "PAPER";


    }

    else{
        choice = "SCISSORS";
    }
    return choice; 

}


let moves = new Set(["ROCK", "PAPER", "SCISSORS"]);
//get players move 
function getPlayerChoice(){

    let choice = prompt("Make your move!").toUpperCase(); 
    if( moves.has(choice) ){
    return choice; 
    } 
    else {
        return "INVALID MOVE!";
    }

}

//set winning conditions and return string declaring winner 
function playRound(c, p){
    
    if(c == "ROCK" && p=="SCISSORS"){
        return "You Lose, Rock beats Scissors"
    }
    
    else if(c == "ROCK" && p=="PAPER")
    {
        return "You Win, Paper beats Rock"

    }
    else if(c == "ROCK" && p=="ROCK")
    {
        return "TIE!"

    }

    else if(c == "PAPER" && p=="SCISSORS")
    {
        return "You Win, Scissors beats Paper"

    }
    else if(c == "PAPER" && p=="PAPER")
    {
        return "TIE!"

    }
    else if(c == "PAPER" && p=="ROCK")
    {
        return "You Lose, Paper beats Rock"

    }
    else if(c == "SCISSORS" && p=="SCISSORS")
    {
        return "TIE!"

    }
    else if(c == "SCISSORS" && p=="PAPER")
    {
        return "You Lose, Scissors beats Paper"

    }
    else if(c == "SCISSORS" && p=="ROCK")
    {
        return "You Win, Rock beats scissors"

    }
    else{

        return p; 
    }
    


}

let computerScore = 0 
let playerScore = 0 

function game(){
console.log("First to Five!");
let over = false; 
//game loop 
while(over == false){
console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
let result = "";
result = playRound(getComputerChoice(), getPlayerChoice());

if(result.includes("Win")){
    playerScore++ ; 
    console.log(result); 
}

else if( result.includes("Lose")){

    computerScore++; 
    console.log(result); 
}

else if(result.includes("TIE")){
    console.log(result); 
}

else {
    console.log(result); 
    continue;
}



if(computerScore == 5 || playerScore == 5){


    over = true;

    console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
    if(computerScore>playerScore){
        console.log("You are a LOSER!");

    }
    else{
        console.log("Congrats you win!"); 
    }
}

}



}

game()