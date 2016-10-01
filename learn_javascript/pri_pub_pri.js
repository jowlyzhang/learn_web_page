/* This is about the private, public, priviledged functions in javascript
 *
 * */
Function.prototype.updatePrototype = function (d) {
   for (name in d) {
       this.prototype[name] = d[name];
   }
   return this;
}

var Dog = (function () {
        // Defined a variable outside the scope of constructor function
        // to count the number of instances initiated for this constructor.
    var dogCount = 0;
    function Dog(name) {
        console.log('Hello '+ name + ', welcome to the world');
        // Variables defined in the namespace of `this` will be in the namespace of
        // each individual objects. Either it's in constructor or other instance methods.
        this.weight = 10;
        this.name = name;
        this.age = 0;
        this.offspring = [];
        dogCount += 1;
        // It's a convention to assign `this` to `that` for using in private functions.
        // Private functions needs to be defined when constructor function is defined so
        // that the outer scope for private function is there and the great power of closure
        // can be used.
        var that = this;
        // Private method
        function _eat() {
            if (that.weight < 30 && dogCount < 3){
                console.log(that.name + ' weight ' + that.weight + ' dogCount ' + dogCount)
                return 'milk';
            } else if (that.weight < 30 && dogCount >= 3){
                console.log(that.name + ' weight ' + that.weight + ' dogCount ' + dogCount)
                return 'soy milk';
            } else {
                console.log(that.name + ' weight ' + that.weight + ' dogCount ' + dogCount)
                return 'dog food';
            }
        }
        // Privileged method
        // Interface for private method
        this.eat = function () {
            console.log(this.name + ' eat ' + _eat());
        }
        this.poop = function () {
            if (that.age < 1) {
                console.log(this. 'Not potty trained puppy';
            } else {
                return 'Big boy/girl poop';
            }
        }
    }
    // Static method, cannot be called by individual objects of this constructor.
    // Only callable as constructor member method.
    Dog.count = function () {
        return dogCount;
    }
    // Instance method
    Dog.updatePrototype({
        growUp: function (year) {
             this.age += year;
             this.weight += 10 * year;
        },
        haveBaby: function (name) {
            console.log(this.name + ' give birth to puppy ' + name);
            var puppy = new Dog(name);
            this.offspring.push(puppy);
            return puppy;
        },
        kids: function() {
            console.log(this.name + ' has ' + this.offspring.length + ' offspring');
            for (i in this.offspring) {
                console.log(this.offspring[i].name);
            }
        },
    });

    return Dog;
})();


var dudu = new Dog('dudu');
dudu.growUp(4);
dudu.eat();
dudu.poop();
var dada = dudu.haveBaby('dada');
dada.eat();
dada.poop();
var didi = dudu.haveBaby('didi');
didi.eat();
var dangdang = dudu.haveBaby('dangdang');
dangdang.eat();
dudu.kids();
dada.kids();
didi.kids();
dangdang.kids();
console.log('There are ' + Dog.count() + ' doggies in the family now');
