//How could you set a prefix before everything you log? 
//for example, if you log('my message') it will log: "(app) my message"

//Answer: Just get the arguments, convert it to an array and unshift whatever prefix you want to set. 
//Finally, use apply to pass all the arguments to console.

//The arguments object is not an Array. 
//It is similar to an Array, but does not have any Array properties except length. 
//For example, it does not have the pop method. However it can be converted to a real Array:
//var args = Array.prototype.slice.call(arguments);


function log() {
    //let args = [].slice.call(arguments);
    //let args = Array.prototype.slice.call(arguments);

    //ES2015
    //let args = Array.from(arguments);
    let args = [...arguments];
    args.unshift('(app)');
    args.push('(end)');
    console.log.apply(this, args);
}

log("first");
log("first", "second");




