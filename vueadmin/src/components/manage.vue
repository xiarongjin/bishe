<template>
  <div>
    <el-container>
      <el-header>
        <div class="left col">
          <span>
            <span style="line-height:30px"
              ><img src="" alt="照片" height="30"
            /></span>
            webxrj毕设
          </span>
        </div>
        <div class="right col">
          <button class="fa fa-bell-o" aria-hidden="true"></button>
          <el-dropdown size="medium">
            <template>
              <div style="height:50px">
                <span>名字</span>
                <img src="" alt="照片" />
              </div>
            </template>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>注销登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active=""
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router
          >
            <el-menu-item index="/admin">
              <i class="el-icon-menu"></i>
              <span slot="title">管理信息</span>
            </el-menu-item>
            <el-menu-item index="/goodsInf">
              <i class="el-icon-menu"></i>
              <span slot="title">商品信息</span>
            </el-menu-item>
            <el-menu-item index="/orderInf">
              <i class="el-icon-menu"></i>
              <span slot="title">预定信息<span class="textmsg"></span></span>
            </el-menu-item>
            <el-menu-item index="/usrInf">
              <i class="el-icon-menu"></i>
              <span slot="title">用户信息</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div
            class="homeWelcome"
            v-if="this.$router.currentRoute.path == '/home'"
          >
            欢迎来到夏荣金毕设的后台！
          </div>
          <router-view :key="$route.fullPath" class="homeRouterView" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.textmsg {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
}
/* 整体框架 */
.el-header {
  background-color: #409eff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
  line-height: 200px;
}

.homeWelcome {
  text-align: center;
  font-size: 30px;
  font-family: 华文楷体;
  color: #409eff;
  padding-top: 50px;
}

.homeRouterView {
  margin-top: 10px;
}

/* 头部 */

.col {
  height: 60px;
  /* border: 1px solid ; */
}
.left {
  float: left;
  font-size: 30px;
  font-family: 华文楷体;
  color: white;
}
.right {
  /* width: 160px; */
  float: right;
  color: #606266;
  font-size: 14px;
  /* border: 1px solid ;  */
}
.right span {
  /* border: 1px solid ; */
  position: relative;
  top: -5px;
  display: inline-block;
  /* width: 100px; */
  height: 20px;
  line-height: 20px;
  cursor: pointer;
}
.right button {
  position: relative;
  top: -5px;
  margin-right: 5px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
}
.right img {
  /* display: inline-block; */
  cursor: pointer;
  margin-left: 10px;
  /* border: 1px solid ; */
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
