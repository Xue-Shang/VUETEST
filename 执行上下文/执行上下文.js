/**
 * 1.代码分类
 *      全局代码
 *      函数（局部）代码
 * 2.全局执行上下文
 *      -在执行全局代码前将window确定为全局执行上下文
 *      -在全局数据进行预处理
 *          var定义的全局变量==>undefined，添加为window的属性
 *          function声明的全局函数==>赋值(fun)，添加为window的方法
 *          this==>赋值(window)
 *      -开始执行全局代码
 * 3.函数执行上下文
 *      -在调用函数，准备执行函数体之前，创建对于的函数执行上下文对象
 *      -对局部数据进行预处理
 *          形参变量==>赋值（实参）==>添加为执行上下文的属性
 *          arguments==>赋值（实参列表），添加为执行上下文的属性
 *          var定义的局部变量==>undefined，添加为执行上下文的属性
 *          function声明的韩式==>赋值(fun)，添加为执行上下文的方法
 *          this==>赋值(调用函数的对象)
 *      -开始执行函数体代码
 *          
 */

 //全局执行上下文
 console.log(a1,window.a1)
 arr2()
 console.log(this)

 var a1=3
 function a2(){
     console.log('a2()')
 }
 console.log(a1)

 //函数执行上下文
 function fn(a1){
     console.log(a1)
     console.log(a2)
     a3()
     console.log(this)
     console.log(arguments)

     var a2=3
     function a3(){
         console.log('a3()')
     }
 }
 fn(2,3)