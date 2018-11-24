var obj = {
	name: 'add',
  a: 4,
  b: 6,
  calc: function() {
            var vm = this;
            function inner() {
                vm.a = 14;
        }
        inner();
        return vm.a + vm.b;
  }
};

console.log(obj.calc()); //20



var obj = {
name: 'add',
  a: 4,
  b: 6,
  calc: function() {
            function inner() {
                this.a = 14;
            console.log(this.a); //14
            }
    inner();
  	return this.a + this.b; //10
  }
};


console.log(obj.calc());