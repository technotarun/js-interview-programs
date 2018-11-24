let nestedArray = [[1, 2], [3, 4], [5, 6]];

let flattenArray = function(nestedArray) {
	let flattenArr = [];
  
	nestedArray.forEach(function(item) {
  	flattenArr.push(...item);
  });
  
  return flattenArr;
};

console.log(flattenArray(nestedArray));