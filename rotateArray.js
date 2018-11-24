Array.prototype.rotate = (function() {
    var unshift = Array.prototype.unshift;
    var splice = Array.prototype.splice;

    return function(count) {
        var len = this.length;
        /*splice returns the deleted element/s, 
        then with the help of unshift method the deleted element/s is/are getting added 
        at the start point of the array*/
        unshift.apply(this, splice.call(this, count % len, len)); 
        return this;
    };
})();

console.log([1,2,3,4,5].rotate(4)); //pass the number of times to be rotated as a parameter of rotate() function