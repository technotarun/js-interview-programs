function assign(target, ...dictionary) {
    let obj, src;
    
    if(target === null || target === undefined) {
        return;
    }

    obj = Object(target);
    
    dictionary.forEach(function(item) {

        if(item === null || item === undefined) {
            return;
        }
    
       src = Object(item);
        Object.getOwnPropertyNames(src).forEach(function(key) {
            obj[key] = src[key];
        }); 
    });

    return obj;
}


var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }