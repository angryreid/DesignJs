// 利用空对象做中介

function Animal(){}

Animal.prototype.species = 'Animal';

function Cat(name,color){
    this.name = name;
    this.color = color;
}

// 1.定义一个空对象
var F = function(){};

// 2.空对象的原型对象  指向  父类对象的原型对象
F.prototype = Animal.prototype;
// console.log(F.prototype);
// console.log(Animal.prototype);

// 3.子类对象的构造函数指向 一个空对象的实例
Cat.prototype = new F();

console.log(Cat.prototype.constructor);// 果然是指向Animal的。

// 4.更正子对象的原型对象的构造函数指向本身构造函数
Cat.prototype.constructor = Cat;

var cat = new Cat('big','red');

console.log(cat.species);
console.log(Cat.prototype.constructor == Cat);
console.log(Animal.prototype.constructor == Animal);

// 封装继承函数
function extendsObj(Child,Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

