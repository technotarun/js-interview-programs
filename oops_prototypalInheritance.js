let animal = {
	eats: true,
  walk(){
  	console.log("I am walking");
  }
};


let rabbit = {
	jumps: true,
  __proto__: animal
};

//In the example below, we assign its own walk method to rabbit:

rabbit.walk = function() {
  console.log("Rabbit! Bounce-bounce!");
}

let longEar = {
	earLength: 10,
  __proto__: rabbit
}

rabbit.walk();
console.log(rabbit.eats);
longEar.walk();
console.log(longEar.jumps);
