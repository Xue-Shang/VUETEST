/**
 * 1.instanceof是如何判断的？
 *  表达式：A instanceof B
 *  如果函数的显示原型在A对象的原型链上，返回true,否则返回false
 * 2.Function是通过new自己产生的实例
 */

 /**
  *案例1
  */
 function Foo(){}
 var f1=new Foo()
 console.log(f1 instanceof Foo)     //true
 console.log(f1 instanceof Object)  //true

 /**
  * 案例2
  */
 console.log(Object instanceof Function)
 console.log(Object instanceof Object)
 console.log(Function instanceof Function)
 console.log(Function instanceof Object)

 function Foo(){}
 console.log(Object instanceof Foo)