
let obj1 = {name: 'Rick', age: 2};
let obj2 = {name: 'Rick', age: 2};
let obj3 = {name: 'Rick', age: 3};
let obj4 = {name: 'Rick', age: 2, gender: 'M'};
let obj5 = {age: 2, name: 'Rick'};



let compareUsingStringify = (o1, o2) => {
    return JSON.stringify(o1) === JSON.stringify(o2);
}

console.log(compareUsingStringify(obj1, obj2));
console.log(compareUsingStringify(obj1, obj3));
console.log(compareUsingStringify(obj1, obj4));
console.log(compareUsingStringify(obj1, obj5));

console.log("*********************************************");



let flatObjectCompareWithProperty = (o1, o2) => {
    let o1Props = Object.getOwnPropertyNames(o1);
    let o2Props = Object.getOwnPropertyNames(o2);
    
    if(o1Props.length != o2Props.length) {
        return false;
    }

    for(let i in o1Props) {
        let propName = o1Props[i];

        if(o1[propName] !== o2[propName]) {
            return false;
        }
    }

    return true;
}

console.log(flatObjectCompareWithProperty(obj1, obj2));
console.log(flatObjectCompareWithProperty(obj1, obj3));
console.log(flatObjectCompareWithProperty(obj1, obj4));
console.log(flatObjectCompareWithProperty(obj1, obj5));
