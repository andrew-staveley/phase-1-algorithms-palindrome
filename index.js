function isPalindrome(word) {

  //Initialization
  let stringSplit = word.split('').reverse();
  let text = "";

  //For-in loop to iterate through split letters
  for (let member in stringSplit) {
  text += stringSplit[member];
  }

  //Palindrome detector
  if (word === text) {
    return true
  } else {
    return false
  }
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
