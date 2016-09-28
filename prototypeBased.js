/*inheritance ---> delegation
 * class ----> prototype
 * __class__ ----> __proto__
 * */
var genericAnimal = Object.create(null);
genericAnimal.name = 'Animal';
genericAnimal.gender = 'female';
genericAnimal.description = function() {
    return 'Gender: ' + this.gender + '; Name: ' + this.name;
};
genericAnimal.description();

var cat = Object.create(genericAnimal);
cat.purr = function() {
    return 'purr';
};
cat.purr();

var colonel = Object.create(cat);
colonel.name = 'Colonel Meow';
var puff = Object.create(cat);
puff.name = 'Puffy';

colonel.description();
puff.description();

function Person(name) {
    this.name = name;
    this.sayName = function() {
    return "Hi, I'm " + this.name;
    };
}

var adam = new Person('Adam');
/*essentially this does:
 * this = Object.create(null); // creates an empty object
 * this.prototype = Person.prototype; // sets the prototype attr of this objec to the constructor's
 * Person(this); // call constructor with 'this' new object
 * adam = this; // return the object
 * */
adam.sayName();

function Ninja(name, weapon) {
    Person.call(this, name);
    this.weapon = weapon;
}

Ninja.prototype = Object.create(Person.prototype);
Ninja.prototype.constructor = Ninja;
