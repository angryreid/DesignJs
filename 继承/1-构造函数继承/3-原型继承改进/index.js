//3.对第二种方法的改进
// Animal对象中，不变的属性都可以直接写入
// Animal.prototype,所以，我们让Cat（）跳过Animal（），直接继承Animal.prototype

function Animal(){

}

Animal.prototype.species = 'Animal';

// 然后将Cat的prototype对象，指向Animal的prototype对象，这样就完成了继承

function Cat(name,color){
    this.name = name;
    this.color = color;
}

// 一步完成继承
Cat.prototype = Animal.prototype;

Cat.prototype.constructor = Cat;

var cat = new Cat('big','red');

console.log(cat.species);

// 与前一种方法相比，这样做的
// 优点是：效率比较高，（不用执行和建立Animal的实例，比较省内存），
// 缺点是：Cat.prototype = Animal.prototype,都指向了同一个对象，所以对于Cat。prototype的修改，也会反映到Animal.prototype

console.log(Animal.prototype.constructor == Cat);
//true