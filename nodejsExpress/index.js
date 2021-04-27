//index.js 使用路由
var express = require("express");
var app = express();
// var bodyParser = require("body-parser");
// var expressWs = require("express-ws")(app);
// var Wss = expressWs.getWss();
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

//ws
// 导入ws模块
const WebSocket = require("ws");
let wss = new WebSocket.Server({
  port: 3939,
});
// 用户连接时触发
wss.on("connection", function (ws, request) {
  // 接收数据时触发
  ws.on("message", function (message) {
    // 默认接收的message是一个字符串 需用用JSON.parse()转成对象
    let info = JSON.parse(message);
    // 如果是登录请求 为客户端对象ws添加一个user属性info中的user属性
    if (info.type === "login") {
      ws["user"] = info.user;
    } else if (info.type === "message") {
      // 如果是信息请求 则遍历wss.clients这个客户端set对象
      // 注意 这个对象是set类型 所以需要使用forEach进行遍历
      wss.clients.forEach((element) => {
        // 如果遍历到的客户端的user和info中的to相同 则发送信息给该客户端
        if (element["user"] === info.to) {
          element.send(info.message);
        }
      });
    }
  });
});

app.listen(3838, function () {
  console.log("3838端口服务器已启动");
});
