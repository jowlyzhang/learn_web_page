/*
 * Closure is a pretty new idea to me. I saw this pattern in the Dog. I'll
 * do an experiment here to understand its gist.
 * The first implementation compared to the second implementation has added extra
 * access to the scope marked as 'Extra scope'. That extra scope is what most of
 * the function closures in javascript are aimed at.
 * */
var Dog = (function() {
    /* Extra scope*/
    // constructor
    var count = 0;
    function Dog(name, weight) {
        count += 1;
        this.name = name;
        this.weight = weight;
    };
    // static method
    // In the namespace of constructor function, only accessed from there.
    Dog.count = function () {
        return count;
    }
    // The underscore library offers a very straightforward and simple way
    // to add private, public methods.
    });
    return Dog;
})();


/* Compared to below
* Purely the constructor
* function Dog () {
* }*/

var dudu = new Dog('dudu', 30);
var dada = new Dog('dada', 20);
console.log(Dog.count());
