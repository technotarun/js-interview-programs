let x = "teradata";

let uniqChars = function(input) {
    let inputToArray =  input.split('');
    let outputArray = [];

    for(let i = 0; i < inputToArray.length; i++) {
        if (input.indexOf(inputToArray[i]) === input.lastIndexOf(inputToArray[i])) {
            outputArray.push(inputToArray[i]);
        }
    }

    return outputArray;
};

let uniqCharsWithObjectKeys = function(input) {
    let keyObj = {};
    let x = input.split('').forEach(element => {
        keyObj[element] = true;
    });
	
	return Object.keys(keyObj);

}

console.log(uniqChars(x));
console.log(uniqCharsWithObjectKeys(x));