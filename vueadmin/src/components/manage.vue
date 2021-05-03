<template>
  <div>
    <el-container>
      <el-header>
        <div class="left col">
          <span>
            <span style="line-height:30px"
              ><img src="../assets/logo.png" alt="照片" height="30"
            /></span>
            后台管理
          </span>
        </div>
        <div class="right col">
          <button class="fa fa-bell-o" aria-hidden="true"></button>
        </div>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu default-active="" class="el-menu-vertical-demo" router>
            <el-menu-item index="/admin">
              <i class="el-icon-menu"></i>
              <span slot="title">管理信息</span>
            </el-menu-item>
            <el-menu-item index="/goodsInf">
              <i class="el-icon-menu"></i>
              <span slot="title">商品信息</span>
            </el-menu-item>
            <el-menu-item index="/orderInf" @click="getOrder">
              <i class="el-icon-menu"></i>
              <span slot="title"
                >预定信息<input
                  v-show="this.$store.state.count > 0"
                  v-model="this.$store.state.count"
                  class="textmsg"
                />
              </span>
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
            欢迎来到夏荣金线上超市的后台！
          </div>
          <router-view :key="$route.fullPath" class="homeRouterView" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getOrder() {
      this.$store.commit("getCunt", 1);
    },
  },
};
</script>
<style>
.textmsg {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  padding: 0;
  border: none;
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
