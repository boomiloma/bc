<template>
  <div class="flex flex-row">
    <div class="grid bg-white">
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
    <div class="grid bg-white">
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
export default {
  props: ["SmallRoadResults", "CockRoachResults"],
};
</script>

<style lang="scss" scoped>
@import "../styles/Home.scss";
</style>
