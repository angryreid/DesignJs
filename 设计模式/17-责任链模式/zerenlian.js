/**
 * 责任链模式：多个对象均有机会处理请求，从而解除发送者和接受者之间的耦合关系，这些对象连接成为链式结构，每个节点转发请求，知道有对西那个处理为止。
 * 核心：请求者不必知道是谁的哪个节点处理的请求。如果当前不符合终止条件，那么就把请求转发给下一个节点处理。
 * 优点：可以根据需求变动，任意向责任链中添加，删除节点对象。
 * 没有固定的“开始节点”，可以从任意节点开始。
 * 代价：责任链对大的代价就是每个节点带来的多余消耗。当责任链过长，很多节点只有传递作用，而不是真正的处理逻辑。
 */

 class Handler {
   constructor(){
     this.next = null;
   }

   setNext(handler){
     this.next = handler;
     return this;
   }
 }

 class LogHandler extends Handler {
   constructor(...props){
     super(...props);
     this.name = 'log'
   }

   handler(level, msg){
     if(level === this.name){
       console.log(`Log: ${msg}`); 
       return;
     }
     this.next && this.next.handler(...arguments)
   }
 }

 class WarnHandler extends Handler{
   constructor(...props){
     super(...props);
     this.name = 'warn'
   }

   handler(level, msg){
    if(level === this.name){
      console.log(`Warn: ${msg}`); 
      return;
    }
    this.next && this.next.handler(...arguments)
  }
 }

 class ErrorHandler extends Handler{
   constructor(...props){
     super(...props);
     this.name = 'error'
   }

   handler(level, msg){
    if(level === this.name){
      console.log(`Error: ${msg}`); 
      return;
    }
    this.next && this.next.handler(...arguments)
  }
 }

//  test

let logHandler = new LogHandler();
let warnHandler = new WarnHandler();
let errorHandler = new ErrorHandler();

// 设置链
logHandler.setNext(
  warnHandler.setNext(
    errorHandler
  )
);

logHandler.handler('warn','some error occur')