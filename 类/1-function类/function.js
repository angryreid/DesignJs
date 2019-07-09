// js是一种基于对象的语言，你遇到的所有东西几乎都是对象。但是语法中没有class。
// 构造函数对戏对象
function Cat(name,color){
  this.name = name,
  this.color=color
}

var print = console.log;

// 关键字new，实例化类对象
var cat1 = new Cat('big','red');
var cat2 = new Cat('small','blue');

console.log(cat1.name +' '+cat1.color);
console.log(cat2.name +' '+cat2.color);

// 这时候cat实例对象会自动含有一个constructor属性，指向他们的构造函数
console.log('constuctor');
console.log(cat1.constructor == Cat);//true
console.log(cat2.constructor == Cat);//true


// js中的instanceof运算符，验证原型对象与实例对象之间的关系
console.log('instanceof');
console.log(cat1 instanceof Cat);//true
console.log(cat2 instanceof Cat);//true
