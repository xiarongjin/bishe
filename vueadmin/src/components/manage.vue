<template>
  <el-row class="tac">
    <el-col :span="1"> </el-col>
    <el-col :span="4">
      <h5>后台管理页面</h5>
      <el-menu
        default-active="/orderInf"
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
          <span slot="title">预定信息</span>
        </el-menu-item>
        <el-menu-item index="/usrInf">
          <i class="el-icon-menu"></i>
          <span slot="title">用户信息</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="19">
      <router-view></router-view>
    </el-col>
  </el-row>
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
