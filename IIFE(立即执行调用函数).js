/*
作用
    隐藏实现
    不会污染外部（全局）命名空间
*/

(function(){        //匿名函数自调用
    var a=3
    console.log(a+3)
})()
var a=4
console.log(a)


(function(){
    var a=1
    function test(){
        console.log(++a)
    }
    window.$=function(){    //向外暴露一个函数
        return {
            test:test
        }
    }
})()
$().test()