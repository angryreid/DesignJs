/**
 * Q:
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变
 * eg：输入 “I am a student”
 * 输出： “student  a am I”
 */

/**
 * R:
 * 进行2次不同层次的翻转。第一次翻转，是对整体字符串进行翻转。第二次的翻转，是对翻转后字符串中的单词进行翻转。
 */



//  code
function reverseSentence(sentence) {
  //  第一次翻转
  const chars = sentence.split("").reverse();
  let result = "",
    last = []; // 保存上一个空格到当前空格之间的所有字符串
  chars.forEach(ch => {
    // 遇到空格，说明之前的字符都组成了单词
    // 第二次翻转，单词
    if(ch === " "){
      result += last.reverse().join("");
      last.length = 0;
    }

    last.push(ch);
  });
  // 最后一个字符翻转
  result += last.reverse().join("");
  return result;
}

// test
console.log(reverseSentence("I am a student. "));