// 利用空对象做中介

function Animal(){}

Animal.prototype.species = 'Animal';

function Cat(name,color){
    this.name = name;
    this.color = color;
}

// 封装继承函数
function extend(Child,Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    // 备用性质
    Child.uber = Parent.prototype;
    // 等于在子对象上打开一条通道，可以直接调用父对象的方法，这一行放在这里，只是为了实现继承的完整性
}

extend(Cat,Animal);

var cat = new Cat('big','red');

console.log(cat.species);
console.log(Cat.prototype.constructor == Cat);
console.log(Animal.prototype.constructor == Animal);


