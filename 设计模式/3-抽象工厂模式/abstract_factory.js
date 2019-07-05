/**
 * 定义：抽象工厂模式就是，围绕一个超级工厂类，创建其他工厂类；在围绕工厂类，创建实体类
 * 相比较于传统的工厂模式，它多出了一个超级工厂类
 */

 // 动物实体类
 class Dog{
   run(){
     console.log('dog is running');
   }
 }

 class Cat{
   run(){
     console.log('cat is running');
   }
 }

// 人类实体类
class Male{
  run(){
    console.log('male is talking');
  }
}

class Female{
  run(){
    console.log('female is talking');
  }
}


/*********************/
// 工厂类
// 为了更好的约束工厂类，先实现一个接口类
class AbstractFactory{
  getPerson(){
    throw new Error('子类请实现接口')
  }

  getAnimal(){
    throw new Error('子类请实现接口')
  }
}

// 接下来，Animal 和 Person 继承这个接口类
class PersonFactory extends AbstractFactory{
  getPerson(person){
    person = person.toLocaleLowerCase();
    switch(person){
      case 'male':
        return new Male()
      case 'female':
        return new Female();
      default:
        break;
    }
  }

  getAnimal(){
    return null;
  }
}

class AnimalFactory extends AbstractFactory{
  getPerson(){
    return null;
  }

  getAnimal(animal){
    animal = animal.toLocaleLowerCase();
    switch(animal){
      case 'cat':
        return new Cat();
      case 'dog':
        return new Dog();
      default:
        break;
    }
  }
}

/**
 * 实现超级工厂
 */
class Factory{
  constructor(choice){
    switch(choice){
      case 'person':
        return new PersonFactory();
      case 'animal':
        return new AnimalFactory();
      default:
        break;
    }
  }
}

/**
 * 测试代码
 */

 const pf = new Factory('person');
 const male = pf.getPerson('male');
 const female = pf.getPerson('female');
 male.run();
 female.run();

 const af = new Factory('animal');
 const cat = af.getAnimal('cat');
 const dog = af.getAnimal('dog');
 cat.run();
 dog.run();