/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z]/gi, '');
  let str_arr=str.split('')
  for (let i = 0; i<str.length / 2 ; i++){
    if (str_arr[i]!=str_arr[str.length-i-1]){
      return false;
      break
    }
  }  
  return true;
}

module.exports = isPalindrome;


