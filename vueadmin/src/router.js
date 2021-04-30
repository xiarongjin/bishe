import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
import Admin from "./components/admin";
import GoodsInf from "./components/goodsInf";
import OrderInf from "./components/orderInf";
import UsrInf from "./components/usrInf";
import AddGoods from "./components/addgoods";

const routes = [
  {
    path: "/home",
    name: "Menu",
    component: (resolve) => require(["./components/manage.vue"], resolve),
    children: [
      {
        path: "/admin",
        name: "管理信息",
        component: Admin,
      },
      {
        path: "/goodsInf",
        name: "商品信息",
        component: GoodsInf,
        children: [
          {
            path: "addGoods",
            name: "添加商品",
            component: AddGoods,
          },
        ],
      },

      {
        path: "/orderInf",
        name: "预定信息",
        component: OrderInf,
      },
      {
        path: "/usrInf",
        name: "用户信息",
        component: UsrInf,
      },
    ],
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "*",
    redirect: "/home",
  },
];

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;
