/**
 * 桥接模式：将抽象部分与具体实现部分分离，两者可独立变化，也可以一起工作。
 * 应用场景：在封装开源库的时候，经常会用到这种设计模式。
 * 
 */

//  模拟forEach方法
const forEach = (arr, cb) => {
  if(!Array.isArray(arr)) return;

  const length = arr.length;
  for(let i = 0; i < length; ++i){
    cb && cb(arr[i], i);
  }
}

// test
let arr = [1,2,3,4,5];
forEach(arr, (el, index) => {
  console.log(`元素是：${el}, 位于第${index}个。`);
})