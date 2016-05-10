var db = require('./model/employee_two');


//增加员工
var employee = {
    name:'lisa',
    age:22,
    sex:"女",
    email:'99533212@qq.com'
}
db.addEmployee(employee,function(err,result){
    if(err) console.log("[INSERT err]-",err.message)
    console.log(result);
})

//删除员工
db.deleteEmployee('Peter',function(err,result){
    if(err) console.log("[DELETE err]-",err.message)
    console.log(result);
})

//更新员工
db.updateEmployee('Tim',23,function(err,result){
    if(err) console.log("[UPDATE err]-",err.message)
    console.log(result);
})

//查询员工
db.getEmployee(function(err,result){
    if(err) console.log("[GET err]-",err.message)
    console.log(result);
})
