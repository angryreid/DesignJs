/**
 * 解释器模式：提供了评估语言的语法或表达式的方式
 */

class Context {
  constructor(){
    this.__list = []; // 存放 终结符表达式
    this.__sum = 0; // 
  }

  get sum() {
    return this.__sum;
  }

  set sum(newVale) {
    this.__sum = newVale
  }

  add(expression){
    this.__list.push(expression)
  }

  get list(){
    return [...this.__list]
  }
}

class PlusExpression {
  interpret(context) {
    if(!(context instanceof Context)){
      throw new Error('TypeError')
    }
    context.sum = ++context.sum;
  }
}

class MinusExpression {
  interpret(context) {
    if(!(context instanceof Context)){
      throw new Error('TypeError')
    }
    context.sum = --context.sum;
  }
}

// test
const context = new Context();
context.add(new PlusExpression());
context.add(new PlusExpression());
context.add(new MinusExpression());

context.list.forEach(expression => {
  expression.interpret(context);
});

console.log(context.sum);