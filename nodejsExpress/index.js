//index.js 使用路由
var express = require('express');
var app=express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended:true
}))
//路由
var router = require('./router.js');
app.use('/',router);


app.listen(3000,function(){
  	console.log('三千服务器已启动')
})