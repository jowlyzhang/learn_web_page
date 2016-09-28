function Animal() {
    this.offspring = [];
}

Animal.prototype.makeBaby = function() {
    var baby = new Animal();
    this.offspring.push(baby);
    return baby;
};

function Cat() {
    this.offspring = [];
}

Cat.prototype = new Animal();
