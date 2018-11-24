function establishInheritance(childClass, parentClass) {
    childClass.prototype = new parentClass();
    childClass.prototype.constructor = childClass;
};

function Animal() {};
Animal.prototype.eat = function() { return 'Yum'; };

function Dog() {};
establishInheritance(Dog, Animal);
Dog.prototype.bark = function() { return 'Arf'; };

function Collie() {};
establishInheritance(Collie, Dog);

var lassie = new Collie();