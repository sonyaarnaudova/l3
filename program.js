function upperCaser(input) { //ex 1
    let upper =  input.toUpperCase();
    return upper;
}
module.exports = upperCaser;

function repeat(operation, num) { //ex2
 for(let i; i< num;i++){
    operation();
 }
}
  
  module.exports = repeat

function doubleAll(numbers) { //ex3
    var result =[];
    result = numbers.map(x => x * 2);
    return result;
}
  
  module.exports = doubleAll

function getShortMessages(messages) { //ex 4
    return messages
    .filter((messages)=> messages.message.length<50)
    .map((messages)=> messages.message);
}
  
  module.exports = getShortMessages

function checkUsersValid(goodUsers) { //ex 5
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(submittedUser) {
        return goodUsers.some(function(goodUser) {
          return goodUser.id === submittedUser.id;
        });
      });
    };
  }
  module.exports = checkUsersValid;

function countWords(inputWords){ //ex 6 
    return inputWords.reduce(function(wordCount, currentValue){
      if (!wordCount[currentValue]){
        wordCount[currentValue] = 1;
      } else {
        wordCount[currentValue] = wordCount[currentValue] + 1;
      }
      return wordCount;
    },{});
  }
  
  module.exports = countWords;
