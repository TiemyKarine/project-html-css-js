let userScore = 0;
let compScore = 0;

const userScoreOn = document.querySelector("#user");
const compScoreOn = document.querySelector("#comp");
const choices = document.querySelectorAll(".choice-on");
const result = document.querySelector("#result");


const compChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return option[idx];
}


const winnerShow = (userwinner, userchoice, compchoice) => {
    if (userwin) {
        userScore ++;
        userScoreOn.innerText = userScore;
        result.innerText = "You King!!";
        result.innerText = `You Win!! Your ${userchoice} beats the ${compchoice} `;
        result.style.backgroundColor = "green";
        result.style.color = "white";
        result.style.fontWeight = "bold";

    } else {
        compScore++;
        compScoreOn.innerText = compScore;
        result.innerText = `You Lose!! ${compchoice} beats your ${userchoice}`;
        result.style.backgroundColor = "red";
        result.style.color = "white";
        restult.style.fontWeight = "bold";
    }
}

const drawGame = () => {
    result.innerText = "Game was play again!";
    result.style.backgroundColor = "yellow";
    result.style.color = "black";
    result.style.fontWeight = "bolder";
}


const playGame {
    console.log("user choice = ", userchoice);
    const compchoice = compChoice();
    console.log("comp choice = ", compchoice)

    if(userchoice === compchoice) {
        drawGame();
    } else {
        let userwin;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        winnerShow(userwin, userchoice, compchoice)
    }
}

choice.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})