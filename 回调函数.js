/*
1.什么函数才是回调函数？
    1）.你定义的
    2）.你没有调
    3）.但最终它执行了
2.常见的回调函数
    1）.dom事件回调函数
    2）.定时器回调函数

    3）.ajax请求回调函数
    4）.生命周期回调函数
*/

document.getElementById('btn').onclick=function(){  //dom事件回调函数
    alert(this.innerHTML)
}


setTimeout(function(){  //定时器回调函数
    alert('到点了')
},2000)