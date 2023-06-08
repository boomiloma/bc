<template>
        <div class="flex flex-row">
          <div class="grid bg-white">
            <div
              v-for="(row, rowKey) in roadmap.smallroad.matrix"
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
              v-for="(row, rowKey) in roadmap.cockroachPig.matrix"
              :key="rowKey"
              class="grid__row_diverse_road"
            >
              <div
                v-for="(col, colKey) in row"
                :key="colKey"
                class="grid__col__small_road"
              >
                <!-- <h4 class="text-2xl font-bold"> -->
                <div v-if="col.value === `red`" class="red-slash">
                  <span class="slash"></span>
                </div>
                <div v-if="col.value === `blue`" class="blue-slash">
                  <span class="slash"></span>
                </div>
                <!-- {{ col.value === "red" ? (<></>) : "" }} -->
                <!-- </h4> -->
              </div>
            </div>
          </div>
        </div>
</template>

<script>
// @ is an alias to /src
import Roadmap from "@/assets/js/roadmap/Roadmap";
import RoadmapUtilities from "@/assets/js/roadmap/RoadmapUtilities";
import Dialog from "@/components/BaseInputDialog.vue";

export default {
  name: "Home",
  components: {
    Dialog,
  },
  data() {
    return {
      dialogTitle: "My Dialog",
      dialogMessage: "Hello from the dialog!",
      results: [],
      roadmap: null,
      roadmapUtils: null,
      lastKeyPressed: null,
      config: {
        breadplate: {
          show_options: false,
          rows: 6,
          cols: 17,
        },
        bigroad: {
          show_options: false,
          rows: 6,
          cols: 30,
        },
        bigeyeboy: {
          show_options: false,
          rows: 6,
          cols: 30,
        },
        smallroad: {
          show_options: false,
          rows: 6,
          cols: 30,
        },
        cockroachPig: {
          show_options: false,
          rows: 6,
          cols: 30,
        },
      },
    };
  },

  watch: {
    config: {
      handler(val) {
        localStorage.setItem("roadmap-config", JSON.stringify(val));
      },
      deep: true,
    },
  },

  created() {
    this.initLocalConfig();
    this.roadmapUtils = new RoadmapUtilities();
    this.initRoadmap();
    window.addEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    initLocalConfig() {
      const localConfig = localStorage.getItem("roadmap-config");

      if (localConfig) {
        this.config = (() => {
          try {
            return JSON.parse(localConfig);
          } catch (error) {
            return this.config;
          }
        })();
      }
    },
    handleDialogButtonClick() {
      console.log("Button inside dialog was clicked!");
    },
    clearRoadmap() {
      this.results = [];
      this.initRoadmap();
    },

    countNotZero(arr) {
      return arr.filter((item) => item !== 0).length;
    },
    colorNextPrediction(arr) {
      const filterArray = arr.filter((item) => item !== 0);
      const filterArrayLength = arr.filter((item) => item !== 0).length;
      let color = [];
      for (let index = 0; index < filterArray.length; index++) {
        color.push(filterArray[index].value);
      }
      if (color.length >= 1) {
        return color[filterArrayLength - 1] === "red" ? "blue" : "red";
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
          beadRoadClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
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
          beadRoadClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "j":
          beadRoadClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "k":
          beadRoadClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
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
    initRoadmap() {
      this.roadmap = new Roadmap({
        results: this.results,
        config: this.config,
      });
    },

    push(key) {
      this.results.push(key);

      this.roadmap.push(key);
    },
    checkBigRoadMap() {
      // Get the value of second array of this.roadmap.bigroad.matrix
      const bigRoadMatrix = this.roadmap.bigroad.matrix;
      const bigRoadmatrixE1 = bigRoadMatrix[1];
      const bigRoadmatrixF = bigRoadMatrix[0];
      const bigRoadmatrixF1 = bigRoadmatrixF[5];
      const bigRoadmatrixE2 = bigRoadmatrixE1[4];
      if (
        bigRoadmatrixF1.value !== undefined ||
        bigRoadmatrixE2.value !== undefined
      ) {
        return true;
      }
      return false;
    },
    handleKeyDown(event) {
      this.lastKeyPressed = event.key;
      switch (event.key) {
        case "1":
          this.push("p");
          break;
        case "2":
          this.push("b");
          break;
        case "3":
          this.push("t");
          break;
        case "4":
          this.push("q"); // banker wins banker pair
          break;
        case "5":
          this.push("e"); // banker wins player pair
          break;
        case "6":
          this.push("w"); // banker wins banker-pair player-pair
          break;
        case "7":
          this.push("h"); // player wins player-pair
          break;
        case "8":
          this.push("f"); // player wins banker-pair
          break;
        case "9":
          this.push("g"); // player wins  banker-pair player-pair
          break;
        case "/":
          this.push("i"); // tie banker-pair
          break;
        case "*":
          this.push("k"); // tie player-pair
          break;
        case "-":
          this.push("j"); // tie player-pair banker-pair
          break;
        case "0":
          this.clearRoadmap();
          break;
        default:
          break;
      }
      console.log("###", this.roadmap.breadplate);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles/Home.scss";
</style>
