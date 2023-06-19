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
              (col && col.value === 'j') ||
              (col && col.value === 'z') ||
              (col && col.value === 'r') ||
              (col && col.value === 'u')
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
              (col && col.value === 'k') ||
              (col && col.value === 's') ||
              (col && col.value === 'u')
            "
            class="absolute -bottom-3 -right-2 inline-flex items-center rounded-full bg-blue-500 px-2 py-2 border border-1 border-amber-200"
          ></span>
          <div>
            <p v-if="col.value" class="font-extrabold text-3xl select-none">
              {{ $t(beadRoadValue(col.value)) }}
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
import { useI18n } from "vue-i18n";
export default {
  components: {
    Icon,
  },
  setup() {
    const { t } = useI18n({ useScope: "global" });
    return { t };
  },
  props: [
    "BreadPlateResults",
    "results",
    "isChange",
    "isReplace",
    "Breadplate",
  ],
  watch: {
    checkChange() {
      const bigroadElement = this.$refs.beadRoadId;
      if (this.isChange > 52)
        this.$refs.beadRoadId.scrollLeft = bigroadElement.scrollWidth;
    },
  },
  computed: {
    checkChange() {
      return this.isChange;
    },
  },
  methods: {
    handleScroll(isLeft) {
      console.log(
        "🚀 ~ file: BreadPlate.vue:191 ~ isChange:",
        this.Breadplate,
        this.isReplace
      );

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
        case "z":
          beadRoadClass = "banker";
        case "r":
          beadRoadClass = "banker";
        case "s":
          beadRoadClass = "banker";
        case "u":
          beadRoadClass = "banker";
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
          returnValue = "b";
          break;
        case "p":
          returnValue = "p";
          break;
        case "t":
          returnValue = "t";
          break;
        case "q":
          returnValue = "b";
          break;
        case "w":
          returnValue = "b";
          break;
        case "e":
          returnValue = "b";
          break;
        case "f":
          returnValue = "p";
          break;
        case "g":
          returnValue = "p";
          break;
        case "h":
          returnValue = "p";
          break;
        case "i":
          returnValue = "t";
          break;
        case "j":
          returnValue = "t";
          break;
        case "k":
          returnValue = "6";
        case "z":
          returnValue = "6";
        case "r":
          returnValue = "6";
        case "s":
          returnValue = "6";
        case "u":
          returnValue = "6";
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
