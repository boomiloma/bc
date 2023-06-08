<template>
  <div class="flex flex-row -mt-8">
    <div class="grid bg-white">
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
            class="rounded-full w-4 h-4"
            :class="{
              banker_big_eye: col && col.value === 'red',
              player_big_eye: col && col.value === 'blue',
            }"
          ></div>
        </div>
      </div>
    </div>
    <div class="grid bg-white">
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
            class="rounded-full w-4 h-4"
            :class="{
              banker_big_eye: col && col.value === 'red',
              player_big_eye: col && col.value === 'blue',
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  props: ["BigEyeResults"],
};
</script>

<style lang="scss" scoped>
@import "../styles/Home.scss";
</style>
