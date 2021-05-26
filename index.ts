import './style.css';
function getLongestWord(str) {
str = str.replace(/[^\w\s]|_/g, " ")
         .replace(/\s+/g, " ");
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0];

  }

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Challenge 1</h1>`
+ "<p>"
+ getLongestWord("fun&!! time")
+ "</p><p>"
+ getLongestWord("I love dogs")
+ "</p><p>"
+ getLongestWord("I love dogs...yes")
+ "</p>"

;