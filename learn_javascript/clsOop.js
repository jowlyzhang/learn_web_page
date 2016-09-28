/* Implements class like inheritance in javascript.
 * The keyword `new` and corresponding novel way of using the constructor function
 * is specifically added to javascript to enable class-like oop in javascript.
 * The syntax for defining a constructor function is no different from defining
 * a regular function. Keyword 'new' is the key.
 * var dudu = new GoldenRetriever('dudu', 100)
 * == var dudu = GoldenRetriever('dudu', 100, this={})
 * -> create {}, assign to `this`
 * -> pass `this` to function `GoldenRetriever`
 * -> return `this'
 * -> assign `this` to `dudu`
 *
 * var dudu = GoldenRetriever('dudu', 100)
 * == var dudu = GoldenRetriever('dudu', 100)
 * -> return the return value of function `GoldenRetriever` to `dudu`.
 *
 * Note: See protooop.js for the counterpart of implementing this with
 * prototype-based ideas.*/
Function.prototype.inherits = function (parent) {
    var newPrototype = new parent();
    newPrototype.constructor = this;
    this.prototype = newPrototype;
    return this;
}

Function.prototype.updatePrototype = function (d) {
    for (name in d) {
        this.prototype[name] = d[name];
    }
    return this;
}

function Dog(name, weight) {
    this.name = name;
    this.weight = weight;
}

Dog.prototype = {
    eat: function () {
        if (this.weight > 60){
           return 'I cannot eat anyting';
        } else {
           return 'Eating peanutbutter';
        }
    },
    bark: function () {return 'WangWang'},
    sleep: function () {return 'Meow'}
}

function BigDog(name, weight) {
    this.name = name;
    this.weight = weight;
}

BigDog.inherits(Dog);
BigDog.updatePrototype({
    eat: function () {
        if (this.weight > 100) {
            return 'I cannot eat anything';
        } else {
            return 'Eating peanutbutter';
        }
    }
})

function GoldenRetriever(name, weight) {
    this.name = name;
    this.weight = weight;
    //this.numberBottle = 0;
}

GoldenRetriever.inherits(BigDog);
GoldenRetriever.updatePrototype({
    collectBottles: function (d) {
        this.bottleNumber = d;
        return 'I have collected ' + d + ' bottles';
    },
    sellBottles: function() {
        if (this.bottleNumber == undefined) {
            return 'No bottles to sell yet, sorry';
        }
        var money = 3 * this.bottleNumber;
        return 'I have sell bottles for ' + money + ' dollars';
    }
})

var dudu = new GoldenRetriever('dudu', 80);
console.log(dudu);
console.log(dudu.sellBottles());
console.log(dudu.collectBottles(3));
console.log(dudu.sellBottles());
console.log(dudu.eat());
console.log(dudu.sleep());

console.log(Object.getPrototypeOf(Dog))
console.log(Dog.prototype)
console.log(Object.getPrototypeOf(BigDog))
console.log(BigDog.prototype)
console.log(Object.getPrototypeOf(GoldenRetriever))
console.log(GoldenRetriever.prototype)
console.log(Object.getPrototypeOf(dudu))
console.log(dudu.prototype)
