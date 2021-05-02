<template>
  <div>
    <div class="loginHeader">
      <div class="Head">
        <div class="leftBox">
          <img src="http://www.webxrj.top:3000/img/logo.png" alt="" />
          <span>管理员入口</span>
        </div>
      </div>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>密码登入</span>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.adminName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import myAjax from "../utils/ajax";
export default {
  name: "test",
  data() {
    return {
      form: {
        adminName: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      myAjax.post("/admin/login", this.form).then((res) => {
        if (res.data.code === 1) {
          this.$message({
            duration: 500,
            message: "登录成功！",
            type: "success",
          });
          this.$cookies.set("adminName", res.data.adminName);
          this.$router.push({ path: "/home" });
        } else {
          this.$message({
            duration: 500,
            message: "登录失败，请检查用户名和密码!",
            type: "error",
          });
        }
      });
    },
    reset() {
      this.form = {
        adminName: "",
        password: "",
      };
    },
  },
};
</script>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 350px;
  margin: 100px auto;
}
.loginHeader {
  width: 100%;
  position: relative;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.loginHeader .Head {
  width: 1000px;
  background-color: #fff;
  margin: 0 auto;
  height: 80px;
}
.loginHeader .Head .leftBox {
  margin: 26.5px 0;
  width: 100px;
  float: left;
}
.loginHeader .Head .leftBox span {
  text-align: left;
  font-size: 24px;
  color: #999;
  display: inline-block;
  padding: 0 10px;
  vertical-align: bottom;
  border-left: 1px solid #999;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.loginHeader .Head .leftBox img {
  width: 100px;
}
</style>
