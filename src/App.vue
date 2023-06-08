<template>
  <div>
    <RouterView />
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted, ref } from "vue";
import useUser from "@/composables/useUser";

const { all } = useUser();
const user = ref([]);

const onGetUser = async () => {
  let u = await all();
  console.log(u, "user");
};
onMounted(() => {
  onGetUser();
});
</script>

<style lang="scss">
@import "./styles/index";

* {
  box-sizing: border-box !important;
}

body,
html,
#app {
  min-height: 100vh;
  height: 100%;
  // width: 100%;
  display: flex;
  flex-direction: row;
  background-color: rgb(0, 0, 0);
  color: theme("colors.blue.50");
}
</style>
