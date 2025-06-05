
function getComputerChoice(){

      let randnum = Math.random();
      console.log(randnum);

      if(randnum<= 0.33){
          return "rock"
        
      }
      else if (randnum > 0.33 &&  randnum <= 0.66){
          return "paper"
       
      }
      else if (randnum > 0.66){
          return "scissors"
       
      }

}

function getHumanChoice(){
  let user1 = prompt("hello please enter rock paper or scissors for input");

        
        
  return user1
}

let computerScore = 0;
let humanScore = 0;
let div = document.createElement("div");

function playRound(humanChoice,computerChoice){
    if(humanScore == 5){
        div.innerHTML = `<p> the human wins the game </p>  <p> human score:${humanScore} and computer score: ${computerScore}</p> `;

      }
  else if(computerScore == 5){
        div.innerHTML = `<p> the computer wins the game </p>  <p> human score:${humanScore} and computer score: ${computerScore}</p> `;

      }
  else if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock"|| humanChoice == "scissors" && computerChoice == "paper"){
        humanScore +=1;
        div.innerHTML = `<p> human wins</p>  <p> human score:${humanScore} and computer score: ${computerScore}</p> `;
        
      
  }

  else if(humanChoice == computerChoice ){
    div.innerHTML = `<p> draw </p>  <p> human score:${humanScore} and computer score: ${computerScore}</p> `;
}
else{ 
      computerScore +=1;
      div.innerHTML = `<p> computer wins</p>  <p> human score:${humanScore} and computer score: ${computerScore}</p> `
      
      
  }
      
}



let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");
    let page = document.querySelector("body");
    

    button1.textContent = "rock";
    button2.textContent = "paper";
    button3.textContent = "scissors";
    
    button1.addEventListener("click",()=>playRound("rock",getComputerChoice()));
    button2.addEventListener("click",()=>playRound("paper",getComputerChoice()));
    button3.addEventListener("click",()=>playRound("scissors",getComputerChoice()));
    
    
    page.appendChild(button1);
    page.appendChild(button2);
    page.appendChild(button3);
    page.appendChild(div)


  
/*
function playGame(){
    let select1 = getComputerChoice();
    let select2 = getHumanChoice();
    console.log(select1);
    console.log(select2);
    playRound(select2.toLowerCase(),select1);

    select1 = getComputerChoice();
    select2 = getHumanChoice();
    console.log(select1);
    console.log(select2);
    playRound(select2.toLowerCase(),select1);

    select1 = getComputerChoice();
    select2 = getHumanChoice();
    console.log(select1);
    console.log(select2);
    playRound(select2.toLowerCase(),select1);

    select1 = getComputerChoice();
    select2 = getHumanChoice();
    console.log(select1);
    console.log(select2);
    playRound(select2.toLowerCase(),select1);

    select1 = getComputerChoice();
    select2 = getHumanChoice();
    console.log(select1);
    console.log(select2);
    playRound(select2.toLowerCase(),select1);



}

playGame();
*/











/*
let user1 = prompt("hello please enter rock paper or scissors for input")
let user2 = prompt("hello please enter rock paper or scissors for input")

if(user1 == "rock" && user2 == "scissors" ){
    console.log("rock wins");
}

else if(user1 == "rock" && user2 == "rock" ||  user1 == "paper" && user2 == "paper" || user1 == "scissors" && user2 == "scissors" ){
   console.log("draw");
}
else if(user1 == "scissors" && user2 == "paper" ){
    console.log("scissors wins");
}
else
    {
    console.log("paper wins");
}

*/


/* function playRound(humanChoice,computerChoice){
    let div = document.createElement("div");
  if(humanChoice == "rock" && computerChoice == "scissors" ){
      console.log("rock wins, human wins");
      humanScore +=1;
      console.log(`human score:${humanScore} and computer score: ${computerScore}`)
  }

  else if(humanChoice == "rock" && computerChoice == "rock" ||  humanChoice == "paper" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "scissors" ){
    console.log("draw");
    console.log(`human score:${humanScore} and computer score: ${computerScore}`)
  }
  else if(humanChoice == "scissors" && computerChoice == "paper" ){
      console.log("scissors wins, human wins");
      humanScore +=1;
      console.log(`human score:${humanScore} and computer score: ${computerScore}`)
  }
  else if (humanChoice == "paper" && computerChoice == "rock"){
  
      console.log("paper wins, human wins");
      humanScore +=1;
      console.log(`human score:${humanScore} and computer score: ${computerScore}`)
  }

  else{
    if(computerChoice == "rock" && humanChoice == "scissors" ){
        console.log("rock wins, computer wins");
        computerScore+=1;
        console.log(`human score:${humanScore} and computer score: ${computerScore}`)
    }

    else if(computerChoice == "scissors" && humanChoice == "paper" ){
        console.log("scissors wins, computer wins");
        computerScore +=1;
        console.log(`human score:${humanScore} and computer score: ${computerScore}`)
    }
    else if (computerChoice == "paper" && humanChoice == "rock"){
    
        console.log("paper wins, computer wins");
        computerScore +=1;
        console.log(`human score:${humanScore} and computer score: ${computerScore}`)
    }
}


} */
