let factFn = function (num) {
    if (num === 1 || num === 0) {
        return 1;
    } else {
        return num * factFn(num - 1);
    }
};

//Flow => 5*factFn(4) -> 20*factFn(3) -> 60*factFn(2) -> 120*factFn(1) 
console.log(factFn(5));