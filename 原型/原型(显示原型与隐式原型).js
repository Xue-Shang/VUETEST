/*
1.每个函数function都有一个prototype，即显示原型(属性)
2.每个实例对象都有一个__proto__，可称为隐式原型(属性)
3.对象的隐式原型的值为其对于构造函数的显示原型的值
4.总价：
    a.函数的prototype属性：在定义函数时自动添加的，默认值是一个空Object对象
    b.对象的__proto__属性：创建对象时自动添加的，默认值为构造函数的prototype属性值
    c.程序员能直接操作显示原型，但不能直接操作隐式原型（ES6之前）
*/

function Fn(){  //函数定义的时候就创建了显示原型对象：this.prototype={}
}
//1.每个函数function都有一个prototype，即显示原型(属性)
console.log(Fn.prototype)
//2.每个实例对象都有一个_proto_，可称为隐式原型(属性)
var fn=new Fn() //创建实例对象的时候就创建了隐式原型对象：this.__proto__=Fn.prototype
console.log(fn.__proto__)
//3.对象的隐式原型的值为其对于构造函数的显示原型的值
console.log(Fn.prototype===fn.__proto__)
Fn.prototype.test=function(){
    console.log('test()')
}
fn.test()