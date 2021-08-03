/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

// 1) Return sum 
// 2) Detect empty inputs
// 3) Detects alphabet inputs

const addition = (...numbers) => {
  let sum = 0;

  if(numbers.length === 0){
    throw new Error("Invalid Input");
  }

  let isNum = true;

  numbers.forEach((num) => {
    if(!Number.isInteger(num)){
      isNum = false;
    }
  })

  if(isNum){
      numbers.forEach((num) => {
        sum += num;
    });

    return sum;
  }
  else{
    throw new Error('Invalid Input');
  }
  
};

module.exports = addition;