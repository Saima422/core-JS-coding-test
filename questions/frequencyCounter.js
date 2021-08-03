/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

// 7) Check for all objects
// 8) Check for vowel frequency
// 9) Check for invalid input

const countEachFreq = (alpha, str) => {
   let count = 0;
   str = str.split('');

   for(item in str){
      if(str[item] === alpha){
         count += 1;
      }
   }

   return count;
}

const frequencyCounter = (str) => {

   let obj = {};
   let Objkeys = ['a','e','i','o','u'];

   if(Number.isInteger(str)){
      throw new Error("Invalid Input");
   }
   else{

      Objkeys.forEach((item) => {
         let returnValue = countEachFreq(item, str);
         obj[item] = returnValue;
      });
   }
   return obj;
};

module.exports = frequencyCounter;
