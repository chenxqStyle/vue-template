module.exports = [
  {
    path: "/testvuex",
    name: "testvuex",
    component: () => import(/* webpackChunkName: "about" */ "../views/test-vuex.vue"),
  },
];
