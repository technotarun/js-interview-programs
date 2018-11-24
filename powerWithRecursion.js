let powFn = function (num, pow) {
    if (pow === 0) {
        return 1;
    } else {
        return num * powFn(num, pow - 1);
    }
};

//Flow => 4*powFn(4, 2) -> 4*4*powFn(4, 1) -> 4*4*4*powFn(4, 0)
console.log(powFn(4, 3));