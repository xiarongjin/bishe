var express = require("express");
var axios = require("axios");
const fetch = require("node-fetch");
const uploadImg = require("./uploadImg");
const fs = require("fs");
//链接数据库
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "webxrj.top",
  // host:'localhost',//本地
  user: "bishe",
  password: "1web@XRJ",
  database: "bishe",
});
connection.end();
var router = express.Router();

function conDb(sql, callback) {
  connection = mysql.createConnection(connection.config);
  connection.connect();
  connection.query(sql, callback);
  connection.end();
}

//管理员登录验证
router.post("/admin/login", function (req, res) {
  // 接受参数
  var adminName = req.body.adminName;
  var password = req.body.password;
  let sql = `SELECT password from admin WHERE name = '${adminName}'`;
  conDb(sql, function (error, data) {
    if (error) return;
    if (data == "" || data == undefined) {
      res.send({
        // msg:'登录失败，用户名或密码错误',
        code: 0,
      });
    } else {
      if (data[0].password == password) {
        res.send({
          // msg:`${name}登录成功`,
          adminName: adminName,
          code: 1,
        });
      } else {
        res.send({
          // msg:'登录失败，用户名或密码错误',
          code: 2,
        });
      }
    }
  });
});

//用户登录验证
router.post("/usr/login", function (req, res) {
  // 接受参数
  let username = req.body.username;
  var password = req.body.password;
  let sql = `SELECT password from usr WHERE name = '${username}'`;

  conDb(sql, function (error, data) {
    if (error) return;
    if (data == "" || data == undefined) {
      res.send({
        // msg:'登录失败，用户名或密码错误',
        code: 0,
      });
    } else {
      if (data[0].password == password) {
        res.send({
          // msg:`${name}登录成功`,
          username: username,
          code: 1,
        });
      } else {
        res.send({
          // msg:'登录失败，用户名或密码错误',
          code: 2,
        });
      }
    }
  });
});

//get获取管理员信息
router.get("/admin/search/admin", function (req, res) {
  let sql = `select * from admin`;
  conDb(sql, function (error, data) {
    if (error) return;

    res.send({
      data: data,
    });
  });
});

//获取用户信息
router.get("/admin/search/usr", function (req, res) {
  let sql = `select * from usr`;
  conDb(sql, function (error, data) {
    if (error) return;

    res.send({
      data: data,
    });
  });
});
//增加商品信息
router.post("/admin/goods/add", function (req, res) {
  let goods = req.body;
  let sql = `Insert into goods(type,name,count,image,price) values("${goods.type}","${goods.name}",${goods.count},"${goods.imageUrl}",${goods.price})`;

  conDb(sql, function (error, data) {
    if (error) return;

    if (data.affectedRows == 1) {
      res.send({
        msg: "添加成功",
        id: data.insertId,
      });
    }
  });
});

//删除商品信息
router.post("/admin/goods/del", function (req, res) {
  let form = req.body;
  // 先按商品照片地址对照片删除；
  const imageArr = form.image.split("/");
  fs.unlink(`${__dirname}/serverImage/${imageArr.slice(-1)}`, (err) => {
    if (err) throw err;
    //删除成功
  });
  //然后删除商品数据
  let sql = `delete from goods where id=${form.id}`;
  conDb(sql, function (error, data) {
    if (error) return;
    if (data.affectedRows == 1) {
      res.send({
        msg: "删除成功",
      });
    } else {
      res.send({
        msg: "该商品不存在",
      });
    }
  });
});

//修改商品信息
router.post("/admin/goods/change", function (req, res) {
  let goods = req.body;
  let sql = `update goods set type="${goods.type}",name="${goods.name}",count=${goods.count},image="${goods.imageUrl}",price=${goods.price} where id=${goods.id}`;
  conDb(sql, function (error, data) {
    if (error) return;
    if (data.affectedRows == 1) {
      res.send({
        msg: "修改成功",
      });
    } else {
      res.send({
        msg: "该商品不存在",
      });
    }
  });
});

//获取商品所有信息
router.get("/admin/goods/search", function (req, res) {
  let sql = `select * from goods`;
  conDb(sql, function (error, data) {
    if (error) return;

    res.send({
      data: data,
    });
  });
});

//获取下单所有记录
router.get("/admin/record/search", function (req, res) {
  let sql = `select * from record`;
  conDb(sql, function (error, data) {
    if (error) return;

    res.send({
      data: data,
    });
  });
});

//下单状态修改
router.post("/admin/record/change", function (req, res) {
  let id = req.body.id;
  let sql = `update  record set done=1 where id=${id}`;
  conDb(sql, function (error, data) {
    if (error) return;

    if (data.affectedRows == 1) {
      res.send({
        msg: "修改成功",
        code: 1,
      });
    } else {
      res.send({
        msg: "该记录不存在",
        code: 0,
      });
    }
  });
});

// 用户注册接口
router.post("/usr/register", function (req, res) {
  let usrdata = req.body;
  let usrname = usrdata.usrname;
  let password = usrdata.password;
  let address = usrdata.address;
  let tel = usrdata.tel;

  let sqlFirst = `select * from usr where name='${usrname}'`;
  connection.connection = mysql.createConnection(connection.config);
  connection.connect();
  connection.query(sqlFirst, function (error, data) {
    if (error) {
    }

    if (data == "" || data == undefined) {
      let sql = `INSERT INTO usr(name,password,tel,address) VALUES ('${usrname}','${password}','${tel}','${address}')`;
      connection.query(sql, function (error, data) {
        if (error) {
          res.send({
            msg: "注册失败",
            code: 0,
          });
        } else {
          res.send({
            msg: "注册成功",
            code: 1,
          });
        }
      });
    } else {
      res.send({
        msg: "用户名已存在",
        code: 3,
      });
    }
  });
  connection.end();
});

//用户下单
router.post("/usr/record/add", function (req, res) {
  let record = req.body;
  let sql = `insert into record(usrName,goodsInfo,sumPrice,time) values ('${record.usrName}','${record.goodsInfo}','${record.sumPrice}','${record.time}')`;
  conDb(sql, function (error, data) {
    if (error) {
      res.send({
        msg: "下单出错了",
      });
      return;
    }
    res.send({
      msg: "增加成功",
      id: data.insertId,
    });
  });
});

//用户查询下单
router.post("/usr/record/search", function (req, res) {
  let sql = `select * from record where usrName='${req.body.usrname}'`;
  conDb(sql, function (error, data) {
    if (error) {
      res.send({
        msg: "查询出错了",
      });
      return;
    }
    res.send({
      msg: "查询成功",
      data: data,
    });
  });
});

//图片接收
router.post("/usr/load/image", function (req, res) {
  uploadImg(req, res);
});
//转发猫眼电影api
router.get("/maoyan", function (req, res) {
  fetch("https://m.maoyan.com/ajax/movieOnInfoList")
    .then((res) => res.json())
    .then((json) => res.send(json));
});

module.exports = router;
