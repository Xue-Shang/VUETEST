/*
1.函数的prototype属性（图）
    每个函数都有一个prototype属性，它默认指向一个object空对象（即称为：原型对象）
    原型对象有一个属性constructor，它指向函数对象
*/

console.log(Date.prototype,typeof Date.prototype)

function Fun(){
}
console.log(Fun.prototype)       //默认指向一个object空对象（没有我们的属性）
Fun.prototype.test=function(){   //给原型对象添加属性
    console.log('test()')
}
console.log(Fun.prototype)

//原型对象有一个属性constructor，它指向函数对象
console.log(Date.prototype.constructor===Date)


//给原型对象添加属性（一般是方法）====>实例对象可以访问
var fun=new Fun()
fun.test()