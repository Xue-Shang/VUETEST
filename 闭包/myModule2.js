(function(){
    //私有数据
    var msg='My module2'
    function doSomething2(){
        console.log('doSomething2'+msg.toUpperCase())
    }
    function doOtherthing2(){
        console.log('doOtherthing2()'+msg.toLowerCase())
    }
    window.myModule2={
        doSomething2:doSomething2,
        doOtherthing2:doOtherthing2
    }
})()