import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

import router from "./router";

//设置Key，删除，判断是否存在
// Vue.$cookies.set("theme", "default");
// Vue.$cookies.remove("theme");
// console.log(Vue.$cookies.isKey("theme"));
// 获取Vue.$cookies.get(keyName)

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !Vue.$cookies.isKey("adminName"))
    next({ name: "Login" });

  next();
});

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  store: store,
  router,
}).$mount("#app");
