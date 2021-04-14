// 导入mysql模块
var mysql = require('mysql')
// 创建一个数据库连接池
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',//账号
    password: 'root',//密码
    database: 'vue2008',//数据库名
    multipleStatements: true // 支持执行多条 sql 语句
});
connection.connect();//连接


//查询

var sql = "SELECT*FROM p_users limit 10";
connection.query(sql, (err, result) => {
    // if (err) {
    //     console.log('error')
    //     return
    // }
    // console.log('查询')
    // console.log(result)
    // console.log('结束')
    //获取查询结果
    console.log(result)
})

//增加数据
/*
var addsql='INSERT INTO p_goods(goods_id,goods_name,goods_desc) VALUES("218","公牛插排405D   3米","zhangxumingzhssdfa   ")';
connection.query(addsql,function (err,result) {
    if(err){
        console.log(err);
        return;
    }
    console.log('***********添加成功**********');
    console.log(result);
    console.log('*******结束******');
})
*/

//修改数据
/*
var modsql='UPDATE p_goods SET click_count="888",goods_number="999" WHERE goods_id=218';
connection.query(modsql,function (err,result) {
    if(err){
        console.log('err');
        return;
    }
    console.log('*************修改成功************');
    console.log(result);
    console.log('*************************');
})
*/

//删除数据
/*
var delsql='DELETE FROM p_goods where goods_id=218';
connection.query(delsql,function (err,result) {
    if(err){
        console.log('err');
        return;
    }
    console.log('*************删除************');
    console.log(result);
    // console.log('结束');
})
*/
connection.end()













// 第四步执行一条查询语句

// var sql = "select * from person where name='"+username+"'";
// connection.query(sql,function(err,rows,fields){
//      if(err)
//          console.log('链接错误');
//      else{
//         console.log('查询信息');
//      }
//记得关闭连接
// 　　 connection.end();
// });