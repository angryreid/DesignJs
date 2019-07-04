/**
 * 备忘录模式：属于行为模式，保存某个状态，并且在需要的时候就直接获取，而不是重复计算
 * 注意：备忘录模式实现，不能破坏原始封装，也就是说，能拿到内部状态，将其保存在外部。
 * 应用场景：数据缓存呢
 */

 const fetchData = (() => {
  //  备忘录/缓存
  const cache = {};
   return page => 
    new Promise(resolve => {
      // 如果页面数据已经被缓存，直接推出
      if(page in cache){
        return resolve(cache[page])
      }

      // 否则，异步请求页面数据
      // 模拟异步数据
      setTimeout(() => {
        cache[page] = `内容是${page}`;
        resolve(cache[page])
      }, 1000);
    })
 })();

//  test
const run = async () => {
  let start = new Date().getTime(),
    now;
    // 第一次；没有缓存
    await fetchData(1).then(res => {
      console.log('res:' + res);
    });
    now = new Date().getTime();
    console.log(`没有缓存，耗时${now - start}ms`);

    // 第二次：有缓存，有备忘录
    start = now;
    await fetchData(1).then(res => {
      console.log('res:' + res);
    });
    now = new Date().getTime();
    console.log(`有缓存，耗时${now - start}ms`);
}

run();