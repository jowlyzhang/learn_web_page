/*This is a very interesting experiment to help understand the objects defintion scope, and the
 * mechanism for helping finding corresponding objects. Along the process. you should be able
 * to be more familiar with the 'this' keyword and javascript objects syntax*/

var a = 3; //variable in the global scope (window)

function prototypeOne() {
    this.a = 2; //variable in the level one object scope
    this.prototypeTwo = function prototypeTwo() {
        this.a = 1; // variable in the level two object scope
    }
}

// In the above code, we defined three layers of variables that have the same name. Below
// will show how to respectively access them.

a; //Access without specifiying its owner

this.a; // Access with this as its owner

window.a; //Access with window as its owner

new prototypeOne().a; //Access with a new 'prototypeOne' object

new (new prototypeOne().prototypeTwo)().a; //Access with a new 'prototypeTwo' object


/*When user specifiies an object/variable name, javascirpt would need a comprehensive logic
 * that could find the right thing the user want and also enforce a communication protocol (syntax)
 * of accepable complexity ( not too complicated ). So it starts by searching from the highest
 * level namespace scope that has been specified and goes down, if no namespace is not specified
 * explicitely, the current global object namespace will be used, which usually is the window object
 * */
