/**
 * 适配器模式为多个不兼容接口之前提供 ‘转化器’
 * 它的操作非常简单，检查接口的数据，进行过滤，重组等操作，使得另一接口可以使用数据
 * 应用场景：当数据不符合使用规则，就可以借助这种模式进行格式转化。
 */

const API = {
  qq: () => ({
    name: 'love',
    author: 'tylor swift',
    f: 1
  }),
  netease: () => ({
    n: 'love',
    a: 'tylor swift',
    f: false
  })
}

const adapter = (info = {}) => ({
  name: info.name || info.n,
  author: info.author|| info.a,
  free: !!info.f
})

console.log(adapter(API.qq()));
console.log(adapter(API.netease()));