// input should strings.  takes a string.  reverse it into a new string.  compare the two to ensure they equal.  If equal, run palindrome output.  Else run "not palimdonre output."


//
// function checkPalindrome(stringObj) {
//
//   // turn stringObj from string into array
//   var checkArray = stringObj.split("").reverse().join("")
//
//   // check for equality
//   if ( checkArray === stringObj) {
//     console.log(checkArray + " is a palindrome of " + stringObj)
//
//   } else {
//     console.log(checkArray + " is NOT a palindrome of " + stringObj);
//
//   }
//
// }
//
// checkPalindrome("nomad");

//Write a function that takes in two arrays (of numbers) and checks for duplicates.  The function should output a new array without duplicates

// hint: you will need a loop
// hint: use the .includes() method

// two arrays
// var arr1 = [1, 2, 3, 4]
// var arr2 = [1, 3, 5, 7]
//
// function dupCheck(objOne, objTwo) {
// var arr3 = []
// var arr4 = []
//
// for (let i = 0; i < objOne.length; i++) {
//   if (objTwo.includes(objOne[i]) === false) {
//     arr3.push(objOne[i])
//   }
// } arr4 = arr3.concat(objTwo)
//     return arr4 }
//
// console.log(dupCheck(arr1, arr2))


//Create a function that takes in a sentence and returns only the consonants (removes the vowels).

// hint: you will need a loop
// hint: use the .includes() method

var testSentence1 = "Toma Carajo!"
//expected output = “Ths wbst s wsm!”

function removeVowels(testSentence1) {

var vowels = ["a", "e", "i", "o", "u"]
var splitSentence = testSentence1.split("")
var consonants = []

// for (let i = 0; i < testSentence1.length; i++){
//   if (testSentence1.includes(vowels[i]) === false) {
//     consonants.push(testSentence1[i])
//   }

for (let i = 0; i < splitSentence.length; i++) {
  //splitsentence and vowels are swapped, change them on next line
  if (!vowels.includes(splitSentence[i])) {
    consonants.push(splitSentence[i])
  }
}   return(consonants)
}

console.log(removeVowels(testSentence1))
