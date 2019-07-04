/**
 * 模板模式：抽象父类定义了子类需要重写的相关方法，而这些方法，仍然是通过父类方法调用的。
 * 注意：父类定义接口方法，子类方法的调用受父类控制。
 * 应用场景：
 */

class Animal {
  constructor() {
    //  this 指向实例
    this.live = () => {
      this.eat();
      this.sleep();
    };
  }
  eat(){
    throw new Error('模板类方法必须被重写');
  }

  sleep() {
    throw new Error("模板类方法必须被重写");
  }
}


class Dog extends Animal{
  constructor(...args){
    super(...args)
  }

  eat(){
    console.log('dog eats food');
  }

  sleep(){
    console.log('dog sleeped');
  }
}

class Cat extends Animal{
  constructor(...args){
    super(...args)
  }

  eat(){
    console.log('cat eats fish');
  }

  sleep(){
    console.log('cat sleeped');
  }
}

// test
let dog = new Dog();
dog.live();

let cat = new Cat();
cat.live();