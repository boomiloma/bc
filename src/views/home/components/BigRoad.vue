<template>
  <div class="flex flex-row items-stretch border-t-2 border-t-black">
    <div class="grid bg-white">
      <div
        v-for="(row, rowKey) in BigRoadResults"
        :key="rowKey"
        class="grid__row"
      >
        <div
          v-for="(col, colKey) in row"
          :key="colKey"
          class="grid__col__big__road text-gray-200"
        >
          <div
            class="rounded-full w-6 h-6"
            :class="bigRoadResult(col.value)"
          ></div>
        </div>
      </div>
    </div>
    <div>
      <img src="@/assets/images/logo.jpg" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  props: ["BigRoadResults"],
  methods: {
    bigRoadResult(value) {
      let bigRoadClass = "";
      switch (value) {
        case "b":
          bigRoadClass = "banker_big_road";
          break;
        case "p":
          bigRoadClass = "player_big_road";
          break;
        case "t":
          bigRoadClass = "border-green-500 bg-transparent  border-4";
          break;
        case "q":
          bigRoadClass = "banker_big_road";
          break;
        case "w":
          bigRoadClass = "banker_big_road";
          break;
        case "e":
          bigRoadClass = "banker_big_road";
          break;
        case "f":
          bigRoadClass = "player_big_road";
          break;
        case "g":
          bigRoadClass = "player_big_road";
          break;
        case "h":
          bigRoadClass = "player_big_road";
          break;
        case "i":
          bigRoadClass = "border-green-500 bg-transparent  border-4";
          break;
        case "j":
          bigRoadClass = "border-green-500 bg-transparent  border-4";
          break;
        case "k":
          bigRoadClass = "border-green-500 bg-transparent  border-4";
          break;
        default:
          break;
      }
      return (
        "flex flex-col justify-center items-center relative " + bigRoadClass
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/Home.scss";
</style>
