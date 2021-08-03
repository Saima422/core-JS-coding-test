// 18) Check input 
// 19) Checks for invalid direction
// 20) Left rotation
// 21) Right rotation

 // str = input string
// n = number of rotations
//
// input str = random ,1, right
// output mrando

const rotateString = (str, n, direction) => {

  let result;

  if(Number.isInteger(str) || !Number.isInteger(n)){
    throw new Error("Invalid Input");
  }

  let validDir = ['left', 'right'];

  if(!validDir.includes(direction)){
    throw new Error('Invalid Direction');
  }

  if(direction == 'left'){
    result = str.substr(n) + str.substr(0, n);
  }
  else{
    result = str.substr(-n) + str.substr(0, str.length-n);
  }
  return result;
};

module.exports = rotateString;