var sum = function(num1, num2) {

    if( num1 && num2) {
        total = num1 + num2;
    } else if(num2 === undefined){
        return function(num) {
            return num + num1;
        }
    }

    return num1 + num2;
}

console.log(sum(3, 4));
console.log(sum(3)(4));