
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

function playRound(humanChoice,computerChoice){
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


}
  

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
