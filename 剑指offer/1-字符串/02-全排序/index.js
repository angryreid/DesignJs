/**
 * Q:
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 例如输入，a,b,c;
 * 输出：abc,abc,bac,bca,cab,cba
 */

/**
 * R:
 * 把集合看成两个部分，第一个部分是第一个元素，第二个部分是后面剩余元素。所有字符都要与当前集合的第一个元素交换，交换后的元素是固定的。
 * 每次交换，都继续处理后面的剩余元素，它们又可以分成2部分。递归下去，知道最后一个元素，那么就排列出了其中一种情况。所有情况放在一起，就是全排列的结果。
 */

//  交换数组指定坐标的2个元素
function swap(arr, i, j){
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 检测一段区间里是否有两个相同的元素
function check(arr, start, end){
  for(let i = start; i < end; i++){
    if(arr[end] === arr[i]){
      return false;
    } else{
      return true;
    }
  }
}

// 全排列
function perm(arr = [], n = 0){
  const length = arr.length;
  if(length === n){
    console.log(arr.join(" "));
    return;
  }
  for(let i = n; i < length; ++i){
    if(check(arr, n, i)){
      swap(arr, n, i);
      perm(arr, n + 1);
      swap(arr, n, i);
    }
  }
}


var perm2 = function(s) {
  var result = [];
  if (s.length <= 1) {
    return [s];
  } else {
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      var newStr = s.slice(0, i) + s.slice(i + 1, s.length);
      var l = perm2(newStr);
         
      for (var j = 0; j < l.length; j++) {
        var tmp = c + l[j];
        result.push(tmp);
      }
    }
  }
  return result;
}; 

// test
perm(['a', 'b', 'c']);
perm2(['a', 'b', 'c']);
console.log(perm2(['a', 'b', 'c']));
