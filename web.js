let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const gencompChoice=()=>{
    const option=["rock", "paper" ,"scissor"];
    const randmIdx=Math.floor(Math.random() * 3);
    return option[randmIdx];
};
 const drawGame=()=>{
    console.log("game is draw.")
    msg.innerText="Game is Draw Play Again";
     msg.style.backgroundColor=" #081b31";
    
 };
 const showWinner=(userwin,compchoice,userchoice)=>
 {
    if(userwin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You win!";
         msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }

 };


const playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompChoice()
    console.log("compchoice",compchoice);
    if(userchoice===compchoice)
    {
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")

        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice===paper)
            {
                userwin=compchoice==="scissor"?false:true;

            }
            else{
                //scissor
                userwin=compchoice==="rock"?false:true;
            }
            showWinner(userwin ,userchoice,compchoice);

    }
   

    //generate computer choice

};


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);

    });
});







