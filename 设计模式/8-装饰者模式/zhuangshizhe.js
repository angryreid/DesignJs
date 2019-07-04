/**
 * 装饰者模式：在不改变对象自身的基础上，动态的添加功能代码
 * 应用场景：多用于一开始不确定的对象，或者对象功能经常变动的时候。尤其是在参数校验，参数拦截等场景。
 */


//  ES6 的装饰器语法规范只是在”提案阶段“，而且不能装饰普通的函数或箭头函数。
// 装饰器的触发可以在函数运行之前，也可以在函数运行之后
const addDecorator = (fn, before, after) => {
  let isFn = fn => typeof fn === 'function';

  if(!isFn(fn)) {
    return () => {};
  }

  return (...args) => {
    let result;
    // 按照顺序执行“装饰函数”
    isFn(before) && before(...args);
    // 保存返回函数结果
    isFn(fn) && (result = fn(...args));
    isFn(after) && after(...args);
    // 最后返回结果
    return result;
  }
}

// test
const beforeHi = (...args) => {
  console.log(`Before hello, args are ${args}`);
}

const hello = (name = 'user') => {
  console.log(`hello ${name}`);
  return name;
}

const afterHi = (...args) => {
  console.log(`After hello, args are ${args}`);
}

console.log(addDecorator(hello,beforeHi,afterHi)());