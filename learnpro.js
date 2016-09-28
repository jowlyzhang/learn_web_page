function Shape(side, height) {
    this.side = side;
    this.height = height;
}

Function.prototype.inherits = function(parent) {
    this.prototype = new parent();
    this.prototype.constructor = parent;
    var d = {}, p = this.prototype;
    this.prototype.uber = function uber(name) {
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

    }
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
