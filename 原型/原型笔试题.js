/**
 * 测试题1
 */
function A(){

}
A.prototype.n=1
var b=new A()
A.prototype={
    n:2,
    m:3
}
var c=new A()
console.log(b.n, b.m, c.n, c.m)

/**
 * 测试题2
 */
function F(){}
Object.prototype.a=function(){
    console.log('a()')
}
Function.prototype.b=function(){
    console.log('b()')
}
var f=new F()
f.a()

F.a()
F.b()