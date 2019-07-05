/**
 * 订阅-发布模式：定义了对象之间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖他的对象都得到了通知。
 * 与观察者模式对比：订阅发布模式中多了一个中间层，一个被抽离出来的信息调度中心。
 */

// 


const Event = {
  clientList: {},

  // 绑定事件监听
  listen(key, fn){
    if(!this.clientList[key]){
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
    return true;
  },

  // 触发对应事件
  trigger() {
    const key = Array.prototype.shift.apply(arguments);
    fns = this.clientList[key];

    if(!fns || fns.length === 0){
      return false;
    }

    for(let fn of fns){
      fn.apply(null, arguments)
    }
    return true;
  },

  // 移除相关事件
  remove(key, fn){
    let fns = this.clientList[key];
    if(!fns || !fn){
      return false;
    }

    // 反向遍历移除指定事件函数
    for(let l = fns.length - 1; l >= 0; l--){
      let _fn = fns[l];
      if(_fn == fn){
        fns.splice(l,1);
      }
    }
    return true;
  }
};

// 为对象动态安装 发布-订阅 功能
const installEvent = obj => {
  for (let key in Event){
    obj[key] = Event[key];
  }
}

let salesOffices = {};
installEvent(salesOffices);

// 绑定自定义事件和回掉函数
salesOffices.listen(
  'event01',
  (fn1 = price => {
    console.log('Price is ',price,'at evnet01');
  })
);

salesOffices.listen(
  'event02',
  (fn2 = price => {
    console.log('Price is ',price,'at evnet02');
  })
)

salesOffices.trigger('event01',1000);
salesOffices.trigger('event02',2000);

salesOffices.remove('event01',fn1)

console.log(salesOffices.trigger('event01'));