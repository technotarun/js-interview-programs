String.prototype.repeatify = String.prototype.repeatify || function(times) {
	let str = '';
  
  for(let i=0; i<times; i++) {
  	str += this;
  }
	
  return str;
}

let input = "boom";
console.log(input.repeatify(3));