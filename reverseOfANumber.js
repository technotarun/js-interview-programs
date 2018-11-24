let num = -1092;

let reverseOfANumber = function(num) {
	let rev = 0;
    let remainder = 0;
    let isNegativeNumber = false;
    
    if (num < 0) {
        num = Math.abs(num);
        isNegativeNumber = true;
    }
    
    while(num !== 0) {
        remainder = num % 10;
        rev = rev * 10 + remainder;
        num = Math.floor(num / 10);
    }
    
    if(isNegativeNumber) {
        rev = -rev;
    }
    
    return rev;
}

console.log(reverseOfANumber(num));