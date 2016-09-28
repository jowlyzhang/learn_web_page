/*
 * Errors are easily made when mimicing a class based oop in javascript and
 * below is a common one.
 * Lessons learnt from this experiment.
 * var dudu = new Cat() would do:
 * -> create empty objet {}, assign it to `this`, pass to `Cat` constructor.
 * -> init `this` with the `Cat` constructor.
 * -> this.__proto__ = Cat.prototype.
 * -> return `this` to `dudu`.
 *
 * Note: See the graph to understand the difference.
 * In this class-oop implementaion, each object can only have one constructor function
 * with which this object would gets initialized. This class-oop implementaion enables
 * the part of inheriting code from parent class but not the initialization part. That
 * part needs to be specified anyway.
 * */
function Animal(name) {
    this.name = name;
    this.offspring = [];
}

Animal.prototype.makeBaby = function(name) {
    var baby = new Animal(name);
    this.offspring.push(baby);
    return baby;
}

function Cat() {
    // missing this line could affect the performance.
    this.offspring = [];
}

var newProto = new Animal()
// missing this line doesn't affect the performance.
newProto.constructor = Cat;
Cat.prototype = newProto;


var puff = new Cat();
console.log(puff.hasOwnProperty('offspring'));
console.log(puff.makeBaby('lili'));
console.log(puff.offspring);
var colonel = new Cat();
console.log(colonel.hasOwnProperty('offspring'));
console.log(colonel.makeBaby('dada'));
console.log(colonel.offspring);
