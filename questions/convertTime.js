/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */

// 4) Checks for invalid input
// 5) Contains properties {hours, minutes, seconds}
// 6) Check correct conversion

const convertTime = (seconds) => {

    if(!Number.isInteger(seconds)){
        throw new Error("Invalid Input");
    }

    let obj = {
        hours: 0,
        minutes: 0,
        seconds: 0, 
    }

    obj.hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;

    obj.minutes = Math.floor(seconds / 60);
    obj.seconds = seconds % 60;

    return obj;
};

module.exports = convertTime;


