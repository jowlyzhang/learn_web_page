/*
 * Douglas Crockford worked out below sugar methods to help implement class
 * inheritance in javascript. These are very good coding exmaples to learn from. There
 * are even multiple flavors of class inheritance implementation. Below would list out
 * the sugar functions first. And after that, there will be exmaple codes to implement
 * these different class inheritance flavours.
 * */
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

/* The uber method looks for the named method in its own prototype. This is the function
 * to invoke in case of Parasitic inheritance or object augmentation. When doing classical
 * inheritance, we need to find the function in the parent's prototype. The return statement
 * uses the function's apply method to invoke the function , explicitly setting this and passing
 * an array of parameters. The parameters(if any) are obtained from the arguments array.
 * Unfortunately, the arguments array is not a true array, so we have to use apply again to
 * invoke the array slice method.
 * */
Function.methed('inherits', function (parent) {
    this.prototype = new parent();
    var d = {},
        p = this.prototype;
    this.prototype.constructor = parent;
    this.method('uber', function uber(name) {
        if (!(name in d)) {
            d[name] = 0; //name is not a default Object.prototype function
                         // add the same name to the namespace of the most basic Object.prototype
                         // namespace.
        }
        var f, r, t = d[name], v = parent.prototype;
        if (t) {
            // if t is not zero, is an object
            while (t) {
                v = v.constructor.prototype; // find the prototype of its parent;
                t -= 1;
            }
            f = v[name]; // util find the first one
        } else {
            f = p[name];
            if (f == this[name]) {
                f = v[name];
            }
        }
        d[name] += 1;
        r = f.apply(this, Array.prototype.slice.apply(arguments, [1]));
        d[name] -= 1;
        return r;
    });
    return this;
});

/* The swiss method loops through the arguments. For each name, it copies a member from the
 * parent's prototype to the new class's prototype.
 * */
Function.method('swiss', function (parent) {
    for (var i = 1; i < arguments.length; i += 1) {
        var name = arguments[i];
        this.prototype[name] = parent.prototype[name];
    }
    return this;
});

function Shape(side, height) {
    this.side = side;
    this.height = height;
}

function Triangle() {};
function Square() {};

Triangle.inherits(Shape);
Square.inherits(Shape);

Triangle.prototype = new Shape();
Triangle.prototype.area = function() {
    return (this.side * this.height) / 2;
}

Square.prototype = new Shape();
Square.prototype.area = function() {
    return this.side * this.height;
}
