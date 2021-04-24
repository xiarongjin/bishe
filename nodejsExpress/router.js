var express = require("express");
var axios = require("axios");

//链接数据库
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "webxrj.top",
  // host:'localhost',//本地
  user: "bishe",
  password: "1web@XRJ",
  database: "bishe",
});
var router = express.Router();
router.get("/", function (req, res) {
  //sql语句
  let sql = "select * from admin";
  //执行
  connection.query(sql, function (error, result) {
    if (error) return;

    res.send(result);
  });
});
router.get("/about", function (req, res) {
  res.send("About birds");
});

//管理员登录验证
router.post("/admin/login", function (req, res) {
  // 接受参数
  var adminName = req.body.adminName;
  var password = req.body.password;
  let sql = `SELECT password from admin WHERE name = '${adminName}'`;
  connection.query(sql, function (error, data) {
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
  var usrname = req.body.usrname;
  var password = req.body.password;
  let sql = `SELECT password from usr WHERE name = '${usrname}'`;
  connection.query(sql, function (error, data) {
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
          usrname: usrname,
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

//增加商品信息
router.post("/admin/goods/add", function (req, res) {
  let goods = req.body;
  let sql = `Insert into goods(type,name,count,image,price) values("${goods.type}","${goods.name}",${goods.count},"${goods.image}",${goods.price})`;

  connection.query(sql, function (error, data) {
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
  let id = req.body.id;
  // 先进行查询商品照片地址
  let sql1 = `select image from goods where id=${id}`;
  connection.query(sql1, function (error, data1) {
    if (error) return;
    if (data1[0]) {
      //获取商品照片地址url
    }
  });
  let sql = `delete from goods where id=${id}`;
  connection.query(sql, function (error, data) {
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
  let id = req.body.id;
  var sqlchange;
  let buy = req.body.buy;
  let price = req.body.price;
  if (buy && price) {
    sqlchange = `update  goods set count=count-${buy},price=${price} where id=${id}`;
  } else if (req.body.buy) {
    sqlchange = `update  goods set count=count-${buy} where id=${id}`;
  } else {
    sqlchange = `update  goods set price=${price} where id=${id}`;
  }

  connection.query(sqlchange, function (error, data) {
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
  connection.query(sql, function (error, data) {
    if (error) return;

    res.send({
      data: data,
    });
  });
});

//获取下单所有记录
router.get("/admin/record/search", function (req, res) {
  let sql = `select * from record`;
  connection.query(sql, function (error, data) {
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
  connection.query(sql, function (error, data) {
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
});

//用户下单
router.post("/usr/record/add", function (req, res) {
  let record = req.body;
  let sql = `insert into record(usrName,goodsInfo,time) values ('${record.usrname}','${record.goodsInfo}','${record.time}')`;
  connection.query(sql, function (error, data) {
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
  connection.query(sql, function (error, data) {
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

module.exports = router;
