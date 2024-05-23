/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let str11 = Array.from(str1);
  let str22 = Array.from(str2);

  str11.sort();
  str22.sort();

  if (str11.join()===str22.join()){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isAnagram;