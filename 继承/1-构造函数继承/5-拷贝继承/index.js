// 5.拷贝继承
// 把父对象的所有的属性和方法，拷贝进入子对象中
function Animal(){};
Animal.prototype.species = 'Animal';

function Cat(name,color){
    this.name = name;
    this.color = color;
}

//编写拷贝函数
function copy(Child,Parent){
    var p = Parent.prototype;
    var c = Child.prototype;

    for(var i in p){
        c[i] = p[i];
    }

    c.uber = p;
}

copy(Cat,Animal);

var cat = new Cat('big','red');
console.log(cat.species);

for( var prop in cat){
    console.log('cat['+prop+']:'+cat[prop]);
}

