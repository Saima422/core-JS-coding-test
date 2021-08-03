/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */

// 13) Check if 7 digit output is sent 
// 14) Returns rgb value
// 15) Checks if input is greater than 255
// 16) Takes only three inputs
// 17) Only takes integer input

const rgbToHexConversion = (...rgbValues) => {
    let rgb = "#";

    if(rgbValues.length > 3){
        throw new Error("Invalid Input");
    }
    rgbValues.forEach((item) => {
        if(!(Number.isInteger(item)) || item > 255){
            throw new Error("Invalid Input");
        }

        let value = item.toString(16);
        value = value.length == 2 ? value : '0'+value;
        rgb += value;
    })
    return rgb;
};

module.exports = rgbToHexConversion;
