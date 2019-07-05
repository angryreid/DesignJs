/**
 * 命令模式：是一种数据驱动的设计模式，它属于行为型模式。
 * 1. 请求以命令的形式包裹在对象中，并传给调用对象。
 * 2. 调用对象寻求可以处理该命令的合适的对象，并把该命令传给相应的对象。
 * 3. 该对象执行命令。
 * 
 * 在这三个步骤中，分别有3个主体，发送者，传递者，和执行者。
 * 应用场景：有时候需要向某些对象发送请求，但是又不知道请求的接受者是谁，更不知道被请求的操作是什么。此时，命令模式就是以一种松耦合的方式来设计程序。
 */

//  接收到命令，执行相关操作
const MenuBar = {
  refresh() {
    console.log("刷新菜单页面");
  }
}

// 命令对象，execute方法就是执行相关的命令
const RefreshMenuBarCommand = receiver => {
  return {
    execute() {
      receiver.refresh();
    }
  }
}

// 为按钮对象指定对应的对象
const setCommand = (button, command) => {
  button.onclick = () => {
    command.execute();
  }
}

let refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);
let button = document.querySelector('button');
setCommand(button, refreshMenuBarCommand)