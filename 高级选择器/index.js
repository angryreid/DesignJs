// 从接口定义可以看到Document、DocumentFragment、Element都实现了NodeSelector接口。即这三种类型的元素都拥有者两个方法。querySelector和querySelectorAll的参数须是符合 css selector 的字符串。
// 不同的是querySelector返回的是一个对象，获取到的第一个对象
querySelectorAll返回的一个集合(NodeList)

document.getElementById("test");
//or
document.querySelector("#test");
document.querySelectorAll("#test")[0];

document.getElementsByClassName('red')
//or
document.querySelector('.red')
//or
document.querySelectorAll('.red')

// querySelectorAll 在文档内找全部符合选择器描述的节点包括Element本身