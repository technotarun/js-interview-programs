let obj1 = {name: 'x'};
let obj2 = {age: 34};

let obj3 = Object.assign(this, obj1, obj2); //set the property of obj1 and obj2 to 'this', means in Window Object
let obj4 = Object.assign({}, obj1, obj2); //set the property of obj1 and obj2 to any empty object

console.log(obj3);
console.log(obj4);