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

//Prototype模式的验证方法
//1.isPrototypeOf()
//这个方法用来判断，某个prototype对象和某个实例之间的关系，某个原型对象和实例之间的关系
print('isPrototypeOf');
print(Cat.prototype.isPrototypeOf(cat1));//true
print(Cat.prototype.isPrototypeOf(cat2));//true

//2.hasOwnProperty()
//每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承与prototype对象的属性

print('===============');
print('hasOwnProperty');
print(cat1.hasOwnProperty('name'));
print(cat1.hasOwnProperty('type'));
print(cat1.hasOwnProperty('eat'));

// 3.in运算符
// in运算符用来判断，某个实例是否含有某一个属性，不管是不是自身属性，还是继承的属性
print('==============');
print('in');
print('name' in cat1);
print('type' in cat1);

// in运算符还可以用来遍历某一个对象所有的属性
for(var prop in cat1){
  print('cat1['+prop+']='+cat1[prop]);
}