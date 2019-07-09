// 解决内存占用问题
// 让实例对象重复的部分变为一个地址，让重复的属性指向那个对象

// prototype模式

// 在js中，每一个构造函数都有一个prototype属性，指向另一个对象（原型对象），这个队形的所有属性和方法，都会被构造函数的实例继承

// 这就意味着，我们把那些不变的属性和方法，直接定义在prototype对象上面

function Cat(name,color){
  this.name = name,
  this.color= color
}

var print = console.log;

Cat.prototype.type = 'Cat-Animal';
Cat.prototype.eat = function(){
  print('eat mouse');
}

var cat1 = new Cat('big','red');
var cat2 = new Cat('small','blue');

print(cat1.name+' '+cat1.color);
cat1.eat();

print(cat1.eat == cat2.eat);//指向了同一个地址
