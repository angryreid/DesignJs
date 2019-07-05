/**
 * 定义： 保证一个类仅有一个实例，并提供访问此实例的全局访问点。
 * 用途：如果一个类负责连接数据库的线程池，日志记录逻辑等等，此时需要单例模式来保证对象不被重复创建，以达到降低开销的目的。
 */

const Singleton = function() {};
Singleton.getInstance = (function() {
  // 由于es6没有静态类型，使用闭包；函数外部无法访问 instacne
  let instance = null;
  return function() {
    if (!instance) {
      instance = new Singleton();
    }
    return instance;
  };
})();

let s1 = Singleton.getInstance();
let s2 = Singleton.getInstance();

console.log(s1 === s2);
