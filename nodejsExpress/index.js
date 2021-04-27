//index.js 使用路由
var express = require("express");
var app = express();
// var bodyParser = require("body-parser");

//设置跨域访问
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options") res.send(200);
  //让options尝试请求快速结束
  else next();
});

//路由
var router = require("./router.js");
app.use(router);

app.listen(3838, function () {
  console.log("3838端口服务器已启动");
});
