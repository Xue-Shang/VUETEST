/**
 * 1.在嵌套内部函数定义执行完时就产生了（不是在调用）
 * 2.在嵌套的内部函数成为垃圾对象时
 */

function fn1(){
    //此时闭包就已经产出了（函数提升，内部函数对象已经创建了）
    var a=2
    function fn2(){
        a++
        console.log(a)
    }
    // var fn2= function fn2(){             //这段代码执行完闭包才创建
    //     a++
    //     console.log(a)
    // }
    return fn2
}

var f=fn1()
f()
f()
f=null          //闭包死亡（包含闭包的函数对象成为垃圾对象）