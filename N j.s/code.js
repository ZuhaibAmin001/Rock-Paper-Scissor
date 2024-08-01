let yourcount =0;
let compcount =0;

const choices = document.querySelectorAll(".choice");

const para = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");


const showwinner = (userwin) =>{
  if(userwin){
    yourcount++;
    userscore.innerText = yourcount;
    console.log("you won");
    para.innerText = "you won";

  }
  else{
    compcount++;
    compscore.innerText = compcount;
    console.log("you loose");
    para.innerText = "you loose";
  }
}

const draw = ()=>{
  console.log("match is drawn");
  para.innerText = "you drawn"
}

const getcompchoice = () =>{
  const options = ["rock","paper","scissor"];
  const rdmoption = Math.floor(Math.random() * 3);
  return options[rdmoption];
}

const playgame = (userchoice)=>{
  console.log("user choice =" , userchoice);

  const compchoice = getcompchoice();
  console.log("comp choice = ", compchoice)

  if(userchoice === compchoice){
    draw();
  }
  else{
    let userwin = true;
    if(userchoice === "rock"){
      userwin = compchoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
      userwin = compchoice === "scissor" ? true :false;
    }
    else{
     
        userwin = compchoice === "rock" ? false : true;
      
    }
    showwinner(userwin);
  }
  


}

choices.forEach((choice) =>{
  choice.addEventListener("click" , () =>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  
  });
})