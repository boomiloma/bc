<template>
  <div class="relative" style="display: block; width: 100%">
    <div class="absolute z-10 set-to-middle left">
      <img
        src="../../../assets/images/material-symbols_double-arrow-rounded-left.svg"
        width="80"
        @click="handleScroll(true)"
        class="opacity-80 relative hover:opacity-100 hover:cursor-pointer"
      />
    </div>
    <div class="absolute z-10 set-to-middle right">
      <img
        src="../../../assets/images/material-symbols_double-arrow-rounded.svg"
        width="80"
        @click="handleScroll(false)"
        class="opacity-80 relative hover:opacity-100 hover:cursor-pointer"
      />
    </div>
    <div
      class="grid bg-white"
      id="beadRoadId"
      ref="beadRoadId"
      style="width: 100%; overflow: hidden; margin-bottom: 6px"
    >
      <div v-for="(row, rowKey) in BreadPlateResults" :key="rowKey" class="grid__row">
        <div
          v-for="(col, colKey) in row"
          :key="colKey"
          class="grid__col text-gray-200"
          :class="handleEdit(rowKey, colKey, col)"
        >
          <div :class="beadRoadResult(col.value)">
            <span
              v-if="beadRoadBankerPair(col.value)"
              class="absolute -top-1 -left-1 inline-flex items-center rounded-full bg-red-500 w-4 h-4"
            ></span>
            <span
              v-if="beadRoadPlayerPair(col.value)"
              class="absolute -bottom-2 -right-1 inline-flex items-center rounded-full bg-blue-500 w-4 h-4"
            ></span>
            <div>
              <p v-if="col.value" class="text-center text-3xl select-none">
                {{ $t(beadRoadValue(col.value)) }}
              </p>
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
import { useI18n } from "vue-i18n";
import MappingUtils from "../../../assets/js/roadmap/MappingUtils";
import { store } from "../../../store/store";
export default {
  components: {
    Icon,
  },
  setup() {
    const { t } = useI18n({ useScope: "global" });
    return { t };
  },
  props: ["BreadPlateResults", "results", "isChange", "isReplace", "Breadplate"],
  mounted() {
    // setTimeout(() => {
    //   const bigroadElement = this.$refs.beadRoadId;
    //   this.$refs.beadRoadId.scrollLeft = bigroadElement.scrollWidth;
    // }, 3000);
  },
  watch: {
    checkChange() {
      const bigroadElement = this.$refs.beadRoadId;
      if (this.BreadPlateResults.length > 24)
        this.$refs.beadRoadId.scrollLeft = bigroadElement.scrollWidth;
    },
  },
  computed: {
    checkChange() {
      return this.isChange;
    },
    checkChange() {
      return store.isPredict;
    },
  },
  data() {
    return {
      navCol: 0,
      navRow: 0,
      currentRow: 0,
      currentCol: 0,
      maxRowlength: 0,
      maxColLength: 0,
      colIndex: 0,
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyPress);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  },
  methods: {
    handleScroll(isLeft) {
      if (this.BreadPlateResults.length > 24) {
        if (isLeft) {
          this.$refs.beadRoadId.scrollLeft -= 48;
        } else {
          this.$refs.beadRoadId.scrollLeft += 48;
        }
      }
    },
    beadRoadResult(value) {
      return MappingUtils.BeadRoadResult(value);
    },
    beadRoadValue(value) {
      return MappingUtils.BeadRoadValue(value);
    },
    beadRoadBankerPair(value) {
      return MappingUtils.BeadRoadBankerPair(value);
    },
    beadRoadPlayerPair(value) {
      return MappingUtils.BeadRoadPlayerPair(value);
    },
    handleKeyPress(event) {
      if (this.isReplace && localStorage.getItem("KEYBOARD_GAME") === "false") {
        const { key } = event;
        switch (key) {
          case "8":
            if (this.currentRow > 0) this.navRow -= 1; // Move up one row
            break;
          case "4":
            if (this.currentCol > 0) this.navCol -= 1; // Move left one column
            break;
          case "6":
            if (this.currentCol + 1 < this.maxRowlength) this.navCol += 1; // Move right one column
            break;
          case "2":
            const test = this.Breadplate.matrix[this.currentRow + 1][this.currentCol];
            if (test && test !== 0 && this.currentRow < 5) this.navRow += 1; // Move down one row
            break;
          default:
            break;
        }
      }
    },
    handleEdit(rowKey, colKey, value) {
      if (value && this.isReplace) {
        const navRow = this.navRow + this.Breadplate.previousCoordinates[0];
        const navCol = this.navCol + this.Breadplate.previousCoordinates[1];

        if (rowKey === navRow && colKey === navCol) {
          const rowLength = this.Breadplate.matrix[rowKey].filter((item) => item.value)
            .length;

          this.currentRow = rowKey;
          this.currentCol = colKey;
          this.maxRowlength = rowLength;
          this.colIndex = value.index;
          return "bg-yellow-200";
        }
        this.$emit("colIndex", this.colIndex);
      }
      if (this.isReplace === false) {
        return MappingUtils.CheckIfPredict(
          store.isPredict,
          this.Breadplate,
          rowKey,
          colKey
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/roadmaps/BeadPlate.scss";
</style>
