console.log(typeof []); //Object : Actually Array is derived from Object. If you want to check array use Array.isArray(arr)
console.log(typeof arguments); //Object : arguments are array like but not array. it has length, can access by index but can't push pop, etc.
console.log(2 + true); //3 : The plus operator between a number and a boolean or two boolean will convert boolean to number. Hence, true converts to 1 and you get result of 2+1
console.log('6' + 2); //62
console.log(4 + 3 + 2 + "1"); //91
console.log("1" + 2 + 4); //124
console.log(-'34' + 10); //-24 :  minus(-) in front of a string is an unary operator that will convert the string to a number and will make it negative. Hence, -'34' becomes, -34 and then plus (+) will perform simple addition as both the operands are number.
console.log(+'dude'); //NaN : The plus (+) operator in front of a string is an unary operator that will try to convert the string to number. Here, JavaScript will fail to convert the "dude" to a number and will produce NaN.

var y = 1, x = y = typeof x;
console.log(x); //undefined

var a = (2, 3, 5);
console.log(a); //5 :  The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.

var x = (1, 5 - 1) * 2;
console.log(x); //8 : (5 - 1) * 2 = 8

console.log(!'bang'); //false : If you put ! in front of truthy values, it will return false. Using !! (double bang) is a tricky way to check anything truthy or falsy by avoiding implicit type conversion of == comparison.
console.log(parseFloat('12.3.4')); //12.3
console.log(Math.max([2,3,4,5])); //undefined : It expects arguements as comma separated format, correct way is Math.max.apply(null, [2,3,4,5])
console.log(3 instanceof Number); //false
console.log(null == undefined); //true
console.log(typeof null); //Object
console.log(typeof(NaN)); //"number"
console.log(2 in [1,2]); //false : Because "in" returns whether a particular property/index available in the Object. In this case object has index 0 and 1 but don't have 2. Hence you get false.
console.log(42..toString()); //"42"
console.log(typeof typeof NaN); //"string"
console.log(typeof typeof 3); //"string"
console.log(0.1 + 0.2); //0.30000000000000004 - for float, it will take 16 decimal by default
console.log(0.1 + 0.2 == 0.3); //false - above explanation
console.log(0.1 + 0.2 === 0.3) //false
console.log(Number("1234N")); //NaN - It will try to typecast the number and fail
console.log(this); //It should print : Window

var x100 = 100;
let x100 = 100;
console.log(x100 + x100); //Uncaught SyntaxError: Identifier 'x100' has already been declared

var x200 = 200;
var x200 = 300;
console.log(x200 + x200); //600

console.log(['a', 'b', 'c'] + 'd' + ['e', 'f']); //a,b,cde,f

console.log(null == undefined); //true
console.log('' == 0); //true
console.log(false == 0); //true
console.log('' == false); //true
console.log(0 === Number('')); //true


console.log(null == 0); //false
console.log(null == ''); //false
console.log(null == false); //false

console.log(undefined == 0); //false
console.log(undefined == ''); //false
console.log(undefined == false); //false

(function() {
    var a = b = 5;
 })();
 
 console.log(b); //5, scope of b is global as it is not declared with var

/*Falsy Values In JS*/
/* 
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (document.all)
*/










