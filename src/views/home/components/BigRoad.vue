<template>
  <div class="relative flex flex-row items-stretch border-t-1 border-t-black">
    <div class="absolute z-20">
      <Icon
        @click="handleScroll(true)"
        icon="ic:round-keyboard-double-arrow-left"
        class="text-slate-500 opacity-40 relative top-24 left-1 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
      />
    </div>
    <div class="absolute z-20">
      <Icon
        @click="handleScroll(false)"
        icon="ic:round-keyboard-double-arrow-right"
        class="text-slate-500 opacity-40 relative top-24 hover:scale-110 hover:opacity-100 hover:cursor-pointer"
        width="100"
        style="left: 69rem"
      />
    </div>
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
        >
          <div
            class="rounded-full w-6 h-6"
            :class="bigRoadResult(col.value)"
          ></div>
        </div>
      </div>
    </div>
    <div class="absolute -right-10 -bottom-20">
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
export default {
  components: {
    Icon,
  },
  props: ["BigRoadResults", "isChange"],
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
      let bigRoadClass = "";
      switch (value) {
        case "b":
          bigRoadClass = "banker_big_road";
          break;
        case "p":
          bigRoadClass = "player_big_road";
          break;
        case "t":
          bigRoadClass = "border-green-500 bg-transparent  border-4";
          break;
        case "q":
          bigRoadClass = "banker_big_road";
          break;
        case "w":
          bigRoadClass = "banker_big_road";
          break;
        case "e":
          bigRoadClass = "banker_big_road";
          break;
        case "f":
          bigRoadClass = "player_big_road";
          break;
        case "g":
          bigRoadClass = "player_big_road";
          break;
        case "h":
          bigRoadClass = "player_big_road";
          break;
        case "i":
          bigRoadClass = "border-green-500 bg-transparent  border-4";
          break;
        case "j":
          bigRoadClass = "border-green-500 bg-transparent  border-4";
          break;
        case "k":
          bigRoadClass = "border-green-500 bg-transparent  border-4";
          break;
        default:
          break;
      }
      return (
        "flex flex-col justify-center items-center relative " + bigRoadClass
      );
    },
    handleScroll(isLeft) {
      if (isLeft) {
        this.$refs.bigroadId.scrollLeft -= 60;
      } else {
        this.$refs.bigroadId.scrollLeft += 60;
      }
    },
  },
  watch: {
    checkChange() {
      // bigroadElement.scrollLeft = bigroadElement.scrollWidth - bigroadElement.clientWidth;
      // const bigroadElement = this.$refs.bigroadId;
      // bigroadElement.scrollLeft =
      //   bigroadElement.scrollWidth - bigroadElement.clientWidth;
      // this.$refs.bigroadId.scrollLeft += 20;
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
