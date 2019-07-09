//构造函数模式的问题
//存在一个浪费内存的问题
//引用console.log方法
var print = console.log;
function Cat(name,color){
    this.name = name,
    this.color = color,
    this.type = 'Cat-Animal',
    this.eat = function(){
        print('eat mouse');
    }
}

var cat1 = new Cat('big','red');
var cat2 = new Cat('small','black');

print(cat1.name +' '+cat1.color);
print(cat2.name +' '+cat2.color);

print(cat1.type);
cat1.eat();
//弊端：对于每一个实例对象，type属性以及eat方法都是一样的，每次都会重复内容，多占用一些内存，这样既不环保，也缺乏效率

