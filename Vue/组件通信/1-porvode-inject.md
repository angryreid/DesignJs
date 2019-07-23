父组件提供
子组件注入

父组件
```
// 与data同级
provide(){
  return {
    data: this
  }
}
```

子组件
```
inject: {
  data: {
    default: () => ({})
  }
}
```

子组件使用
```
injections.data.XXX
```