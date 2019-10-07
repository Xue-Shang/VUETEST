//如果需要兼容IE及以下的的JSON操作，则可以引用一个外部的JS文件来处理
//<script type="text/javascript src="js/json.js"></script>
/*
JSON
    -JSON和JS对象的格式一样，只不过JSON字符串中的属性名必须加双引号，其他的和JS语法一致
    -JSON分类：
        1.对象{}
        2.数组[]
*/

//创建一个对象
var obj='{"name":"孙悟空","age":18,"gender":"男"}';
var arr='[1,2,3,"hello",true]';
var obj2='{"arr":[1,2,3]}';
var arr2='[{"name":"孙悟空","age":18,"gender":"男"}]';

/*  将JSON字符串转换为JS对象
        在JS中，为我们提供了一个工具类，就叫JSON
        这个对象可以帮助我们将一个JSON转换为JS对象，也可以将对象转换为JSON
*/
var json='{"name":"孙悟空","age":18,"gender":"男"}'
/*JSON----->JS对象
    JSON.parse()
        -可以将以JSON字符串转换为JS对象
        -它需要一个JSON字符串作为参数，会将该字符串转换为JS对象
*/
var o=JSON.parse(json);
console.log(o.gender)       //男

var o2=JSON.parse(arr)
console.log(o2)
console.log(o2[1])           //2

/*
    JS对象---->JSON
        JSON.stringify()
            -可以将一个JS对象转换为JSON字符串
            -需要一个JS对象座位参数，会返回一个JSON字符串
*/
var obj3={name:"孙悟空",age:18,gender:"男"}
var str=JSON.stringify(obj3)
console.log(str)        //  '{"name":"孙悟空","age":18,"gender":"男"}'


/*eval()
    -这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回
    -如果使用eval()执行的字符串中含有{}，它会将{}当成是代码块
        如果不希望将其当成代码块解析，则需要在字符串前后各加一个()

    -eval()这个函数的功能很强大，可以直接执行一个字符串中的js代码
        但是在开发中尽量不要使用，首先它的执行性能比较差，然后它还具有安全隐患
*/
var str2="alert('hello');"
var obj=eval("("+str+")");