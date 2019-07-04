/**
 * 状态模式：对象的行为是基于状态来改变的。
 * 内部的状态转化，导致了行为表现形式不同。所以，用户在外面看来，好像是修改了行为。
 * 优点：封装了转化规则，对于大量分支语句来说，可以考虑使用状态类进一步封装。每个状态都是确定的，所以对象行为是可控的。
 * 缺点：状态模式的关键是将事物的状态都封装成为单独的类，这个类的各种方法就是“此种状态对应的表现行为”。因此，状态类会增加程序开销。
 * 
 */

//  FSM 有限状态机
const FSM = (()=>{
  let current_state = "download";
  return {
    download: {
      click: () => {
        console.log('暂停下载');
        current_state = 'pause';
      },
      del: () => {
        console.log('先暂停，再删除');
      },
    },
    pause: {
      click: () => {
        console.log('继续下载');
        current_state = 'download';
      },
      del: () => {
        console.log('删除任务');
        current_state = 'deleted'
      }
    },
    deleted: {
      click: () => {
        console.log('任务已删除，请重新开始');
      },
      del: () => {
        console.log('任务已删除');
      }
    },
    getState: () => current_state
  }
})();

class Download {
  constructor(fsm){
    this.fsm = fsm;
  }

  handleClick() {
    const { fsm } = this;
    fsm[fsm.getState()].click();
  }

  handleDel(){
    const {fsm} = this;
    fsm[fsm.getState()].del();
  }
}

// 开始下载
let download = new Download(FSM);

download.handleClick(); // 暂停下载
download.handleClick(); // 继续下载
download.handleDel(); // 下载中，无法删除
download.handleClick(); // 暂停下载
download.handleDel(); // 删除任务
download.handleClick(); // 任务已删除，请重新开始
download.handleDel();