/**
 * 将对象组合成树形结构，以用来表示“部分-整体结构”
 * 1. 用小的子对象构造更大的父对象，而这些子对象也由更小的子对象构成。
 * 2. 单个对象和组合对象用户暴露的接口具有一致性，而同种接口不同表现形式亦体现了多态性
 * 应用场景：组合模式可以在需要针对“树形结构”进行操作的应用中使用，例如扫描文件夹，渲染网站导航结构等等。
 * 
 */

//  文件类
class File{
  constructor(name){
    this.name = name || "File";
  }

  add(){
    throw new Error('文件不能添加文件');
  }
  scan(){
    console.log('扫描文件：' + this.name);
  }
}

// 文件夹类
class Folder{
  constructor(name){
    this.name = name || "Folder";
    this.files = [];
  }

  add(file) {
    this.files.push(file);
  }

  scan() {
    console.log('扫描文件夹：' + this.name);
    for(let file of this.files){
      file.scan();
    }
  }
}

// test
let home = new Folder('用户根目录');

let folder1 = new Folder('第一个文件夹');
let folder2 = new Folder('第二个文件夹');

let file1 = new File('1号文件');
let file2 = new File('2号文件');
let file3 = new File('3号文件');


folder1.add(file1);
folder2.add(file2);
folder2.add(file3);
home.add(folder1);
home.add(folder2);

home.scan();
