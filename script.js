let userScore=0;
let compScore=0;
const choices= document.querySelectorAll('.choice');
const playurmove= document.querySelector('#msg');
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice=()=>{
    const choicesArray=['rock','paper','scissors'];
    const randidx=Math.floor(Math.random()*3);
    return choicesArray[randidx];
}
const draw=()=>{
    console.log('draw');
    msg.textContent = "It's a draw";
    msg.style.backgroundColor='#09090B';
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        msg.textContent = `You win! ${userChoice} beats ${compChoice}`;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        msg.textContent = `You lose! ${compChoice} beats ${userChoice}`
        compScorePara.innerText=compScore;
        msg.style.backgroundColor='red';
    }
};
const playGame=(userChoice)=>{
    const compChoice = genCompChoice();
    let userwin;
    if (userChoice === compChoice) {
      //Draw Game
      draw();
    } else {
        if (userChoice === "rock") {
          //scissors, paper
          userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userwin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userwin = compChoice === "rock" ? false : true;
        }
    }
      // showWinner(userwin,userChoice,compChoice);
      if (userwin !== undefined) {
        // Only call showWinner if userwin is defined (i.e., it wasn't a draw)
        showWinner(userwin, userChoice, compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        console.log('clicked');
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});