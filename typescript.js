var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
console.log(answer);
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, I'm only ".concat(age);
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// Any - !!!!!!!!!!!!! BE CAREFUL
var whatever = 'aghhhhhhhh noooooo!!!';
whatever = basket;
// void
var sing = function () {
    console.log('lalalalala');
};
// never
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var dog = {};
dog.count;
// Function
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('RAAAWWWR');
lion.sing;
// Union
var confused = 'hello';
