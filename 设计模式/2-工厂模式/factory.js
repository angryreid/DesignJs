/**
 * 定义：工厂模式的实质“定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类。工厂方法让类的实例话推迟到子类中进行”，简单来说，就是把new 对象的操作包裹一层，对外提供一个可以根据不同参数创建不同对象的函数。
 * 优点：可以隐藏原始类，方便之后的代码迁移。调用者只需要记住类的代名词即可
 * 缺点：由于多了层封装，会造成类的数目过多，系统复杂度增加。
 */

class Dog {
  run() {
    console.log("dog");
  }
}

class Cat {
  run() {
    console.log("cat");
  }
}

class Animal {
  constructor(name) {
    name = name.toLocalLowerCase();
    switch (name) {
      case "dog":
        return new Dog();
      case "cat":
        return new Cat();
      default:
        throw TypeError("class name wrong");
    }
  }
}

const cat = new Animal("cat");
const dog = new Animal("dog");
cat.run();
dog.run();
