<template>
  <div class="home">
    <div class="">
      <div v-if="roadmap" class="">
        <div class="flex flex-row items-stretch bg-white">
          <!-- BREAD PLATE ROADMAP -->
          <div class="grid">
            <div
              v-for="(row, rowKey) in roadmap.breadplate.matrix"
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
                    class="absolute top-0 left-0 inline-flex items-center rounded-full bg-red-400 px-1 py-1 text-md font-medium text-red-600 ring-1 ring-inset ring-grey-300/10"
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
                    class="absolute -bottom-1 right-0 inline-flex items-center rounded-full bg-blue-400 px-1 py-1 text-md font-medium text-blue-600 ring-1 ring-inset ring-grey-300/10"
                  ></span>
                  <div>
                    <p v-if="col.value" class="">
                      {{ beadRoadValue(col.value) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Prediction -->
          <div
            class="border-2 border-solid flex flex-col gap-5 justify-center border-black text-black w-60"
          >
            <div
              class="flex flex-row items-center justify-center border-b-2 pb-2"
            >
              <p class="text-2xl font-bold">庄闲问路</p>
            </div>
            <div class="flex flex-row items-center justify-evenly gap-10">
              <div class="banker-fill">
                <span class="main"> 庄 </span>
              </div>
              <div class="player-fill">
                <span class="main"> 闲 </span>
              </div>
            </div>
            <div class="flex flex-row items-center justify-evenly gap-10">
              <div class="banker-hollow bw">
                <span class="main"> 闲 </span>
              </div>
              <div class="player-hollow pw">
                <span class="main"> 庄 </span>
              </div>
            </div>
            <div class="flex flex-row items-center justify-evenly gap-10">
              <div class="banker-fill">
                <span class="main"> </span>
              </div>
              <div class="player-fill">
                <span class="main"> </span>
              </div>
            </div>
            <div class="flex flex-row items-center justify-evenly gap-10">
              <div class="red-slash">
                <span class="slash"></span>
              </div>
              <div class="blue-slash">
                <span class="slash"></span>
              </div>
            </div>
          </div>
          <!-- 22 -->
          <div
            class="border border-1 border-solid border-l-0 flex flex-col gap-7 justify-center border-black text-black w-60"
          >
            <div class="flex flex-row justify-center border-b-2 pb-2">
              <p class="text-2xl font-bold">22</p>
            </div>
            <div
              class="flex flex-row items-center justify-between gap-10 border-b-2"
            >
              <span class="text-xl font-bold text-red-500 mx-2"> 庄 </span>
              <span class="text-xl font-bold text-red-500 mx-2"> 14 </span>
            </div>
            <div
              class="flex flex-row items-center justify-between gap-10 border-b-2"
            >
              <span class="text-xl font-bold text-blue-500 mx-2"> 闲 </span>
              <span class="text-xl font-bold text-blue-500 mx-2"> 14 </span>
            </div>
            <div
              class="flex flex-row items-center justify-between gap-10 border-b-2"
            >
              <span class="text-xl font-bold text-green-500 mx-2"> 和 </span>
              <span class="text-xl font-bold text-green-500 mx-2"> 14 </span>
            </div>
            <div
              class="flex flex-row items-center justify-between gap-10 border-b-2"
            >
              <span class="text-xl font-bold text-red-500 mx-2"> 庄对 </span>
              <span class="text-xl font-bold text-red-500 mx-2"> 14 </span>
            </div>
            <div class="flex flex-row items-center justify-between gap-10">
              <span class="text-xl font-bold text-blue-500 mx-2"> 闲对 </span>
              <span class="text-xl font-bold text-blue-500 mx-2"> 14 </span>
            </div>
          </div>
          <!-- Table Limit -->
          <div
            class="border border-1 border-solid border-l-0 items-stretch justify-center border-black text-black w-60"
          >
            <div class="grid grid-cols-2">
              <div class="flex flex-row justify-center border-b-2 items-center">
                <p class="text-2xl font-bold">本台限红</p>
              </div>
              <div class="flex flex-row justify-center border-b-2">
                <div
                  class="text-xl w-20 flex flex-row justify-start items-center font-bold text-black border-r-2"
                >
                  庄/闲
                </div>
                <div
                  class="text-xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
                >
                  <div class="border-b-2 w-full">USD : 199-200</div>
                  <div>THB : 0-620</div>
                </div>
              </div>
              <div class="flex flex-row justify-center border-b-2">
                <div
                  class="text-xl w-20 flex flex-row justify-start items-center font-bold text-black border-r-2"
                >
                  和
                </div>
                <div
                  class="text-xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
                >
                  <div class="border-b-2 w-full">USD : 199-200</div>
                  <div>THB : 0-620</div>
                </div>
              </div>
              <div class="flex flex-row justify-center border-b-2">
                <div
                  class="text-xl w-20 flex flex-row justify-start items-center font-bold text-black border-r-2"
                >
                  对子
                </div>
                <div
                  class="text-xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
                >
                  <div class="border-b-2 w-full">USD : 199-200</div>
                  <div>THB : 0-620</div>
                </div>
              </div>
              <div class="flex flex-row justify-center border-b-2">
                <div
                  class="text-xl w-20 flex flex-row justify-start items-center font-bold text-black border-r-2"
                >
                  幸运6
                </div>
                <div
                  class="text-xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
                >
                  <div class="border-b-2 w-full">USD : 199-200</div>
                  <div>THB : 0-620</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Big ROAD -->
        <div class="flex flex-row items-stretch border-t-2 border-t-black">
          <div class="grid bg-white">
            <div
              v-for="(row, rowKey) in roadmap.bigroad.matrix"
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
          <div>
            <img src="@/assets/images/logo.jpg" />
          </div>
        </div>
        <!-- Big Eye Road -->
        <div class="flex flex-row -mt-8">
          <div class="grid bg-white">
            <div
              v-for="(row, rowKey) in roadmap.bigeyeboy.matrix"
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
                <!-- <div
                  v-if="
                    checkBigRoadMap() &&
                    rowKey === 0 &&
                    colKey === countNotZero(row)
                  "
                  class="rounded-full w-4 h-4 animate-pulse"
                  :class="{
                    'border-red-500 bg-transparent  border-4':
                      colorNextPrediction(row) === 'red',
                    'border-blue-500 bg-transparent  border-4':
                      colorNextPrediction(row) === 'blue',
                  }"
                ></div>
                <div
                  v-if="
                    checkBigRoadMap() &&
                    rowKey === 0 &&
                    colKey === countNotZero(row) + 1
                  "
                  class="rounded-full w-4 h-4 animate-pulse"
                  :class="{
                    'border-red-500 bg-transparent  border-4':
                      colorNextPrediction(row) === 'blue',
                    'border-blue-500 bg-transparent  border-4':
                      colorNextPrediction(row) === 'red',
                  }"
                ></div> -->
              </div>
            </div>
          </div>
          <div class="grid bg-white">
            <div
              v-for="(row, rowKey) in roadmap.bigeyeboy.matrix"
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
                <!-- <div
                  v-if="
                    checkBigRoadMap() &&
                    rowKey === 0 &&
                    colKey === countNotZero(row)
                  "
                  class="rounded-full w-4 h-4 animate-pulse"
                  :class="{
                    'border-red-500 bg-transparent  border-4':
                      colorNextPrediction(row) === 'red',
                    'border-blue-500 bg-transparent  border-4':
                      colorNextPrediction(row) === 'blue',
                  }"
                ></div>
                <div
                  v-if="
                    checkBigRoadMap() &&
                    rowKey === 0 &&
                    colKey === countNotZero(row) + 1
                  "
                  class="rounded-full w-4 h-4 animate-pulse"
                  :class="{
                    'border-red-500 bg-transparent  border-4':
                      colorNextPrediction(row) === 'blue',
                    'border-blue-500 bg-transparent  border-4':
                      colorNextPrediction(row) === 'red',
                  }"
                ></div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- SMALL ROAD -->
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
      </div>
    </div>
  </div>
  <div></div>
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
@import "./styles/Home";
</style>
