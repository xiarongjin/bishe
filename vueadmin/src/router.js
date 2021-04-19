import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
import Admin from "./components/admin";
import GoodsInf from "./components/goodsInf";
import OrderInf from "./components/orderInf";
import UsrInf from "./components/usrInf";

const routes = [
  { path: "/admin", component: Admin },
  { path: "/goodsInf", component: GoodsInf },
  { path: "/orderInf", component: OrderInf },
  { path: "/usrInf", component: UsrInf },
];
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;
