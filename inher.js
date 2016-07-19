/*This file explains how to achieve class-based type of oop in javascript.
 * code sharing is pretty much achieved except that the constructor part. The constructor
 * part is what allocates values for each object. We may want it to be customized for each
 * constructor. And later process of adding, deleting, changing attribute values can be
 * added to the prototype functions.*/

Function.prototype.updatePrototype = function (d) {
    for (name in d) {
        this.prototype[name] = d[name];
    }
    return this;
}
Function.prototype.inherits = function (parent) {
    var copyOfParent = new parent();
    copyOfParent.constructor = this;
    this.prototype = copyOfParent;
    return this;
}

function Dog(name, weight) {
    this.name = name;
    this.weight = weight;
}

Dog.prototype = {
    constructor: Dog,
    bark: function () {
        return 'wangwang';
    },
    sleep: function () {
        return 'meow';
    },
    eat: function () {
        if (this.weight < 30) {
            return 'cheese';
        } else {
            return '';
        }
    }
}

function BigDog(name, weight){
    this.name = name;
    this.weight = weight;
}
BigDog.inherits(Dog);
BigDog.updatePrototype({
    bark: function (){
        return 'wuuuuuu~';
    },
    eat: function() {
        if (this.weight > 60) {
            return 'cheese';
        } else {
            return '';
        }
    }
})

function GoldenRetriever(name, weight){
    this.name = name;
    this.weight = weight;
}

GoldenRetriever.inherits(BigDog);
GoldenRetriever.updatePrototype({
    eat: function () {
        return 'bone';
    },
    collectBottles: function (numberOfBottles) {
        this.numberOfBottles = numberOfBottles;
        return 'I have collected' + String(numberOfBottles) + ' basket of bottles';
    },
    sellBottles: function () {
        if (this.numberOfBottles) {
            return 3 * this.numberOfBottles;
        } else {
            return 0;
        }
    }
})
