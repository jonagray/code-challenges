'use strict';

/**
 * @param {string[]} words
 * @return {string}
 */

let words = ["lost", "losing", "losses"];

var longestCommonPrefix = function(words) {
    let longestPrefix = '';
    // If the array is greater than one word (which would mean there is no longest common prefix), set variable longestPrefix to the first word in the array
    if (words.length > 0) {
      longestPrefix = words[0];
      //this loop starts at the second word in the array, and loops through the rest of the words
      for (let i = 1; i < words.length; i++) {
        //this loop starts at the first letter of the first word in the array
        for (let j = 0; j < longestPrefix.length; j++) {
          // If the second word of the array's first letter is not equal to the first word of the array's first letter, slice off the array's first word at the point of j
          // If not, continue until the if condition is no longer true - otherwise, break
          if (words[i][j] != longestPrefix[j]) {
            longestPrefix = longestPrefix.slice(0, j);
            break;
          }
        }
      }
    }
    return longestPrefix;
}

longestCommonPrefix(words)