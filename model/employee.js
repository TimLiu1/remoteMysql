var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'',
    user:'root',
    password:'',
    database:'nodejs',
    port:6445
})
connection.connect();

// exports.addEmployee = function(employee,callback){
//     var employeeInsertSql = 'INSERT INTO employee(name,sex,age,email) VALUES(?,?,?,?)';
//     var employeeInsertSql_Params = ['Tim','男',22,'18818216454@163.com']
//     connection.query()
    
// }



/**
 * 增加员工
 * @param {String} employee
 * @param {Function} callback
 */


function addEmployee(){
    var employeeInsertSql = 'INSERT INTO employee(name,sex,age,email) VALUES(?,?,?,?)';
    var employeeInsertSql_Params = ['Tim','男',22,'18818216454@163.com']
    connection.query(employeeInsertSql,employeeInsertSql_Params,function(err,result){
        if(err) console.log('[INSERT ERR]-',err.message);
        console.log(result);
    }) 
}

addEmployee()


/**
 * 更新员工
 */

function updateEmployee(){
    var employeeUpdateSql = "UPDATE employee SET name = ? WHERE age =?";
    var employeeUpdateSql_Params = ['Peter',22];
    connection.query(employeeUpdateSql,employeeUpdateSql_Params,function(err,result){
        if(err) console.log('[UPDATE ERR]-',err.message);
        console.log(result);
    })
}

// insertEmployee();

/**
 * 查询员工
 * 
 */

function getEmployee(){
    var employeeGetSql = "SELECT * FROM employee";
    connection.query(employeeGetSql,function(err,result){
        if(err) console.log('[SELECT ERR]-',err.message);
        console.log(result);
    })
}


getEmployee();

/**
 * 删除员工
 */

function deleteEmployee(){
    var employeeDeleteSql = "DELETE employee WHERE name = ?";
    var employeeDeleteSql_Params = 'Peter';
    connection.query(employeeDeleteSql,employeeDeleteSql_Params,function(err,result){
        if(err) console.log('[DELETE ERR]-',err.message);
        console.log(result);
    })
    
}

deleteEmployee();