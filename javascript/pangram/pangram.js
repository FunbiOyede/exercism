//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
  const alphabeth = 'abcdefghijklmnopqrstuvwxyz'.split('')

 /**
  * 
  * @param {string} value 
  * @description returns true or false if a string is a pangram.this algorithm time complexity is O(n)
  * @returns {boolean}
  */

 export const isPangram = (value) => {
      let sentence = value.toLowerCase().trim().split('')
      for(let w in alphabeth){
        if(sentence.indexOf(alphabeth[w])=== -1){
          return false
        }
      }
      return true

   
   
};
 
