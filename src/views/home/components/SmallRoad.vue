<template>
  <div class="flex flex-row">
  <div class="relative">
    <div class="absolute z-10 set-to-middle left">
      <img src="../../../assets/images/material-symbols_double-arrow-rounded-left.svg" width="80" @click="handleScroll(true, 'smallRoadId')"  class="opacity-80 relative hover:opacity-100 hover:cursor-pointer" />
    </div>
    <div class="absolute z-10 set-to-middle right">
      <img src="../../../assets/images/material-symbols_double-arrow-rounded.svg" width="80" @click="handleScroll(false, 'smallRoadId')"  class="opacity-80 relative hover:opacity-100 hover:cursor-pointer" />
    </div>
    <div
      class="grid bg-white"
      id="smallRoadId"
      ref="smallRoadId"
      style="width: 38.2rem; overflow: hidden"
    >
      <div
        v-for="(row, rowKey) in SmallRoadResults"
        :key="rowKey"
        class="grid__row_diverse_road"
      >
        <div
          v-for="(col, colKey) in row"
          :key="colKey"
          class="grid__col__small_road"
          :class="CheckPredict(SmallRoad, rowKey, colKey)"
        >
          <div
            class="rounded-full w-6 h-6"
            :class="{
              'banker-fill-small-road': col && col.value === 'red',
              'player-fill-small-road': col && col.value === 'blue',
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>

    <!-- COCKROACH ROAD -->
<div class="relative cockroach">
  <div class="absolute set-to-middle left">
    <img src="../../../assets/images/material-symbols_double-arrow-rounded-left.svg" width="80" @click="handleScroll(true, 'smallRoadId')"  class="opacity-80 relative hover:opacity-100 hover:cursor-pointer" />
    </div>
    <div class="absolute set-to-middle right">
      <img src="../../../assets/images/material-symbols_double-arrow-rounded.svg" width="80" @click="handleScroll(false, 'smallRoadId')"  class="opacity-80 relative hover:opacity-100 hover:cursor-pointer" />
    </div>
    <div
      class="grid bg-white"
      id="cockroachRoadId"
      ref="cockroachRoadId"
      style="width: 38.4rem; overflow: hidden"
    >
      <div
        v-for="(row, rowKey) in CockRoachResults"
        :key="rowKey"
        class="grid__row_diverse_road"
      >
        <div
          v-for="(col, colKey) in row"
          :key="colKey"
          class="grid__col__small_road"
          :class="CheckPredict(CockRoach, rowKey, colKey)"
        >
          <div v-if="col.value === `red`" class="red-slash">
            <span class="slash"></span>
          </div>
          <div v-if="col.value === `blue`" class="blue-slash">
            <span class="slash"></span>
          </div>
        </div>
      </div>
    </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
import { store } from "../../../store/store";
import MappingUtils from "../../../assets/js/roadmap/MappingUtils";
export default {
  components: {
    Icon,
  },
  props: [
    "SmallRoadResults",
    "CockRoachResults",
    "isChange",
    "SmallRoad",
    "CockRoach",
  ],
  watch: {
    checkChange() {
      const smallRoad = this.$refs.smallRoadId;
      const cockroachRoad = this.$refs.cockroachRoadId;
      if (this.isChange > 30) {
        setTimeout(() => {
          this.$refs.smallRoadId.scrollLeft = smallRoad.scrollWidth;
          this.$refs.cockroachRoadId.scrollLeft = cockroachRoad.scrollWidth;
        }, 600);
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
        if (id === "smallRoadId") {
          this.$refs.smallRoadId.scrollLeft -= 40;
        } else {
          this.$refs.cockroachRoadId.scrollLeft -= 40;
        }
      } else {
        if (id === "smallRoadId") {
          this.$refs.smallRoadId.scrollLeft += 40;
        } else {
          this.$refs.cockroachRoadId.scrollLeft += 40;
        }
      }
    },
    CheckPredict(Road, row, col) {
      return MappingUtils.CheckIfPredict(store.isPredict, Road, row, col);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/roadmaps/SmallRoad.scss";
</style>
