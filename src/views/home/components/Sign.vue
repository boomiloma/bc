<template>
  <div
    class="border-l-4 border-b-4 border-solid border-black text-black w-36 bg-white"
  >
    <div class="flex flex-row items-center justify-center pb-2 border-b-2 mb-1">
      <p class="text-2xl font-bold">庄闲问路</p>
    </div>
    <div class="flex flex-col gap-5 justify-center">
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
          <span class="main"> 闲 </span>
        </div>
        <div class="player-hollow pw">
          <span class="main"> 庄 </span>
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
    <div class="flex flex-row items-start justify-center border-b-2 pb-2">
      <p class="text-2xl font-bold">{{ results.length / 2 }}</p>
    </div>
    <div class="flex flex-col gap-2 justify-center">
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-2"
      >
        <span class="text-xl font-bold text-red-500 mx-2"> 庄 </span>
        <span class="text-xl font-bold text-red-500 mx-2"> 14 </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-2"
      >
        <span class="text-xl font-bold text-blue-500 mx-2"> 闲 </span>
        <span class="text-xl font-bold text-blue-500 mx-2"> 14 </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-2"
      >
        <span class="text-xl font-bold text-green-500 mx-2"> 和 </span>
        <span class="text-xl font-bold text-green-500 mx-2"> 14 </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-2"
      >
        <span class="text-xl font-bold text-red-500 mx-2"> 庄对 </span>
        <span class="text-xl font-bold text-red-500 mx-2"> 14 </span>
      </div>
      <div class="flex flex-row items-center justify-between gap-2">
        <span class="text-xl font-bold text-blue-500 mx-2"> 闲对 </span>
        <span class="text-xl font-bold text-blue-500 mx-2"> 14 </span>
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
          <div class="border-b-2 w-full font-extrabold">USD : 199-200</div>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["results"],
};
</script>
<style lang="scss" scoped>
@import "../styles/roadmaps/Sign.scss";
</style>
