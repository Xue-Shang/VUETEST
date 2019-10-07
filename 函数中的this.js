/*
1.this是什么？
    任何函数本质上都是通过某个对象来调用的，如果没有指定就是window
    所有函数内部都有一个变量this
    它的值是调用函数的当前对象
2.如何确定this的值
    test()      window
    p.test()    p
    new test()  新建的对象
    p.call(obj) obj
*/

function Person(color){
    console.log(this)
    this.color=color;
    this.getColor=function(){
        console.log(this)
        return this.color;
    };
    this.setColor=function(color){
        console.log(this)
        this.color=color
    }
}
Person("red")                //this是谁？window
var p=new Person("yello")    //this是谁？p
p.getColor()                 //this是谁？p
var test=p.setColor
test()                       //this是谁？window

var obj={}
p.setColor.call(obj,"black")  //this是谁？obj

function fun1(){
    function fun2(){
        console.log(this)
    }
    fun2()              //this是谁？window
}

