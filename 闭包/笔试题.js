var name="The Window"
var object={
    name:"My Object",
    getNameFunc:function(){
        return function(){
            return this.name
        }
    }
}
alert(object.getNameFunc()())   //object.getNameFunc()===>function(){returm this.name}


var name2="The Window"
var object2={
    name2:"My Object",
    getNameFunc:function(){
        var that=this,
        return function(){
            return that.name2;
        }
    }
}
alert(object2.getNameFunc()())