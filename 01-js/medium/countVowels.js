/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str=str.toLowerCase()
    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;
    let str_arr=str.split('')
    for (let j = 0;j<str.length; j++){
    let _char = str_arr[j]
    switch (_char){
    case "a":
      a+=1
      break;
    case "e":
      e+=1
      break;
    case "i":
      i+=1
      break;
    case "o":
      o+=1
      break;
    case "u":
      u+=1
      break;
    }
    }

    return a+e+i+o+u;
}

module.exports = countVowels;