/**
 * 原始模型
 */


var Cat = {
  name:'',
  color:''
}

var cat1 = {};
cat1.name='big';
cat1.color = 'yellow'

var cat2 = {};
cat2.name = 'small';
cat2.color = 'black';

console.log('cat1' + ' name: '+cat1.name+' color: '+cat1.color);
console.log('cat2' + ' name: '+cat2.name+' color: '+cat2.color);

function Cat(name,color){
  return {
      name:name,
      color:color
  }
}

var cat1 = Cat('big','yellow');
var cat2 = Cat('small','black');

console.log(cat1.name +' '+cat1.color);
console.log(cat2.name+' '+cat2.color);