import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CityView from "../views/CityView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/weather/:state/:city",
      name: "cityView",
      component: CityView,
      meta: {
        title: "Weather",
      },
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/feed",
      component: () => import("../views/Feed.vue"),
    },
    {
      path: "/",
      component: () => import("../views/SignIn.vue"),
      meta: {
        requiredAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // if (to.matched.some((record) => record.meta.requiredAuth)) {
  //   console.log("ok");
  //   if (getAuth().currentUser) {
  //     console.log("currentUser");

  //     // document.title = `${
  //     //   to.params.state
  //     //     ? `${to.params.city}, ${to.params.state}`
  //     //     : to.meta.title
  //     // } | The Local Weather`;
  //     // next("/home");
  //   } else {
  //     // alert("You don't have permission");
  //     // next("/");
  //     console.log("not currentUser");
  //   }
  // } else {
  //   next();
  // }

  document.title = `${
    to.params.state ? `${to.params.city}, ${to.params.state}` : to.meta.title
  } | The Local Weather`;
  next();
});

export default router;
