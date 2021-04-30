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
