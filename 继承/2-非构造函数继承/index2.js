//2.浅拷贝

var Chinese = {
  nation:'中国',
  birthday:['beijing','shanghai','guangzhou']
}

function extendCopy(obj){
  var c = {};
  for(var prop in obj){
      c[prop] = obj[prop];
  }
  c.uber = obj;
  return c;
}

var Doctor = extendCopy(Chinese);
Doctor.career='医生';
Doctor.birthday.push('guiyang');

console.log(Doctor.nation +" "+ Doctor.career);
console.log(Doctor.birthday);
console.log(Chinese.birthday);

// 但是这样拷贝有一个问题，如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正的拷贝，因此存在父对象被篡改的可能
// 所以拷贝函数只能拷贝基本的数据类型，叫做浅拷贝