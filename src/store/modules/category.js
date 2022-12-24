import { topCategory } from "@/api/constants";
import { findAllCategory } from "@/api/category";
export default {
    namespaced: true,
    state() {
        return {
            list: topCategory.map((item) => {
                return { name: item };
            }),
        };
    },
    mutations: {
        setList(state, payload) {
            state.list = payload;
        },
        show(state, id) {
            const currentCategory = state.list.find((item) => item.id === id);
            currentCategory.open = true;
        },
        hide(state, id) {
            const currentCategory = state.list.find((item) => item.id === id);
            currentCategory.open = false;
        },
    },
    actions: {
        async getList(context) {
            const data = await findAllCategory();
            data.result.forEach((top) => {
                top.open = false;
            });

            context.commit("setList", data.result);
        },
    },
};
