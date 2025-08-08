let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");//this will hold all the choices such as rock,paper,scissor
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user_score");
let compScorePara=document.querySelector("#com_score");

//This fun is used to generate computer choice
const genComChoice=()=>{
    //rock,paper,scissor
    const options=["rock","paper","scissor"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];

}
//This fun is used to print the draw msg on console
const drawGame=()=>{
    console.log("Game Was Draw");
    msg.innerText="Game was Draw"
    msg.style.backgroundColor="black"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore;
        console.log("You Win!")
        msg.innerText=`You Win!your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compScore++
        compScorePara.innerText=compScore;
        console.log("You Lose")
        msg.innerText=`You Lose !${compChoice} beat your ${userChoice}`
        msg.style.backgroundColor="red"
    }

}

//This fun is used to play the game,and this will hold main game logic
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //Generate Comp choice-->Modular way of programming

    //Gen computer choice
    let compChoice=genComChoice();
    console.log("comp choice =",compChoice)
    
    if(userChoice===compChoice){
        drawGame()
        
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper"?false:true;

        }
        else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            //rock,paper
           userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
        
    }


}

choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        // console.log("choice was clicked ")
        const userChoice=choice.getAttribute("id");//this is to get userChoice 
        console.log(`the choice was clicked ${userChoice}`) ;
        playGame(userChoice) ;
    })
})