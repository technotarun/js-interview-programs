

let fiboSeries = function(num) {
let fibArray = [0, 1];

for(let i=2; i<num; i++){

  	fibArray[i] = fibArray[i - 1]  + fibArray[i - 2];
    fibArray.push(fibArray[i]);
  
  }
  return fibArray;
}

console.log(fiboSeries(50));