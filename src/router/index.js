import { createRouter, createWebHistory } from "vue-router";
//import Home from "../views/Home.vue";
const Layout = () => import("../views/Layout.vue");
const Home = () => import("../views/home/Index.vue");
const TopCategory = () => import("../views/category/Index.vue");
const SubCategory = () => import("../views/category/Sub.vue");
const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            { path: "/", component: Home },
            { path: "/category/:id", component: TopCategory },
            { path: "/category/sub/:id", component: SubCategory },
        ],
    },
    // {

    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
