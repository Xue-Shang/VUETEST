/**
 * 测试1
 */
console.log('global behin:'+i)
var i=1
foo(1)
function foo(i){
    if(i==4){
        return
    }
    console.log('foo() begin:'+i)
    foo(i+1)
    console.log('foo() end:'+i)
}
console.log('global end:'+i)

/**
 * 测试2：先执行变量提升，在执行函数提升
 */
function a(){}
var a;
console.log(typeof a)       //function

/**
 * 测试3
 */
if(!(b in window)){
    var b=1
}
console.log(b)

/**
 * 测试4
 */
var c=1
function c(c){
    console.log(c)
}
c(2)        //报错