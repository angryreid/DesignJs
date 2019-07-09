/**
 * Q：
 * 请实现一个函数，把字符串中每个空格替换为“%20”
 */

/**
 * R：
 * 1. 使用正则表达式
 * 2. 先计算出替换后字符串的长度，然后逐个填写字符。时间复杂度为O（N）
 */

// 1. 使用正则表达式
function repalceEmpty1(str){
  const re = / /g;
  return str.replace(re, '%20');
}

// 2.
function repalceEmpty2(str){
  str = str.split("");

  let count = 0,
    i = 0,
    j = 0;
    for(let i = 0; i < str.length; ++i){
      str[i] === " " && ++count;
    }
    let length = str.length + count * 2;
    let result = new Array(length);

    while(i < result.length){
      if(str[j] === " "){
        result[i++] = "%";
        result[i++] = "2";
        result[i++] = "0";
        j++;
      } else {
        result[i++] = str[j++]
      }
    }

    return result.join("");
}

console.log(repalceEmpty1("we are happy"));
console.log(repalceEmpty2("we are happy"));