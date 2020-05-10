//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {string} phrase 
 * @description checks the number of duplicate word in a sentence
 * @example "Monkey do, Monkey go" => {monkey:2,go:1,do:1}
 */

 export const countWords = (phrase) => {
  let counter = {};
  let  word = phrase.toLocaleLowerCase().match(/\b\w+('\w)?\b/g)
  word.forEach(element => {
     if(!counter.hasOwnProperty(element)){
       counter[element] = 1
     }else{
      ++counter[element]
     }
  });
  return counter
};
