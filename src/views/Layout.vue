<template>
    <!-- 顶部通栏
  头部通栏
    底部通栏-->
    <AppTopNav />

    <AppHeader />
    <AppHeaderSticky />
    <div class="main">
        <RouterView />
    </div>
    <main class="app-body"></main>
    <AppFooder />
</template>

<script setup>
import AppTopNav from "../components/AppTopNav.vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooder from "../components/AppFooder.vue";
import { useStore } from "vuex";
import AppHeaderSticky from "../components/AppHeaderSticky.vue";
// export default {
//     name: "Layout",
//     components: { AppTopNav, AppHeader, AppFooder },
// };
const store = useStore()
store.dispatch('category/getList')

</script>

<style lang="less" scoped>
.app-body {
    min-height: 600px;
}
</style>
