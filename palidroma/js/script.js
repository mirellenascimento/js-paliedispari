var imputWord = prompt("Please, insert a word:").toLowerCase();
// console.log(imputWord);
var message = "La parola " + imputWord.toUpperCase() + " non è palidroma."

function palidroma (imputWord) {
  var word = imputWord.split("");
  // console.log("split", word);
  word.reverse();
  // console.log(word);
  reverseWord = word.join("");
  // console.log(reverseWord);
  return (imputWord == reverseWord);
}


if (palidroma(imputWord)) {
  message = "La parola " + imputWord.toUpperCase() + " è palidroma."
}
// console.log(message);
document.getElementById("text").innerHTML = message;
