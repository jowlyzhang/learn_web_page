/*
 * A prototype approach to achieve the same thing in clsoop.js. There
 * is a graph representation for this. It is noticable that there is some
 * unwanted repeated code which could be easily solved with a library. 
 */
var genericDog = Object.create(null);
genericDog.name = null;
genericDog.weight = null;
genericDog.eat = function () {
    if (this.weight > 60) {
        return 'I cannot eat anything';
    } else {
        return 'Eating peanutbutter';
    }
};
genericDog.bark = function () {
    return 'WangWang';
};
genericDog.sleep = function () {
    return 'Meow';
};

var genericBigDog = Object.create(genericDog);
genericBigDog.eat = function () {
    if (this.weight > 100) {
        return 'I cannot eat anything';
    } else {
        return 'Eating peanutbutter';
    }
};

var genericGoldenRetriever = Object.create(genericBigDog);
genericGoldenRetriever.bottleNumber = null;
genericGoldenRetriever.collectBottles = function (d) {
    this.bottleNumber = d;
    return 'I have collected ' + d + ' bottles';
};
genericGoldenRetriever.sellBottles = function () {
    if (this.bottleNumber == null) {
        return 'No bottles to sell yet, sorry';
    } else {
        var money = 3 * this.bottleNumber;
        return 'I have sell bottles for ' + money + ' dollars';
    }
};

var dudu = Object.create(genericGoldenRetriever);
dudu.name = 'dudu';
dudu.weight = 80;

console.log(dudu);
console.log(dudu.sellBottles());
console.log(dudu.collectBottles(3));
console.log(dudu.sellBottles());
console.log(dudu.eat());
console.log(dudu.sleep());

console.log(Object.getPrototypeOf(genericDog));
console.log(genericDog.prototype);
console.log(Object.getPrototypeOf(genericBigDog));
console.log(genericBigDog.prototype);
console.log(Object.getPrototypeOf(genericGoldenRetriever));
console.log(genericGoldenRetriever.prototype);
console.log(Object.getPrototypeOf(dudu));
console.log(dudu.prototype);


