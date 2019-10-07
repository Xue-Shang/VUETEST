var obj1={name:'Tom'}
var obj2=obj1
obj2.age=12
console.log(obj1.age)
function fn(obj){               //obj是一个新的变量，传过来的obj1将obj的堆对象指向obj1的堆对象
    obj.name='A'                //修改同一个堆对象，因为obj和obj1指向同一个堆对象
   console.log( obj===obj1)
}
fn(obj1)
console.log(obj2.name)


var a={age:12}
var b=a
a={name:'BOB',age:13}
b.age=14
console.log(b.age,a.name,a.age)

function fn2(obj){          //obj是一个新的变量，传过来的a将obj的堆对象指向a的堆对象
    obj={age:15}            //新建一个堆对象，obj指向它
    console.log(a===obj)  //两个值不同，说明是两个不同对象
            
}
fn2(a)
console.log(a.age)



console.log("--------------------------------------------")

var a=3
function fn(a){
    a=a+1
}
fn(a)
console.log(a)

function fn2(obj){
    console.log(obj.name)
}
var obj={name:'Tom'}
fn2(obj)


console.log("--------------------------------------------")
/*释放内存
    局部变量：函数执行完自动释放
    对象：成为垃圾对象==>垃圾回收器回收
*/    
var a=3
var obj={}
function fn(){
    var b={}
}
fn()        //b是自动释放，b所指向的对象数是在后面的某个时刻由垃圾回收器回收