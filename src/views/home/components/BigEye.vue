<template>
  <div class="flex flex-row -mt-8">
    <div class="grid bg-white">
      <div class="absolute">
        <Icon
          icon="ic:round-keyboard-double-arrow-left"
          class="text-slate-500 z-20 opacity-40 relative top-4 left-1 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
          width="100"
        />
      </div>
      <div class="absolute">
        <Icon
          icon="ic:round-keyboard-double-arrow-right"
          class="text-slate-500 z-20 opacity-40 relative top-4 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
          width="100"
          style="left: 35rem"
        />
      </div>
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
    <div class="grid bg-white">
      <div class="absolute">
        <Icon
          icon="ic:round-keyboard-double-arrow-left"
          class="text-slate-500 z-20 opacity-40 relative top-4 left-1 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
          width="100"
        />
      </div>
      <div class="absolute">
        <Icon
          icon="ic:round-keyboard-double-arrow-right"
          class="text-slate-500 z-20 opacity-40 relative top-4 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
          width="100"
          style="left: 35rem"
        />
      </div>
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
  props: ["BigEyeResults", "CustomPlateResults"],
  methods: {
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
        // case "i":
        //   customPlateClass =
        //     "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        //   break;
        // case "j":
        //   customPlateClass =
        //     "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        //   break;
        // case "k":
        //   customPlateClass =
        //     "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
        //   break;
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
</style>
