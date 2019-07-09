// 1.构造函数绑定
// 最简单的方法，使用call或者apply方法，将父级对象的构造函数绑定在子对象上面

function Animal(){
	// this.me = 'dx';
	//设置为var 的时候，定义为私有变量，不得继承
    this.species = 'Animal';
    this.me = 'YY';
}

function Cat(name,color){
	console.log(arguments[1]);
    Animal.apply(this,arguments);
    this.name = name;
    this.color = color;
}

var cat = new Cat('big','red');
console.log(cat.name);
console.log(cat.species);
console.log(cat.me);