Function.prototype.bind = Function.prototype.bind || function(context) {
    return function() {
        return this.apply(this, context);
    }
}

let obj = {num: 2};

/* let addToThis = (a) => {
    return this.num + a;
}; */

let addToThis = function(a) {
    return this.num + a;
};

let temp = addToThis.bind(obj);
console.log(temp(3));