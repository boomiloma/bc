<template>
  <div class="relative flex flex-row items-stretch border-t-1 border-t-black">
    <div class="grid bg-white">
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
          src="@/assets/images/kk-baccarat-logo-animation-3.gif.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  props: ["BigRoadResults"],
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
      setTimeout(playVideoAgain, 1 * 60 * 1000); // 30 minutes in milliseconds
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
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/roadmaps/BigRoad.scss";
</style>
