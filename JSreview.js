// input should strings.  takes a string.  reverse it into a new string.  compare the two to ensure they equal.  If equal, run palindrome output.  Else run "not palimdonre output."



function checkPalindrome(stringObj) {

  // turn stringObj from string into array
  var checkArray = stringObj.split("").reverse().join("")

  // check for equality
  if ( checkArray === stringObj) {
    console.log(checkArray + " is a palindrome of " + stringObj)

  } else {
    console.log(checkArray + " is NOT a palindrome of " + stringObj);

  }

}
// //
// // function checkPalindrome(stringObj)
checkPalindrome("nomad");
