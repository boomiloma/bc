<template>
  <div class="flex flex-row relative" style="flex-direction: row">
    <div class="relative" style="width: 50%">
      <div class="absolute z-10 set-to-middle left">
        <img
          src="../../../assets/images/material-symbols_double-arrow-rounded-left.svg"
          width="80"
          @click="handleScroll(true, 'bigEyeId')"
          class="opacity-80 relative hover:opacity-100 hover:cursor-pointer"
        />
      </div>
      <div class="absolute z-10 set-to-middle right">
        <img
          src="../../../assets/images/material-symbols_double-arrow-rounded.svg"
          width="80"
          @click="handleScroll(false, 'bigEyeId')"
          class="opacity-80 relative hover:opacity-100 hover:cursor-pointer"
        />
      </div>
      <div
        class="grid bg-white"
        id="bigEyeId"
        ref="bigEyeId"
        style="width: 100%; overflow: hidden; height: 13.96vh"
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
            style="width: calc(42.3/2) !important;"
            :class="CheckPredict(BigEye, rowKey, colKey)"
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
    </div>
    <div class="relative" style="width: 50%">
      <div
        class="absolute z-10 set-to-middle left"
        style="width: 100%; overflow: hidden"
      >
        <img
          src="../../../assets/images/material-symbols_double-arrow-rounded-left.svg"
          width="80"
          @click="handleScroll(true, 'customRoadId')"
          class="opacity-80 relative hover:opacity-100 hover:cursor-pointer"
        />
      </div>
      <div class="absolute z-10 set-to-middle right">
        <img
          src="../../../assets/images/material-symbols_double-arrow-rounded.svg"
          width="80"
          @click="handleScroll(false, 'customRoadId')"
          class="opacity-80 relative hover:opacity-100 hover:cursor-pointer"
        />
      </div>
      <div
        class="grid bg-white"
        id="customRoadId"
        ref="customRoadId"
        style="width: 100%; overflow: hidden"
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
            :class="CheckPredict(CustomPlate, rowKey, colKey)"
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
  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
import MappingUtils from "../../../assets/js/roadmap/MappingUtils";
import { store } from "../../../store/store";
export default {
  components: {
    Icon,
  },
  props: [
    "BigEyeResults",
    "CustomPlateResults",
    "isChange",
    "BigEye",
    "CustomPlate",
  ],
  mounted() {
    setTimeout(() => {
      const bigEyeRoad = this.$refs.bigEyeId;
      const customRoad = this.$refs.customRoadId;
      bigEyeRoad.scrollLeft = bigEyeRoad.scrollWidth;
      customRoad.scrollLeft = customRoad.scrollWidth;
    }, 3000);
  },
  watch: {
    checkChange() {
      const bigEyeRoad = this.$refs.bigEyeId;
      const customRoad = this.$refs.customRoadId;

      if (store.results.length > 30) {
        this.$nextTick(() => {
          bigEyeRoad.scrollLeft = bigEyeRoad.scrollWidth;
        });
      }

      if (store.results.length > 48) {
        this.$nextTick(() => {
          customRoad.scrollLeft = customRoad.scrollWidth;
        });
      }
    },
  },
  computed: {
    checkChange() {
      return this.isChange;
    },
  },
  methods: {
    CheckPredict(Road, row, col) {
      return MappingUtils.CheckIfPredict(store.isPredict, Road, row, col);
    },
    handleScroll(isLeft, id) {
      if (isLeft) {
        if (id === "bigEyeId") {
          this.$refs.bigEyeId.scrollLeft -= 48;
        } else {
          this.$refs.customRoadId.scrollLeft -= 48;
        }
      } else {
        if (id === "customRoadId") {
          this.$refs.customRoadId.scrollLeft += 48;
        } else {
          this.$refs.bigEyeId.scrollLeft += 48;
        }
      }
    },
    customPlateValue(value) {
      return MappingUtils.CustomPlateClass(value);
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
