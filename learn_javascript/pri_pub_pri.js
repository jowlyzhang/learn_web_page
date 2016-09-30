/*This is about the private, public, priviledged functions in javascript*/
Function.prototype.updatePrototype = function (d) {
   for (name in d) {
       this.prototype[name] = d[name];
   }
   return this;
}

var Dog = (function () {
    var dogCount = 0;
    function Dog(name) {
        console.log('Hello '+ name + ', welcome to the world');
        this.weight = 10;
        this.name = name;
        this.age = 0;
        this.offspring = [];
        dogCount += 1;
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
    }
    // Static method
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
var dada = dudu.haveBaby('dada');
dada.eat();
var didi = dudu.haveBaby('didi');
didi.eat();
var dangdang = dudu.haveBaby('dangdang');
dangdang.eat();
dudu.kids();
dada.kids();
didi.kids();
dangdang.kids();
console.log('There are ' + Dog.count() + ' doggies in the family now');
