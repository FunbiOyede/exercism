/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


// yelling = 'Whoa, chill out! ==> caps or end with !,
// yell question = Calm down, I know what I'm doing ==> caps and question are the end


/**
 * @description Handles regex
 */
class RegexUtiltiy{
  constructor(message){
    this.message = message.trim()
    this.caps = /[A-Z]/;
    this.emptyString = /^\s+$|^$/;
  }

  /**
   * @description handles logic for messages that are questions
   * @returns bool
   */
  isQuestion(){
   if(this.message.endsWith('?')){
     return true
   }
   return false

 }
 
 yelling(){
   if(this.message.match(this.caps) && this.message === this.message.toUpperCase()){
     return true
   }
   return false
 }

 isSilent(){
   if(this.message.match(this.emptyString) || this.message === '' ){
     return true
   }
   return false
 }
}




  export const hey = (message) => {
   const regexTool = new RegexUtiltiy(message);     
     if(regexTool.isSilent()){
       return 'Fine. Be that way!';
     }
     else if(regexTool.isQuestion() && !regexTool.yelling()){
      return "Sure."
   } else if(regexTool.yelling() && !regexTool.isQuestion()){
     return 'Whoa, chill out!'
   }else if(regexTool.yelling() && regexTool.isQuestion()){
     return 'Calm down, I know what I\'m doing!'
   }else{
     return 'Whatever.'
   }
   
};
