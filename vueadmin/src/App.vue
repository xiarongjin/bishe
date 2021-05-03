<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import myAjax from "./utils/ajax";

export default {
  created() {
    myAjax
      .get("/admin/goods/search")
      .then((res) => this.$store.commit("getData", res.data.data));
  },
  data() {
    return {
      path: "ws://webxrj.top:3939",
      socket: "",
    };
  },
  mounted() {
    // 初始化
    this.init();
  },
  methods: {
    init: function() {
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path);
        // 监听socket连接
        this.socket.onopen = this.open;
        // 监听socket错误信息
        this.socket.onerror = this.error;
        // 监听socket消息
        this.socket.onmessage = this.getMessage;
      }
    },
    open: function() {
      this.socket.send(
        JSON.stringify({
          type: "login", // type：login表示登录 用于后端逻辑判断
          // user:只要确保每一个html页面中的不一样就可以了
          user: "A", // user：用户名 用于区分用户并且作为别的用户发送信息时候的接收者
        })
      );
    },
    error: function() {
      console.log("连接错误");
    },
    getMessage: function(msg) {
      // console.log(msg.data, 1);
      this.$store.commit("getCunt");
      this.$message({ duration: 500, message: msg.data });
      console.log(this.$store.state.count);
    },
    send: function(params) {
      this.socket.send(params);
    },
    close: function() {
      console.log("socket已经关闭");
    },
  },
  destroyed() {
    // 销毁监听
    this.socket.onclose = this.close;
  },
};
</script>
