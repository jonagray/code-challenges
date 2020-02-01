'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */

let isPalindrome = function(s) {

  var punctuationless = s.replace(/[.,\/@#'"?!$%\^&\*;:{}=\-_`~()]/g,"");
  var finalString = punctuationless.replace(/\s{2,}/g,"");
  finalString = finalString.replace(/\s/g, '');
  perfectString = finalString.toLowerCase();


  let palindrome = true;
  let placeHolder = "";
  let reversed = [];
  let original = [...perfectString];

  for (let i = 0; i < perfectString.length; i++) {
    reversed.push(perfectString[i])
  };

  for (let j = 0; j < original.length; j++) {
    placeholder = reversed.pop();
    if (original[j] !== placeholder) {
      palindrome = false;
    }
  }
  
  return palindrome;
};