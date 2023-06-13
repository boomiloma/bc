<template>
  <div
    class="border-l-4 border-b-4 border-solid border-black text-black w-36 bg-white"
  >
    <div class="flex flex-row items-center justify-center border-b-2">
      <p class="text-2xl font-bold">庄闲问路</p>
    </div>
    <div class="flex flex-col gap-5 justify-center mt-1">
      <div class="flex flex-row items-center justify-evenly gap-1">
        <div class="banker-fill">
          <span class="main"> 庄 </span>
        </div>
        <div class="player-fill">
          <span class="main"> 闲 </span>
        </div>
      </div>
      <div class="flex flex-row items-center justify-evenly gap-1">
        <div class="banker-hollow bw">
          <span class="main"> </span>
        </div>
        <div class="player-hollow pw">
          <span class="main"> </span>
        </div>
      </div>
      <div class="flex flex-row items-center justify-evenly gap-1">
        <div class="banker-fill">
          <span class="main"> </span>
        </div>
        <div class="player-fill">
          <span class="main"> </span>
        </div>
      </div>
      <div class="flex flex-row items-center justify-evenly gap-1">
        <div class="red-slash">
          <span class="slash"></span>
        </div>
        <div class="blue-slash">
          <span class="slash"></span>
        </div>
      </div>
    </div>
  </div>

  <div
    class="border border-l-4 border-b-4 border-black text-black w-36 bg-white"
  >
    <div class="flex flex-row items-start justify-center border-b-2">
      <p class="text-2xl font-bold">{{ results.length }}</p>
    </div>
    <div class="flex flex-col gap-2 justify-center">
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"
      >
        <span class="text-3xl font-bold text-red-500 mx-1"> 庄 </span>
        <span class="text-3xl font-bold text-red-500 mx-1">
          {{ filterBanker() }}
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"
      >
        <span class="text-3xl font-bold text-blue-500 mx-1"> 闲 </span>
        <span class="text-3xl font-bold text-blue-500 mx-1">
          {{ filterPlayer() }}
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"
      >
        <span class="text-3xl font-bold text-green-500 mx-1"> 和 </span>
        <span class="text-3xl font-bold text-green-500 mx-1">
          {{ filterTie() }}
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"
      >
        <span class="text-3xl font-bold text-red-500 mx-1"> 庄对 </span>
        <span class="text-3xl font-bold text-red-500 mx-1">
          {{ filterBankerPair() }}
        </span>
      </div>
      <div class="flex flex-row items-center justify-between gap-2">
        <span class="text-3xl font-bold text-blue-500 mx-1"> 闲对 </span>
        <span class="text-3xl font-bold text-blue-500 mx-1">
          {{ filterPlayerPair() }}
        </span>
      </div>
    </div>
  </div>
  <!-- Table Limit -->
  <div
    class="border border-1 border-solid border-l-0 items-stretch justify-center border-black text-black w-96 bg-white"
  >
    <div class="grid grid-cols-2">
      <div class="flex flex-row justify-center border-b-2 items-center">
        <p class="text-2xl font-bold">本台限红</p>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-2xl w-28 flex flex-row justify-center items-center font-bold text-black border-r-2"
        >
          庄/闲
        </div>
        <div
          class="text-2xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
        >
          <div class="border-b-2 w-full font-extrabold">USD : 1 - 900</div>
          <div class="font-extrabold">THB : 0-620</div>
        </div>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-2xl w-28 flex flex-row justify-center items-center font-bold text-black border-r-2"
        >
          和
        </div>
        <div
          class="text-2xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
        >
          <div class="border-b-2 w-full font-extrabold">USD : 199-200</div>
          <div class="font-extrabold">THB : 0-620</div>
        </div>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-2xl w-28 flex flex-row justify-center items-center font-bold text-black border-r-2"
        >
          对子
        </div>
        <div
          class="text-2xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
        >
          <div class="border-b-2 w-full font-extrabold">USD : 199-200</div>
          <div class="font-extrabold">THB : 0-620</div>
        </div>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-2xl w-28 flex flex-row justify-center items-center font-bold text-black border-r-2"
        >
          幸运6
        </div>
        <div
          class="text-2xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
        >
          <div class="border-b-2 w-full font-extrabold">USD : 199-200</div>
          <div class="font-extrabold">THB : 0-620</div>
          <!-- {{ store.setting }} -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from "@/store/store";
export default {
  data() {
    return {
      store,
    };
  },
  props: ["results"],
  methods: {
    filterBanker() {
      return this.results.filter(
        (result) =>
          result === "b" || result === "q" || result === "w" || result === "e"
      ).length;
    },
    filterPlayer() {
      return this.results.filter(
        (result) =>
          result === "p" || result === "f" || result === "g" || result === "h"
      ).length;
    },
    filterTie() {
      return this.results.filter(
        (result) =>
          result === "t" || result === "j" || result === "k" || result === "i"
      ).length;
    },
    filterBankerPair() {
      return this.results.filter(
        (result) =>
          result === "q" ||
          result === "w" ||
          result === "f" ||
          result === "g" ||
          result === "j" ||
          result === "i"
      ).length;
    },
    filterPlayerPair() {
      return this.results.filter(
        (result) =>
          result === "w" ||
          result === "e" ||
          result === "g" ||
          result === "h" ||
          result === "j" ||
          result === "k"
      ).length;
    },
    async onLoad() {
      let getSetting = await localStorage.getItem("setting");
      if (getSetting) {
        this.store.setting = JSON.parse(getSetting);
      }
    },
  },
  mounted() {
    this.onLoad();
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/roadmaps/Sign.scss";
</style>
