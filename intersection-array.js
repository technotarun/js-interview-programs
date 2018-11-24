function intersect(a, b) {
    let arr = a.filter(value => b.indexOf(value) !== -1);
    return removeDuplicates(arr);
}

function removeDuplicates(arr) {
    let uniqArr = [];

    arr.forEach(item => {
        if(uniqArr.indexOf(item) === -1) {
            uniqArr.push(item);
        }
    });

    return uniqArr;
}

console.log(intersect([1,2,3,4], [4,1,5])); //1,4