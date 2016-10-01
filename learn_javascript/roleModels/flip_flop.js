/*
 * An implementation of the flip flop data structure.
 * */
var FlippyFlop = function() {
    this._data = [];
};

/*
 * Returns the number of elements contained in the FlippyFlop.
 *
 * @return {Number} Number of elements in FlippyFlog.
 * */

FlippyFlop.prototype.count = function() {
    return this._data.length;
};

/*
 * Returns a random non-negative integer, at most the provided max value.
 * If the provided max value is negative, we return the number of items in
 * the Flippy Flop.
 *
 * @Return {Number} A random integer.
 * */
FlippyFlop.prototype._randomInt = function(max) {
    if (!max || max < 0) {
        max = this.count();
    }
    return Math.floor(Math.random() * (max -0 + 1)) + 0;
};

/*
 * Insert an element, succeeding at random.
 * Moreover, the element is inserted at a random position.
 *
 * @return {bool} Whether insertion succeeded.
 * */

FlippyFlop.prototype.flip = function(element) {
    var success = this._randomInt(1) > 0;
    if (success) {
        var position = this._randomInt(this.count());
        this._data.splice(position, 0, element);
    }
    return success;
};

/*
 * Retrieves a random element, returns undefined if the FlippyFlop is empty.
 * Moreover, the element is only removed randomly.
 *
 * @return {*} The element retrieved.
 * */
FlippyFlop.prototype.flop = function() {
    var ret = undefined;
    if (this.count() > 0) {
        var position = this._randomInt(this.count() - 1);
        ret = this._data[position];
        var shouldRemove = this._randomInt(1) > 0;
        if (shouldRemove) {
            this._data.splice(position, 1);
        }
    }
    return ret;
};

module.exports = FlippyFlop;
