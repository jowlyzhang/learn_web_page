/*This is a very interesting experiment to help understand the objects defintion scope, and the
 * mechanism for helping finding corresponding objects. Along the process. you should be able
 * to be more familiar with the 'this' keyword and javascript objects syntax*/
var a = 3; //variable in the global scope (window)
write(this.constructor.name);

function prototypeOne() {
    write(this.constructor.name);
    this.a = 2; //variable in the level one object scope
    this.prototypeTwo = function prototypeTwo() {
        write(this.constructor.name);
        this.a = 1; // variable in the level two object scope
    }
}

function myFunction() {
    var a = 0;
    this.firstName = 'Yu';
    this.lastName = 'Zhang';
    write(this.constructor.name);
    return a;
}

// In the above code, we defined three layers of variables that have the same name. Below
// will show how to respectively access them

write(a); //Access without specifiying its owner 
write('\n');

this.a; // Access with this as its owner

window.a; //Access with window as its owner

write(new prototypeOne().a); //Access with a new 'prototypeOne' object
write('\n');

write(new (new prototypeOne().prototypeTwo)().a);
write('\n'); 

write(myFunction().a); // would failed

/* To search for an object:
 * When user specifiies an object/variable name, javascirpt would need a comprehensive logic
 * that could find the right thing the user want and also enforce a communication protocol (syntax)
 * of accepable complexity ( not too complicated ). So it starts by searching from the highest
 * level namespace scope that has been specified and goes up if still cannot find any,
 * if no namespace is not specified
 * explicitely, the current namespace will be used, which for the whole script is the window
 * object, for a function definition, is the function itself.
 * What 'this' is referring to:
 *
 * How namespace is constructed, what is contained in a namespaces:
 *     1. In the global namespace, look like simple as a primitive variable is hold in the
 *     namespace.
 *     2. In a function object definition, only properties is kept in that object's namespace,
 *     local variables are created and deleted within that scope.
 * */

write(new myFunction()); // Calling constructor to work on top on myFunction, it will create a prototype
                         // object and 'this' will be this object. it won't execute the return
                         // statement.

write(myFunction()); // Calling function myFunction with no specified namespace, this will be window
                     // it will be used as a function call, return a

/*This would be why using the same keyword 'function', how javascipt is able to differtiate between
 * prototypes and functions. Assuming definition myFunction,
 * ----do new myFunction(), javascipt would:
 * treat it as a constructor (it's like the python __init__ method) where backgroud would allocate
 * space for a new object and give it to the constructor as 'this', and user would do its specific
 * decorating (assigning properties to these objects). This constructor would return 'this'
 * implicitely. So return other values at the end of prototype definition would be ignored but
 * hacking with 'this' would affect what is returned. Or return it explicitely in the middle of
 * definition would make it lose later properties.
 * ----do myFunction(), javascript would:
 * no new objects created, treat it as a function call, execute the statements within that
 * function block until it hit an explicit return statement or hit the end of the function
 * definition. Pay attention in this case of what mistakes would be made if 'this' is errorneously
 * used.*/


//javascipt closures

var add = (function() {
    var count = 0;
    return function() {return count += 1;};
})(); // this self invoking function only runs once and return a function that has access to count.

add();
add();
add();
