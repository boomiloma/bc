<template>
  <div class="absolute z-10">
    <Icon
      icon="ic:round-keyboard-double-arrow-left"
      @click="handleScroll(true)"
      class="text-slate-500 opacity-40 relative top-24 left-1 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
      width="100"
    />
  </div>
  <div class="absolute z-10">
    <Icon
      icon="ic:round-keyboard-double-arrow-right"
      @click="handleScroll(false)"
      class="text-slate-500 opacity-40 relative top-24 left-96 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
      width="100"
      style="left: 52rem"
    />
  </div>
  <div
    class="grid bg-white"
    id="beadRoadId"
    ref="beadRoadId"
    style="width: 58.6rem; overflow: hidden"
  >
    <div
      v-for="(row, rowKey) in BreadPlateResults"
      :key="rowKey"
      class="grid__row"
    >
      <div
        v-for="(col, colKey) in row"
        :key="colKey"
        class="grid__col text-gray-200"
      >
        <div :class="beadRoadResult(col.value)">
          <span
            v-if="
              (col && col.value === 'q') ||
              (col && col.value === 'w') ||
              (col && col.value === 'f') ||
              (col && col.value === 'g') ||
              (col && col.value === 'i') ||
              (col && col.value === 'j')
            "
            class="absolute -top-2 -left-2 inline-flex items-center rounded-full bg-red-500 px-2 py-2 border border-1 border-amber-200"
          ></span>
          <span
            v-if="
              (col && col.value === 'e') ||
              (col && col.value === 'h') ||
              (col && col.value === 'g') ||
              (col && col.value === 'w') ||
              (col && col.value === 'j') ||
              (col && col.value === 'k')
            "
            class="absolute -bottom-3 -right-2 inline-flex items-center rounded-full bg-blue-500 px-2 py-2 border border-1 border-amber-200"
          ></span>
          <div>
            <p v-if="col.value" class="font-extrabold text-3xl select-none">
              {{ beadRoadValue(col.value) }}
            </p>
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
  props: ["BreadPlateResults", "results", "isChange"],
  watch: {
    checkChange() {
      if (this.isChange > 53) this.$refs.beadRoadId.scrollLeft += 49;
    },
  },
  computed: {
    checkChange() {
      if (this.isChange > 53) this.$refs.beadRoadId.scrollLeft += 40;
    },
  },
  methods: {
    handleScroll(isLeft) {
      console.log("🚀 ~ file: BreadPlate.vue:191 ~ isChange:", this.isChange);

      if (isLeft) {
        this.$refs.beadRoadId.scrollLeft -= 40;
      } else {
        this.$refs.beadRoadId.scrollLeft += 40;
      }
    },
    beadRoadResult(value) {
      let beadRoadClass = "";
      switch (value) {
        case "b":
          beadRoadClass = "banker";
          break;
        case "p":
          beadRoadClass = "player";
          break;
        case "t":
          beadRoadClass = "tie";
          break;
        case "q":
          beadRoadClass = "banker";
          break;
        case "w":
          beadRoadClass = "banker";
          break;
        case "e":
          beadRoadClass = "banker";
          break;
        case "f":
          beadRoadClass = "player";
          break;
        case "g":
          beadRoadClass = "player";
          break;
        case "h":
          beadRoadClass = "player";
          break;
        case "i":
          beadRoadClass = "tie";
          break;
        case "j":
          beadRoadClass = "tie";
          break;
        case "k":
          beadRoadClass = "tie";
          break;
        default:
          break;
      }
      return (
        "flex flex-col justify-center items-center relative " + beadRoadClass
      );
    },
    beadRoadValue(value) {
      let returnValue = "";
      switch (value) {
        case "b":
          returnValue = "庄";
          break;
        case "p":
          returnValue = "闲";
          break;
        case "t":
          returnValue = "和";
          break;
        case "q":
          returnValue = "庄";
          break;
        case "w":
          returnValue = "庄";
          break;
        case "e":
          returnValue = "庄";
          break;
        case "f":
          returnValue = "闲";
          break;
        case "g":
          returnValue = "闲";
          break;
        case "h":
          returnValue = "闲";
          break;
        case "i":
          returnValue = "和";
          break;
        case "j":
          returnValue = "和";
          break;
        case "k":
          returnValue = "和";
          break;
        default:
          break;
      }
      return returnValue;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/roadmaps/BeadPlate.scss";
</style>
