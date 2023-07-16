
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

const tryAgain = document.querySelector('.modalButton');
tryAgain.addEventListener('click', gameReset); 

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

const imgSrc = {
    ROCK : "images/Untitled_design__2_-removebg-preview.png", 
    PAPER : "images/Untitled_design__1_-removebg-preview.png",
    SCISSORS : "images/Untitled_design-removebg-preview.png"
}; 


//changes emoji and p text inside game container div
function updateGameContainer(player, computer){

    const pImg = document.querySelector('#playerIMG'); 
    const cImg = document.querySelector('#computerIMG'); 

    pImg.src = imgSrc[player]; 
    cImg.src = imgSrc[computer]; 

    const pPara = pImg.nextElementSibling; 
    const cPara = cImg.nextElementSibling;

    pPara.textContent = player.charAt(0).toUpperCase()+player.toLowerCase().slice(1)  +"!";
    cPara.textContent = computer.charAt(0).toUpperCase() + computer.toLowerCase().slice(1)+"!"; 
}

//game function called when player makes a move, gets player choice, computer choice, declares a winner, and then changes the score, and finally checks if there's a winner 
function game(playerChoice){
let computerChoice = getComputerChoice(); 
let result = playRound( computerChoice , playerChoice); 
updateGameContainer(playerChoice, computerChoice); 
updateScoreboard(); 
updateNarrator(result); 


console.log(playerScore, computerScore)

checkWinner(); 


}


//declares winner and then a pop up shows with a button to reset the game. 
function checkWinner(){

    if (computerScore == 5){
        const modal = document.querySelector('.modal'); 
        modal.style.display = "flex"; 
        const result = document.querySelector(".result"); 
        result.innerHTML = "You are a <strong>LOSER</strong>" ;
        const tryAgain = document.querySelector('.modalButton');
        tryAgain.addEventListener('click', gameReset); 

    } 
    else if (playerScore == 5) {
        const modal = document.querySelector('.modal'); 
        modal.style.display = "flex"; 
        const result = document.querySelector(".result"); 
        result.innerHTML = "Congrats, You Win!" ;
        const tryAgain = document.querySelector('.modalButton');
        tryAgain.addEventListener('click', gameReset); 

       
    }
    else return; 

}


function gameReset(){

    computerScore= 0; 
    playerScore = 0; 
    
    const narrator = document.querySelector('.Narrator'); 
    narrator.textContent = "First to Five, Do you have what it takes?";

    const board = document.querySelector('.ScoreBoard');
    board.textContent = "Player 0 - 0 Computer"; 

    const pImg = document.querySelector('#playerIMG'); 
    const cImg = document.querySelector('#computerIMG'); 
    cImg.src  = ""; 
    pImg.src = ""; 

    const pPara = pImg.nextElementSibling; 
    const cPara = cImg.nextElementSibling;
    pPara.textContent = ""; 
    cPara.textContent = "";

    const modal = document.querySelector('.modal');
    modal.style.display = "none"; 
    const result = document.querySelector(".result"); 
    result.innerHTML = "" ;
    

}