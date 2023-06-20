<template>
  <div class="flex flex-row -mt-8">
    <div class="absolute">
      <Icon
        icon="ic:round-keyboard-double-arrow-left"
        @click="handleScroll(true, 'bigEyeId')"
        class="text-slate-500 z-10 opacity-40 relative top-4 left-1 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
      />
    </div>
    <div class="absolute">
      <Icon
        icon="ic:round-keyboard-double-arrow-right"
        @click="handleScroll(false, 'bigEyeId')"
        class="text-slate-500 z-10 opacity-40 relative top-4 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
        style="left: 30.7rem"
      />
    </div>
    <div
      class="grid bg-white"
      id="bigEyeId"
      ref="bigEyeId"
      style="width: 38.2rem; overflow: hidden"
    >
      <div
        v-for="(row, rowKey) in BigEyeResults"
        :key="rowKey"
        class="grid__row_diverse_road"
      >
        <div
          v-for="(col, colKey) in row"
          :key="colKey"
          class="grid__col__Big_eye text-gray-200"
        >
          <div
            v-if="col && col.value"
            :class="{
              banker_big_eye: col && col.value === 'red',
              player_big_eye: col && col.value === 'blue',
            }"
          ></div>
        </div>
      </div>
    </div>

    <div class="absolute">
      <Icon
        icon="ic:round-keyboard-double-arrow-left"
        @click="handleScroll(true, 'customRoadId')"
        class="text-slate-500 z-10 opacity-40 relative top-4 left-1 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
        style="left: 39.5rem"
      />
    </div>
    <div class="absolute">
      <Icon
        icon="ic:round-keyboard-double-arrow-right"
        @click="handleScroll(false, 'customRoadId')"
        class="text-slate-500 z-10 opacity-40 relative top-4 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
        style="left: 69rem"
      />
    </div>
    <div
      class="grid bg-white"
      id="customRoadId"
      ref="customRoadId"
      style="width: 38.3rem; overflow: hidden"
    >
      <div
        v-for="(row, rowKey) in CustomPlateResults"
        :key="rowKey"
        class="grid__row__custom__road"
      >
        <div
          v-for="(col, colKey) in row"
          :key="colKey"
          class="grid__col__custom__road text-gray-200"
        >
          <div
            v-if="col && col.value"
            class="rounded-full w-4 h-4"
            :class="customPlateValue(col.value)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  props: ["BigEyeResults", "CustomPlateResults", "isChange"],
  watch: {
    checkChange() {
      const bigEyeRoad = this.$refs.bigEyeId;
      const CustomRoad = this.$refs.customRoadId;

      if (this.isChange > 30) {
        this.$refs.bigEyeId.scrollLeft = bigEyeRoad.scrollWidth;
        this.$refs.customRoadId.scrollLeft = CustomRoad.scrollWidth;
      }
    },
  },
  computed: {
    checkChange() {
      return this.isChange;
    },
  },
  methods: {
    handleScroll(isLeft, id) {
      if (isLeft) {
        if (id === "bigEyeId") {
          this.$refs.bigEyeId.scrollLeft -= 40;
        } else {
          this.$refs.customRoadId.scrollLeft -= 40;
        }
      } else {
        if (id === "customRoadId") {
          this.$refs.customRoadId.scrollLeft += 40;
        } else {
          this.$refs.bigEyeId.scrollLeft += 40;
        }
      }
    },
    customPlateValue(value) {
      let customPlateClass = "";
      switch (value) {
        case "b":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "p":
          customPlateClass = "player_custom_big_eye";
          break;
        case "t":
          customPlateClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "q":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "w":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "e":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "f":
          customPlateClass = "player_custom_big_eye";
          break;
        case "g":
          customPlateClass = "player_custom_big_eye";
          break;
        case "h":
          customPlateClass = "player_custom_big_eye";
          break;
        case "z":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "r":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "s":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "u":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "a":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "aq":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "aw":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "ae":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "c":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "cq":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "cw":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "ce":
          customPlateClass = "banker_custom_big_eye";
          break;
        case "d":
          customPlateClass = "player_custom_big_eye";
          break;
        case "df":
          customPlateClass = "player_custom_big_eye";
          break;
        case "dg":
          customPlateClass = "player_custom_big_eye";
          break;
        case "dh":
          customPlateClass = "player_custom_big_eye";
          break;
        case "x":
          customPlateClass = "player_custom_big_eye";
          break;
        case "xf":
          customPlateClass = "player_custom_big_eye";
          break;
        case "xg":
          customPlateClass = "player_custom_big_eye";
          break;
        case "xh":
          customPlateClass = "player_custom_big_eye";
          break;
        case "v":
          customPlateClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "vi":
          customPlateClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "vj":
          customPlateClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "vk":
          customPlateClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "y":
          customPlateClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "yi":
          customPlateClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "yj":
          customPlateClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "yk":
          customPlateClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        default:
          break;
      }
      return (
        "flex flex-col justify-center items-center relative " + customPlateClass
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/roadmaps/BigEye.scss";
// :root {
//   --dynamic-cols: 30; /* Set the initial value of dynamic-cols */
// }
</style>
