<template>
  <div class="flex flex-row">
    <div class="absolute">
      <Icon
        icon="ic:round-keyboard-double-arrow-left"
        @click="handleScroll(true, 'smallRoadId')"
        class="text-slate-500 z-10 opacity-40 relative top-4 left-1 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
      />
    </div>
    <div class="absolute">
      <Icon
        icon="ic:round-keyboard-double-arrow-right"
        @click="handleScroll(false, 'smallRoadId')"
        class="text-slate-500 z-10 opacity-40 relative top-4 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
        style="left: 30.7rem"
      />
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
    <!-- COCKROACH ROAD -->

    <div class="absolute">
      <Icon
        icon="ic:round-keyboard-double-arrow-left"
        @click="handleScroll(true, 'cockroachRoadId')"
        class="text-slate-500 z-10 opacity-40 relative top-4 left-1 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
        style="left: 39.5rem"
      />
    </div>
    <div class="absolute">
      <Icon
        icon="ic:round-keyboard-double-arrow-right"
        @click="handleScroll(false, 'cockroachRoadId')"
        class="text-slate-500 z-10 opacity-40 relative top-4 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
        style="left: 69rem"
      />
    </div>
    <div
      class="grid bg-white"
      id="cockroachRoadId"
      ref="cockroachRoadId"
      style="width: 38.3rem; overflow: hidden"
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
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  props: ["SmallRoadResults", "CockRoachResults"],
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
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/roadmaps/SmallRoad.scss";
</style>
