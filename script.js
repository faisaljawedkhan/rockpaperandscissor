let playerDiv = document.getElementById("playerDiv");
let computerDiv = document.getElementById("computerDiv");
let showResult = document.getElementById("showResult");
let startPlayBtn = document.getElementById("startPlayBtn");
let playSection = document.getElementById("playSection");
let mainFirstDiv = document.getElementById("mainFirstDiv");
let showPlayerOrCompScore = document.getElementById("showPlayerOrCompScore");
let resetGameDiv = document.getElementById("resetGameDiv");
let ROCK = `<img src="../Image/Rock.png" alt="ROCK">`;
let PAPER = `<img src="../Image/Paper.png" alt="PAPER">`;
let SCISSOR = `<img src="../Image/Scissor.png" alt="SCISSOR">`;
let playerWon = "Won";
let compWon = "Lose";
let neitherWon = "Draw";
let playerWonMessage = `Congratulations!!! You Won this time.`;
let playerLoseMessage = `Sorry!!! You Lose this time.`;
let playerDrawMessage = `Oooh!!! It's Draw.`;

let img = [ROCK, PAPER, SCISSOR];
let playerScore = 0;
let computerScore = 0;

const playBtn = () => {
    playSection.classList.add("showPlaySection")
    playSection.classList.remove("playSection")
    mainFirstDiv.style.display = "none";
}

const resetBtn = () => {
    resetGameDiv.classList.add("hideResetGameDiv");
    resetGameDiv.classList.remove("showResetGameDiv");
    playSection.classList.add("playSection")
    playSection.classList.remove("showPlaySection")
    mainFirstDiv.style.display = "block";
}

const playMatch = () => {
    let buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            playerDiv.innerHTML = img[index]
            let pChoice = index;

            let cChoice = Math.floor(Math.random() * img.length);
            computerDiv.innerHTML = img[cChoice];
            getWinner(cChoice, pChoice);
        });
    })
}

const updateScore = () => {
    let pScore = document.getElementById("pScore");
    let cScore = document.getElementById("cScore");
    pScore.innerText = playerScore;
    cScore.innerText = computerScore;
}

const getWinner = (cChoice, pChoice) => {
    if (pChoice === cChoice) {
        showResult.innerHTML = playerDrawMessage;
        return;
    } else if ((cChoice === 0 && pChoice === 1) ||
    (cChoice === 1 && pChoice === 2) ||
    (cChoice === 2 && pChoice === 0)) {
        showResult.innerHTML = playerWonMessage;
        playerScore++;
        showPlayNowBtn();
        updateScore();
        return;
    } else {
        showResult.innerHTML = playerLoseMessage;
        computerScore++;
        showPlayNowBtn();
        updateScore();
        return;
    }
}

function showPlayNowBtn () {
    if (playerScore === 5) {
        playSection.classList.remove("showPlaySection")
        playSection.classList.add("playSection")
        showPlayerOrCompScore.innerHTML = `
        <h1>Game Over!!!</h1>
        <h2>Final Score is <span>${playerScore}</span> and You <span>${playerWon}</span> the Match.</h2>
        <h3>Refresh to Play again.</h3>`
        resetGameDiv.classList.add("showResetGameDiv");
        resetGameDiv.classList.remove("hideResetGameDiv");
    } else if (computerScore === 5) {
        playSection.classList.remove("showPlaySection")
        playSection.classList.add("playSection")
        showPlayerOrCompScore.innerHTML = `
        <h1>Game Over!!!</h1>
        <h2>Final Score is <span>${computerScore}</span> and You <span>${compWon}</span> the Match.</h2>
        <h3>Refresh to Play again.</h3>`
        resetGameDiv.classList.add("showResetGameDiv");
        resetGameDiv.classList.remove("hideResetGameDiv");
    }
}

showPlayNowBtn();
playMatch();
updateScore();