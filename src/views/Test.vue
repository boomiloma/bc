<template>
  <div class="home">
    <div class="roadmap-container">
      <div v-if="roadmap" class="roadmap">
        <div class="roadmap__item roadmap__item--cockroach-pig">
          <!-- <div class="grid">
            <div
              v-for="(row, rowKey) in roadmap.cockroachPig.matrix"
              :key="rowKey"
              class="grid__row"
            >
              <div v-for="(col, colKey) in row" :key="colKey" class="grid__col">
                <h4
                  class="text-2xl font-bold"
                  :class="{
                    'text-red-500': col && col.value === 'red',
                    'text-blue-500': col && col.value === 'blue',
                  }"
                >
                  {{ col ? "/" : "" }}
                </h4>
              </div>
            </div>
          </div> -->

          <!-- <div class="grid">
            <div
              v-for="(row, rowKey) in roadmap.cockroachPig.matrix"
              :key="rowKey"
              class="grid__row"
            >
              <div v-for="(col, colKey) in row" :key="colKey" class="grid__col">
                <h4
                  class="text-2xl font-bold"
                  :class="{
                    'text-red-500': col && col.value === 'red',
                    'text-blue-500': col && col.value === 'blue',
                  }"
                >
                  {{ col ? "/" : "" }}
                </h4>
              </div>
            </div>
          </div> -->

          <h1 style="color: red;"> Test</h1>
          <div class="grid" style="margin-top: 30px">
            <div v-for="(row, rowKey) in test" :key="rowKey" class="grid__row">
              <div v-for="(col, colKey) in row" :key="colKey" class="grid__col">
                <!-- <h4
                  class="text-2xl font-bold"
                  :class="{
                    'text-red-500': col && col.value === 'red',
                    'text-blue-500': col && col.value === 'blue',
                  }"
                >

                </h4> -->
                <div v-for="(c,i) in col.child" :key="i">
                  <p style="color: red;">{{c.value}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Roadmap from "@/assets/js/roadmap/Roadmap";
import RoadmapUtilities from "@/assets/js/roadmap/RoadmapUtilities";
export default {
  name: "Test",
  data() {
    return {
      results: [],
      roadmap: null,
      roadmapUtils: null,
      lastKeyPressed: null,
      config: {
        breadplate: {
          show_options: false,
          rows: 6,
          cols: 9,
        },
        bigroad: {
          show_options: false,
          rows: 6,
          cols: 26,
        },
        bigeyeboy: {
          show_options: false,
          rows: 6,
          cols: 26,
        },
        smallroad: {
          show_options: false,
          rows: 6,
          cols: 19,
        },
        cockroachPig: {
          show_options: false,
          rows: 3,
          cols: 19,
        },
      },
      test: [
        [
          {  
            value: "p",
            index: 0,
            tie_count: 0,
            child: [ 
              {
                value: "1",
              },
              {
                value: "2",
              },
              {
                value: "3",
              },
              {
                value: "4",
              }
            ]
          },
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0,
        ],
      ],
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

    clearRoadmap() {
      this.results = [];
      this.initRoadmap();
    },

    beadRoadResult(value) {
      let beadRoadClass = "";
      switch (value) {
        case "b":
          beadRoadClass =
            "bg-red-500 rounded-full border-4 border-red-700 w-8 h-8";
          break;
        case "p":
          beadRoadClass =
            "bg-blue-500 rounded-full border-4 border-blue-700 w-8 h-8";
          break;
        case "t":
          beadRoadClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "q":
          beadRoadClass =
            "bg-red-500 rounded-full border-4 border-red-700 w-8 h-8";
          break;
        case "w":
          beadRoadClass =
            "bg-red-500 rounded-full border-4 border-red-700 w-8 h-8";
          break;
        case "e":
          beadRoadClass =
            "bg-red-500 rounded-full border-4 border-red-700 w-8 h-8";
          break;
        case "f":
          beadRoadClass =
            "bg-blue-500 rounded-full border-4 border-blue-700 w-8 h-8";
          break;
        case "g":
          beadRoadClass =
            "bg-blue-500 rounded-full border-4 border-blue-700 w-8 h-8";
          break;
        case "h":
          beadRoadClass =
            "bg-blue-500 rounded-full border-4 border-blue-700 w-8 h-8";
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
          bigRoadClass = "border-red-500 bg-transparent  border-4";
          break;
        case "p":
          bigRoadClass = "border-blue-500 bg-transparent  border-4";
          break;
        case "t":
          bigRoadClass = "border-green-500 bg-transparent  border-4";
          break;
        case "q":
          bigRoadClass = "border-red-500 bg-transparent  border-4";
          break;
        case "w":
          bigRoadClass = "border-red-500 bg-transparent  border-4";
          break;
        case "e":
          bigRoadClass = "border-red-500 bg-transparent  border-4";
          break;
        case "f":
          bigRoadClass = "border-blue-500 bg-transparent  border-4";
          break;
        case "g":
          bigRoadClass = "border-blue-500 bg-transparent  border-4";
          break;
        case "h":
          bigRoadClass = "border-blue-500 bg-transparent  border-4";
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
    handleKeyDown(event) {
      // console.log(this.results);
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
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./home/styles/Home.scss";
</style>
