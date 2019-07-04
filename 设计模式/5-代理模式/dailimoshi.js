/**
 * 代理模式可以避免对一些对象直接的访问，以此为基础，常见的有保护代理和虚拟代理。保护代理可以在代理中直接绝对，对象的访问；虚拟代理可以延迟访问到真正需要的时候，以便节省程序开销。
 * 优点：代理模式有高度解耦，对象保护，易修改等优点。
 * 缺点：通过设置代理访问对象，因此开销会更大，时间也会慢。
 */

 const myImg = {
   setSrc(imgNode, src){
     imgNode.src = src;
   }
 }

//  利用代理模式实现图片的懒加载
const proxyImg = {
  setSrc(imgNode, src){
    // 1. 加载占位图片并且将图片放入<img>元素
    myImg.setSrc(imgNode, './image.png');
    // 2. 加载真正需要的图片
    let img = new Image();
    img.src = src;
    // 3. 加载完成后，更新<img>元素中的图片
    img.onload = () => {
      myImg.setSrc(imgNode, src)
    }
  }
}

// test
let imgNode = document.createElement('img'),
  img_src = 'https://upload-images.jianshu.io/upload_images/5486602-5cab95ba00b272bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp';

  document.body.appendChild(imgNode);
  proxyImg.setSrc(imgNode,img_src);