// FUNCTIONS
function isEven(number){
  return (number % 2 == 0);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clickNumber(n){
  document.getElementById(n).addEventListener("click", function(){
    userNumber = n;
    document.getElementById("userHand").className = "hand-" + n;
    console.log("user number is: ", userNumber);
  });
}

// INPUT VARIABLES
var userSelection;
var userNumber;

// OUTPUT VARIABLES
var sum;
var result = document.getElementById("final");

// EVEN AND ODD BUTTONS
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

// SELECTED NUMBER BUTTON
var i = 1;
while (i<=5) {
  userNumber = clickNumber(i);
  console.log("user number is: ", userNumber);
  i++;
}

// PLAY BUTTON
var playButton = document.getElementById("play");

// COMPUTER TURN
playButton.addEventListener("click", function(){
  var computerNumber = randomNumber(1, 5);
  console.log("computer number is: ", computerNumber);
  document.getElementById("computerHand").className = "hand-" + computerNumber;
  var sum = computerNumber + userNumber;
  console.log("the total is: ", sum);

  // RESULT
  if ((userSelection == true) && (isEven(sum))){
    result.innerHTML = "Pari, hai vinto!"
  } else if ((userSelection == false) && (isEven(sum))){
    result.innerHTML = "Pari, hai perso!"
  } else if ((userSelection == true) && (!isEven(sum))){
    result.innerHTML = "Dispari, hai perso!"
  } else {
    result.innerHTML = "Dispari, hai vinto!"
  }
});
