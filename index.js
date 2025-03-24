let userScore=0;
let compScore=0;
let usescr=document.querySelector("#user-scr");
let cmpscr=document.querySelector("#comp-scr");
let rstbtn=document.querySelector(".rst-scr");

let userchoice=document.querySelector(".user-choice");
let compchoice=document.querySelector(".comp-choice");
let userimg=document.querySelector(".user-img");
let compimg=document.querySelector(".comp-img");

let msg=document.querySelector("#msg");

const choices=document.querySelectorAll(".choice");

const showWinner=(userwin,userChoice,cmptchoice)=>{
    if(userwin){
        userScore++;
        usescr.innerText=userScore;
        console.log("Yoou win");
        msg.innerText=`You Win!Your ${userChoice} beats ${cmptchoice}`;
        msg.style.backgroundColor="#3D8D7A";
    }
    else{
        compScore++;
        cmpscr.innerText=compScore;
        console.log("Compuer Win")
        msg.innerText=`You Loose! ${cmptchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#E50046";
    }
}

const generateComptChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor( Math.random()*3);
    if(option[randIdx]=="rock"){
        compimg.innerHTML="<img class='chooseimg' src='rock.jpg'>";
        compchoice.classList.remove("hide");
    }
    else if(option[randIdx]=="paper"){
        compimg.innerHTML="<img class='chooseimg' src='paper.jpg'>";
        compchoice.classList.remove("hide");
    }
    else{
        compimg.innerHTML="<img class='chooseimg' src='scissor.jpg'>";
        compchoice.classList.remove("hide");
    }
    return option[randIdx];
}

const playGame=(userChoice)=>{
    console.log("User clicked",userChoice);
    const cmptchoice=generateComptChoice();
    console.log("Computer clicked",cmptchoice);
const draw=()=>{
    console.log("Draw")
    msg.innerText="Draw!";
    msg.style.backgroundColor="#F6DC43";
}
    if(userChoice==cmptchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userChoice=="rock"){
            userwin=cmptchoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userwin=cmptchoice=="scissor"?false:true;
        }
        else{
            userwin=cmptchoice=="rock"?false:true;
        }
        showWinner(userwin,userChoice,cmptchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        const userChoice =choice.getAttribute("id");
        if(userChoice=="rock"){
            userimg.innerHTML="<img class='chooseimg' src='img/rock.jpg'>";
            userchoice.classList.remove("hide");
        }
        else if(userChoice=="paper"){
            userimg.innerHTML="<img class='chooseimg' src='img/paper.jpg'>";
            userchoice.classList.remove("hide");
        }
        else{
            userimg.innerHTML="<img class='chooseimg' src='img/scissor.jpg'>";
            userchoice.classList.remove("hide");
        }
        playGame(userChoice);
    })
})

rstbtn.addEventListener(("click"),()=>{
    cmpscr.innerText="0";
    usescr.innerText="0";
    userScore=0;
    compScore=0;
    msg.innerText="Play your Move";
    userchoice.classList.add("hide");
    compchoice.classList.add("hide");
    msg.style.backgroundColor="white";
})
