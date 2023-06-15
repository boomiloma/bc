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

onInit();
async function onInit() {
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`);
    return;
  }
  const request = window.indexedDB.open("Baccarat", 4);
  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`);
  };
  request.onsuccess = (event) => {
    const db = event.target.result;
  };
  request.onupgradeneeded = (event) => {
    let db = event.target.result;
    let Shoe = db.createObjectStore("Shoe", {
      autoIncrement: true,
    });
    Shoe.createIndex("date", "date", {
      unique: true,
    });
  };
}

const onGetUser = async () => {
  let u = await all();
  console.log(u, "user");
};
onMounted(() => {
  // onGetUser();
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // align-items: center;
  background-color: rgb(0, 0, 0);
  color: theme("colors.blue.50");
}
</style>
