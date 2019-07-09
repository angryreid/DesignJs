// 数组遍历方法之
// for in

var arr = ['foo','bar'];

for(var i in arr){
    console.log(i +'--->'+arr[i]);
}

// 这里的i表示（key，value）中的key
// 数组表示未下标0,1...
// 对象表示为键名