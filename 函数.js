/*
1.什么是函数？
    -实现特定功能的n条语句的封装体
    -只有函数是可以执行的，其他类型的数据不能执行
2.为什么要用函数？
    -提高代码复用
    -便于阅读交流
3.如何定义函数？
    -函数声明
    -表达式
4.如何调用（执行）函数？
    -test()直接调用
    -obj.test()通过对象调用
    -new test()new调用
    -test.call/apply(obj):临时让test成为obj的方法进行调用
*/




//创建方式
    //函数声明创建对象
	function fun2(){函数体}         
    fun2()	
    //函数表达式创建对象
	var fun=function(){函数体}      
	fun()

    //工厂方法创建对象
	function createPerson(name,age,gender){
	  var obj=new Object();
	  obj.name=name
	  obj.age=age
	  obj.sayName=function(){
		alert(this.name)
	  	}
	  return obj
	}
	var obj=createPerson("孙悟空",28,"男")
	var obj2=cretePerson("猪八戒",25,"男")

    /*构造函数（首字母大写）
        普通函数是直接调用，而构造函数需要使用new关键字调用
        
        1.构造函数执行流程
        --立即创建一个新的对象
        --将新建的对象设置为函数中this,在构造函数中可以使用this来引用新建的对象
        --逐行执行函数的代码
        --将新建的对象作为返回值返回
        2.使用一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类
        --我们将通过一个构造函数创建的对象，称之为该类的实例
    */	
	function Person(name,age,gender){
		this.name=namel
		this.age=age;
		this.gender=gender;
		this.sayName=fun
    }

	function fun(){         //将sayName方法在全局作用域中定义，节省控件，提高性能
        alert("Hellow大家好，我是"+this.name)
    }
	var per=new Person("孙悟空",18,"男");
	var per2=new Person("玉兔精",28,"女")
	
	/*instanceof
	    可以检查一个对象是否一个类的实例
        如果是,则返回true,否则返回false
    */
	
	per instanceof Person		//(true)


//全局函数
	//创建的变量都会作为window对象的属性保存
	var a=10
	  console.log(window.a)
	//创建的函数都会作为window对象的方法保存
	function fun(){
      console.log("我是函数")
    }
	
	//变量的声明提前
    console.log("a="+a)	
    var a;	
    var a=123			
    console.log("a="+a)                
    a=123
	//函数的声明提前
	  fun();        //可以全部调用
	  fun2();       //报错
	  function fun(){
		console.log("我是一个fun函数")
	  }
	  var fun2=function(){
		console.log("我是一个fun2函数")
	  }
    
//注意事项
	//返回值可以是任何类型，包括对象
	  function fun(){
		return {name:"沙和尚"}
	  }

	//立即执行函数
	  (function(a,b){
		console.log("a="+a);
		console.log("b="+b);
      })(123,456)
      
      var obj={}
    function test2(){
      this.name='悟空'
    }
    test2.call(obj)         //obj.test2()
    console.log(obj.name)
