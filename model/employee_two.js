var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'',
    user:'root',
    password:'',
    database:'nodejs',
    port:
})
connection.connect();


/**
 * 增加员工
 * @param {String} employee
 * @param {Function} callback
 */

exports.addEmployee=function(employee,callback){
    var employeeInsertSql = 'INSERT INTO employee(name,sex,age,email) VALUES(?,?,?,?)';
    var employeeInsertSql_Params = [employee.name,employee.sex,employee.age,employee.email]
    connection.query(employeeInsertSql,employeeInsertSql_Params,callback)
}


/**
 * 更新员工
 * @param {String} employee
 * @param {Function} callback
 */

exports.updateEmployee = function(name,age){
    var employeeUpdateSql = "UPDATE employee SET name = ? WHERE age =?";
    var employeeUpdateSql_Params = ['Peter',22];
    connection.query(employeeUpdateSql,employeeUpdateSql_Params,function(err,result){
        if(err) console.log('[UPDATE ERR]-',err.message);
        console.log(result);
    })
}

/**
 * 查询员工
 * 
 */

exports.getEmployee = function(){
    var employeeGetSql = "SELECT * FROM employee";
    connection.query(employeeGetSql,callback)
}

/**
 * 删除员工
 * @param {String} name
 */

exports.deleteEmployee = function(name){
    var employeeDeleteSql = "DELETE employee WHERE name = ?";
    var employeeDeleteSql_Params = 'Peter';
    connection.query(employeeDeleteSql,employeeDeleteSql_Params,callback)
    
}
