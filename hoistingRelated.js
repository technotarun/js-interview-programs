var a = 10;

var foo = function() {
    a = 20;
    console.log(a);
};

a = 30;

foo(); //20






var a = 10;

var foo = function() {
  console.log(a);
  a = 20;
};

a = 30;

foo(); //30

