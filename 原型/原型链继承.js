//父类型
function Supper(){
    this.supProp='Supper property'
}
Supper.prototype.showSupperProp=function(){
    console.log(this.supProp)
}

//子类型
function Sub(){
    this.subProp='Sub property'
}

//子类型的原型为父类型的一个实例对象
Sub.prototype=new Supper()
Sub.prototype.showSubprop=function(){
    console.log(this.subProp)
}
var sub=new Sub()
sub.showSupperProp()
sub.showSubprop()