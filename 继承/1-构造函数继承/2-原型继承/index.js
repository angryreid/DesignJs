// 2.prototype模式
// 如果猫的prototype对象指向了一个Animal的实例,那么所有的猫的实例就能继承自Animal
function Animal(){
  this.species = 'Animal';
}

function Cat(name,color){
  this.name = name;
  this.color = color;
}
// console.log(Cat.prototype) //指向Cat
// 相当于完全删除了prototype对象的原先的值，
Cat.prototype = new Animal();

console.log(Cat.prototype.constructor);//Animal

//任何一个prototype对象都有一个constructor属性，指向他的构造函数。 
Cat.prototype.constructor = Cat;

//已经纠正
console.log(Cat.prototype.constructor == Animal);

var cat = new Cat('big','red');
// 更重要的是，每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性
// 更重要的是，每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性
// 更重要的是，每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性

console.log(cat.constructor == Cat.prototype.constructor);
console.log(cat.name+' '+cat.species);