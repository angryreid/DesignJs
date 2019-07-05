/**
 * 策略模式：能够把一系列“可互换的”算法封装起来，并根据用户需求来选择其中一种。
 * 策略模式实现的核心就是将算法的使用和算法的实现分离。
 * 算法的实现交给策略类。
 * 算法的使用交给环境类，环境类会根据不同的情况选择合适的算法。
 * 在使用的时候，需要了解所有的策略之间的异同点，才能选择合适的策略进行调用。
 * 
 */

//  策略类
const strategies = {
  A(){
    console.log('This is strategy A');
  },
  B(){
    console.log('This is strategy B');
  }
}

// 环境类
const context = name => {
  return strategies[name]();
}

// test
// 调用策略A，B
context('A');
context('B');