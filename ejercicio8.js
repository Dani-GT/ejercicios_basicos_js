const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
  let longestWord = "";
  for (const word of stringList) {
    if (word.length > longestWord.length){
      longestWord = word;
    }
  }
console.log(longestWord);
}

findLongestWord(avengers)
