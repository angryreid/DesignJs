/**
 * 迭代器模式：提供一种方法顺序访问一个集合对象的各个元素，使用者不需要了解集合对象的底层实现。
 * 内部迭代器：封装的方法完全接手迭代过程，外部只需要一次调用。
 * 外部迭代器：用户必须显式请求迭代下一代元素。
 */

//  实现一个外部迭代器。
const Iterator = obj => {
  let current = 0;
  let next = () => (current += 1);
  let end = () => current >= obj.length;
  let get = () => obj[current];

  return {next,end,get};
}

let myIter = Iterator(['hello','java','script']);

while(!myIter.end()){
  console.log(myIter.get());
  myIter.next();
}