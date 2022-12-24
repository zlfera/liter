import { createLogger, createStore } from "vuex";
import user from "./modules/user";
import cart from "./modules/cart";
import category from "./modules/category";
import createPersistedState from "vuex-persistedstate";
export default createStore({
    state() {},
    mutations: {},
    actions: {},
    modules: {
        user,
        cart,
        category,
    },
    plugins: [
        createLogger(),
        createPersistedState({
            key: "zlfera",
            paths: ["user", "cart"],
        }),
    ],
});
