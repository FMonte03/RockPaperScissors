
//get random move
function getComputerChoice() 
{
    let choice = 0 ; 
    choice = Math.floor((Math.random() * 3)+1); 

    if(choice == 1)
    {
        choice = "ROCK";
    }

    else if(choice == 2)
    {
        choice = "PAPER";
    }

    else
    {
        choice = "SCISSORS";
    }

    return choice; 

}


const btnRock = document.querySelector('.Rock'); 
btnRock.addEventListener('click', () => {game('ROCK')});

const btnPaper = document.querySelector('.Paper'); 
btnPaper.addEventListener('click', () => {game('PAPER')})

const btnScissors = document.querySelector('.Scissors'); 
btnScissors.addEventListener('click', () => {game('SCISSORS')});



//set winning conditions and return string declaring winner 
function playRound(c, p)
{
    
    if(c == "ROCK" && p=="SCISSORS"){
        computerScore++; 
        return "You Lose, Rock beats Scissors"
    }
    
    else if(c == "ROCK" && p=="PAPER")
    {
        playerScore++;
        return "You Win, Paper beats Rock"

    }
    else if(c == "ROCK" && p=="ROCK")
    {
        return "TIE!"

    }

    else if(c == "PAPER" && p=="SCISSORS")
    {
        playerScore++;
        return "You Win, Scissors beats Paper"

    }
    else if(c == "PAPER" && p=="PAPER")
    {
        return "TIE!"

    }
    else if(c == "PAPER" && p=="ROCK")
    {
        computerScore++;
        return "You Lose, Paper beats Rock"

    }
    else if(c == "SCISSORS" && p=="SCISSORS")
    {
        return "TIE!"

    }
    else if(c == "SCISSORS" && p=="PAPER")
    {
        computerScore++;
        return "You Lose, Scissors beats Paper"

    }
    else if(c == "SCISSORS" && p=="ROCK")
    {
        playerScore++;
        return "You Win, Rock beats scissors"

    }
    else{

        return p; 
    }
    


}

let computerScore = 0 
let playerScore = 0 

//update functions change the score and the result following the player's choice 
function updateNarrator(str){

    const narrator = document.querySelector('.Narrator'); 
    narrator.textContent = str


}

function updateScoreboard(){

const board = document.querySelector('.ScoreBoard')
board.textContent = `Player ${playerScore} - ${computerScore} CPU`


}

//game function called when player makes a move, gets player choice, computer choice, declares a winner, and then changes the score, and finally checks if there's a winner 
function game(playerChoice){
let computerChoice = getComputerChoice(); 
let result = playRound( computerChoice , playerChoice); 

console.log(`Player ${playerScore} - ${computerScore} Computer`); 
updateScoreboard(); 
updateNarrator(result); 




checkWinner(); 
}
//declares winner and then a pop up shows with a button to reset the game. 
function checkWinner(){
    if (computerScore == 5) return "Computer Wins!";
    else if (playerScore == 5) return "Player Wins!";
    else return; 

}