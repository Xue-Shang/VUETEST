/*1.什么是对象
    -多个数据的封装体
    -用来保存多个数据的容器
    -一个对象代表显示中的一个事物
  2.为什么要用对象？
    -统一管理多个数据
  3.对象的组成
    -属性：属性名(字符串)和属性值(任意)组成
    -方法：一种特别的属性（属性值是函数）
  4.如何访问对象内部数据？
    - .属性名：编码简单，有时不能用
    - ['属性名']：编码麻烦，通用
        什么时候必须用['属性名']的方式
        1.属性名包含特殊字符你：- 空格
        2.变量名不确定
  */
var p={
    name:'Tom',
    age:13,
    setName:function(name){
        this.name=name
    },
    setAge:function(age){
        this.age=age
    }
}
p.setAge(18)
console.log(p.name,p.age)


//使用['属性名']
var p={}
p['content-type']='text/json'
console.log(['content-type'])

//变量名不确定
var propName='myAge'
var value=18
p[propName]=value   //p.propName=value不能用
console.log(p[propName])