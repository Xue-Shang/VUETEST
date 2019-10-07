/**
 * 测试1
 */
var x=10
function fn(){
    console.log(x)
}
function show(f){
    var x=20;
    f()
}
show(fn)        //10

//fn和show是两个不同的函数作用域，在调用fn时，先找自身函数作用域，找不到再往全局作用域找

/**
 * 测试2
 */

var obj={
    fn2:function(){
        console.log(fn2)        //fn2在函数作用域找不到，再往全局找，还是找不到就报错了；console.log(this.fn2)才不会报错
    }
}
obj.fn2()