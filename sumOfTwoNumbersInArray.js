let arr = [10, 9, 8, 7, 6, 5, 3, 2, 1, 23, 12, 13, 32, 0];
let index = 1;

let arrSumOfTwo = function(inputArray, sum) {
	let outputMap = new Map();
    for(let i in inputArray) {
    	if((inputArray.indexOf(sum - inputArray[i]) !== -1) && (inputArray[i] > sum/2) && (inputArray[i] <= sum)) {
            outputMap.set(inputArray[i], (sum - inputArray[i]));
         }
    }
    return outputMap;
};

arrSumOfTwo(arr, 10).forEach((key, value) => {
    console.log(`Pair ${index} : ${key} and ${value}`);
    index++;
});