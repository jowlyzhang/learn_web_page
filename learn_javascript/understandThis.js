/*
 * After representing all this in a graph, it's so much easier to understand
 * the `this` keyword. There are basically two cases:
 * 1. In a constructor function, `this` refers to the empty object javascript creates
 *    behind the scene, and it would be returned implicitely.
 *
 * 2. In other type of function definition. `this` will refer to whatever object that
 *    tries to access this function.
 *
 * To take advantage of `this` and define prototypes dynamically. Keep in mind what
 * the type of this caller would be when defining a function. And use it accordingly.
 * Examples are given below in each level of the definition.
 *
 * Also, this brings to attention how javascript treats attribute assess and attribute
 * assignment different:
 * 1. In attribute access: a.b, delegation chain is invoked to find property `b` of `a`
 *    Chain of:
 *    if not a.hasOwnProperty('b') -> if not a.__proto__.hasOwnProperty('b') ->
 *    if not a.__proto__.__proto__.hasOwnProperty('b') ----->
 *    Until such 'attribute' is or is not found.
 *
 * 2. In attribute assignment: a.b = 'something', it basically stores such attribute
 *    in a's local namespace. There is an example below for accessing the 'eat'
 *    attribute of 'dudu' after it's assigned a value that stops the invokation
 *    chain right after 'eat' is found locally when 'eat' is accessed again.
 *
 * Also, we can use two 'method', 'updatePrototype' to solve the repeated code problem
 * metioned in the protoOop.js file.*/

Function.prototype.method = function (name, func) {
    // Caller of this `method` function should be constructor functions.
    // so `this` should represent a constructor function.
    // Example: Pet.method
    this.prototype[name] = func;
    return this;
}

Function.prototype.updatePrototype = function (d) {
    // Caller of this `updatePrototype` function should be constructor functions.
    // so `this` should represent a constructor function. It can already access the
    // `method` function defined above.
    // Example: Pet.updatePrototype()
    for (name in d) {
        this.method(name, d[name]);
    }
    return this;
}

function Pet() {
}

Pet.updatePrototype({
    setValue: function (name, value) {
        // Caller of this function should be objects constructed with Pet.
        // so `this` should represent such objects.
        // Exmaple dudu.setValue()
        this.name = value;
    },
    eat: function() {return this.name + ' Eating peanutbutter'},
    sleep: function() {return this.name + ' Meow'},
    bark: function() {return this.name + ' Wangwang'}
})

var dudu = new Pet();
dudu.setValue('name', 'dudu');
console.log(dudu.eat());
dudu.eat = 3;
console.log(dudu.eat);
console.log(dudu.sleep());
console.log(dudu.bark());

