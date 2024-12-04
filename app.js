let userscore=0;
let compscore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
 console.log("game was draw");
 msg.innerText="Game Was Draw!!,Play Again..";
 msg.style.backgroundColor="black";
};
const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you Win!!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";

    }else{
        compscore++;
        console.log("you lose!!");
        msg.innerText="You lose!";
        compscorepara.innerText=compscore;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userchoiceId)=>{
    console.log("user choice=",userchoiceId);

    const compChoice=gencompchoice();
    console.log("comp choice=",compChoice);
    if(userchoiceId===compChoice){
        drawGame();
    }else{
        let userwin=true;
        if(userchoiceId==="rock"){
            userwin=compChoice==="paper"?false:true;
        }else if(userchoiceId==="paper"){
            userwin=compChoice==="scissors"?false:true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showwinner(userwin);
    }

};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoiceId=choice.getAttribute("id")
        // console.log("choice was clicked",userchoiceId)
        playGame(userchoiceId);
            });
});
