//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


/**
 * @returns string
 * @param value string
 * 
 */

 export const toRna = (value) => { 
  const complement = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
}
  if(value.length > 0){
    return value.toUpperCase().split('').map(el => complement[el]).join('')
    }
  
   return value

};