<template>
  <div class="relative flex flex-row items-stretch border-t-1 border-t-black">
    <div class="absolute z-10 set-to-middle left">
      <img
        src="../../../assets/images/material-symbols_double-arrow-rounded-left.svg"
        width="80"
        @click="handleScroll(true)"
        class="opacity-80 relative hover:opacity-100 hover:cursor-pointer"
      />
      <!-- <Icon
      icon="ic:round-keyboard-double-arrow-left"
      @click="handleScroll(true)"
      class="text-slate-500 opacity-40 relative top-24 left-1 hover:scale-110 hover:opacity-100 hover:cursor-pointer custombg-color"
      width="100"
    />-->
    </div>
    <div class="absolute z-10 set-to-middle right">
      <img
        src="../../../assets/images/material-symbols_double-arrow-rounded.svg"
        width="80"
        @click="handleScroll(false)"
        class="opacity-80 relative hover:opacity-100 hover:cursor-pointer"
      />
      <!-- <Icon
      icon="ic:round-keyboard-double-arrow-right"
      @click="handleScroll(false)"
      class="text-slate-500 opacity-40 relative top-24 left-96 hover:scale-110 hover:opacity-100 hover:cursor-pointer custombg-color"
      width="100"
      style="left: 52rem"
    /> -->
    </div>
    <!-- {{BigRoadResults}} -->
    <div
      class="grid bg-white"
      id="bigroadId"
      ref="bigroadId"
      style="
        width: 100%;
        overflow: hidden;
        height: calc(28.5vh - 6px);
        display: flex;
        flex-direction: column;
      "
    >
      <div
        v-for="(row, rowKey) in BigRoadResults"
        :key="rowKey"
        class="grid__row"
        style="height: calc(100% / 6)"
      >
        <div
          v-for="(col, colKey) in row"
          :key="colKey"
          class="grid__col__big__road text-gray-200"
          :class="CheckPredict(BigRoad, rowKey, colKey)"
        >
          <div class="rounded-full w-6 h-6" :class="bigRoadResult(col.value)">
            <p
              v-if="col.tie_count > 1"
              class="text-black"
              style="
                font-size: 22px;
                padding: 1px;
                color: #00c036;
                font-weight: 700;
                top: -2px;
              "
            >
              {{ col.tie_count }}
            </p>
            <div class="green-slash" v-if="col.tie_count === 1">
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
import MappingUtils from "../../../assets/js/roadmap/MappingUtils";
import { store } from "../../../store/store";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Icon,
  },
  props: ["BigRoadResults", "isChange", "BigRoad"],
  mounted() {
    this.startVideoLoop();
  },
  methods: {
    startVideoLoop() {
      const videoElement = this.$refs.videoElement;

      // Function to play the video again after 30 minutes
      const playVideoAgain = () => {
        videoElement.currentTime = 0; // Reset the video to the beginning
        videoElement.play(); // Start playing the video
      };

      // Wait for 30 minutes before playing the video again
      setTimeout(playVideoAgain, 5 * 60 * 1000); // 5 minutes in milliseconds
    },

    bigRoadResult(value) {
      return MappingUtils.BigRoadResult(value);
    },
    handleScroll(isLeft) {
      // console.log("this.store.result", this.store.results);
      if (this.store.results.length > 32) {
        if (isLeft) {
          this.$refs.bigroadId.scrollLeft -= 48;
        } else {
          this.$refs.bigroadId.scrollLeft += 48;
        }
      }
    },
    CheckPredict(BigRoad, row, col) {
      return MappingUtils.CheckIfPredict(store.isPredict, BigRoad, row, col);
    },
    handleScrollEnd(){
      const bigroadElement = this.$refs.bigroadId;
      if (this.store.results.length > 32) {
        setTimeout(() => {
          this.$refs.bigroadId.scrollLeft = bigroadElement.scrollWidth;
        }, 600);
      }
    }
  },
  mounted() {
    const bigroadElement = this.$refs.bigroadId;
    setTimeout(() => {
      if (this.store.results.length > 32) {
        this.$refs.bigroadId.scrollLeft = bigroadElement.scrollWidth;
      }
    }, 600);
  },
  watch: {
    checkChange() {
      this.handleScrollEnd();
    },
    checkChangePredit(){
      this.handleScrollEnd();
    }
  },
  computed: {
    checkChange() {
      return this.isChange;
    },
    checkChangePredit() {
      return store.isPredict;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/roadmaps/BigRoad.scss";
</style>
