var express = require('express');



//链接数据库
var mysql=require('mysql');

var connection=mysql.createConnection({
  host:'webxrj.top',
  user:'bishe',
  password:'1web@XRJ',
  database:'bishe'
})
var router = express.Router()
router.get('/', function (req, res) {
  //sql语句
var sql="select * from admin";
//执行
connection.query(sql,function(error,result){
if(error) return;
	console.log(result);
  res.send(result)
})
  
})
router.get('/about', function (req, res) {
  res.send('About birds')
})

//登录验证
router.post('/', function (req, res) {
  console.log(req.body)
  // 接受参数
  var name = req.body.name;
  var age = req.body.age;
  res.send({
    msg: 'hello express!我是post请求的返回值,下面是你请求发送给我的数据',
    name: name,
    age: age
  })
})


module.exports = router;