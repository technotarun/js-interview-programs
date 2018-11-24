var a = {name: 'tarun', age: 23, sex: 'male'};

var b = Object.assign(a); // name is modified as property got changed

var c = angular.copy(a); // name won't be modified even if you change the property

var d = Object.create(a); // create a new object and assign the object data

var e = a; // name is modified

var f = _.clone(a); //// name won't be modified even if you change the property

console.log("Original object before:", a);

a.name = "poor";

console.log("Object assign: ", b);
console.log("Angular copy: ", c);
console.log("Object create: ", d);
console.log("Create and assign empty object: ", e);
console.log("Loadash clone: ", f);
console.log("Original object after: ", a);
