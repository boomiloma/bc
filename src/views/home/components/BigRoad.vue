<template>
  <div class="relative flex flex-row items-stretch border-t-1 border-t-black">
    <div class="absolute z-10">
      <Icon
        @click="handleScroll(true)"
        icon="ic:round-keyboard-double-arrow-left"
        class="text-slate-500 opacity-40 relative top-24 left-1 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
      />
    </div>
    <div class="absolute z-10">
      <Icon
        @click="handleScroll(false)"
        icon="ic:round-keyboard-double-arrow-right"
        class="text-slate-500 opacity-40 relative top-24 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
        style="left: 69rem"
      />
    </div>
    <!-- {{BigRoadResults}} -->
    <div
      class="grid bg-white"
      id="bigroadId"
      ref="bigroadId"
      style="width: 76.6rem; overflow: hidden"
    >
      <div
        v-for="(row, rowKey) in BigRoadResults"
        :key="rowKey"
        class="grid__row"
      >
        <div
          v-for="(col, colKey) in row"
          :key="colKey"
          class="grid__col__big__road text-gray-200"
          :class="CheckPredict(BigRoad, rowKey, colKey)"
        >
          <!-- <p class="text-black">{{ colKey }}</p> -->
          <div
            class="rounded-full w-6 h-6"
            :class="bigRoadResult(col.value)"
          ></div>
        </div>
      </div>
    </div>
    <div class="absolute right-5 -bottom-44">
      <video ref="videoElement" autoplay muted playsinline>
        <source
          src="@/assets/images/kk-baccarat-logo-animation-5.gif.mp4"
          type="video/mp4"
        />
      </video>
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
      if (isLeft) {
        this.$refs.bigroadId.scrollLeft -= 60;
      } else {
        this.$refs.bigroadId.scrollLeft += 60;
      }
    },
    CheckPredict(BigRoad, row, col) {
      return MappingUtils.CheckIfPredict(store.isPredict, BigRoad, row, col);
    },
  },
  watch: {
    checkChange() {
      const bigroadElement = this.$refs.bigroadId;
      if (this.isChange > 28) {
        setTimeout(() => {
          this.$refs.bigroadId.scrollLeft = bigroadElement.scrollWidth;
        }, 600);
      }
    },
  },
  computed: {
    checkChange() {
      return this.isChange;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/roadmaps/BigRoad.scss";
</style>
