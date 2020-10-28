function isEven(number){
  return (number % 2 == 0);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function numbersAdd(x, y){
  return x + y;
}

var userSelection;
var userNumber;
var sum;
var result = document.getElementById("final");

var evenButton = document.getElementById("pari");
evenButton.addEventListener("click", function(){
  userSelection = true;
  console.log("did the user select an even number? ", userSelection);
  oddButton.disabled = true;
});

var oddButton = document.getElementById("dispari");
oddButton.addEventListener("click", function(){
  userSelection = false;
  console.log("did the user select an even number? ", userSelection);
  evenButton.disabled = true;
});

document.getElementById("1").addEventListener("click", function(){
  userNumber = 1;
  document.getElementById("userHand").className = "hand-1";
  console.log("user number is: ", userNumber);
});
document.getElementById("2").addEventListener("click", function(){
  userNumber = 2;
  document.getElementById("userHand").className = "hand-2";
  console.log("user number is: ", userNumber);
});
document.getElementById("3").addEventListener("click", function(){
  userNumber = 3;
  document.getElementById("userHand").className = "hand-3";
  console.log("user number is: ", userNumber);
});
document.getElementById("4").addEventListener("click", function(){
  userNumber = 4;
  document.getElementById("userHand").className = "hand-4";
  console.log("user number is: ", userNumber);
});
document.getElementById("5").addEventListener("click", function(){
  userNumber = 5;
  document.getElementById("userHand").className = "hand-5";
  console.log("user number is: ", userNumber);
});

var playButton = document.getElementById("play");
playButton.addEventListener("click", function(){
  var computerNumber = randomNumber(1, 6);
  console.log("computer number is: ", computerNumber);
  document.getElementById("computerHand").className = "hand-" + computerNumber;
  var sum = (computerNumber + userNumber);
  console.log("the total is: ", sum);

  if ((userSelection == true) && (isEven(sum))){
    result.innerHTML = "Pari, hai vinto!"
  }
  if ((userSelection == false) && (isEven(sum))){
    result.innerHTML = "Pari, hai perso!"
  }
  if ((userSelection == true) && (!isEven(sum))){
    result.innerHTML = "Dispari, hai perso!"
  }
  if ((userSelection == false) && (!isEven(sum))){
    result.innerHTML = "Dispari, hai vinto!"
  }
});
