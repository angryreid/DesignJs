//1.非构造函数的继承

var Chinese = {
  nation:'中国'
}

function inhrit(obj){
  function F(){}
  F.prototype = obj;//非构造函数没有prototype对象，所以直接，空对象的构造函数指向继承父类，实现继承。
  F.prototype.eat = function(){console.log('eat meat');}
  return new F();
  // 这两个对象都是普通对象，不是构造函数，无法使用构造函数方法实现继承。
  // 这个inhrit函数只做了一件事，将子对象的prototype属性指向了父对象，从而使得子对象与父对象连接在了一起。
}

var Doctor = inhrit(Chinese);
Doctor.career='医生';
Doctor.eat();
Chinese.eat();
for (var i in Chinese){
console.log(''+ i +' : '+Chinese[i])
}

console.log(Doctor.nation +" "+ Doctor.career);
