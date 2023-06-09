<template>
  <div class="home">
    <div class="">
      <Header />
      <div v-if="roadmap" class="w-full">
        <div class="flex flex-row">
          <div class="border border-b-4 border-black">
            <BreadPlate :BreadPlateResults="roadmap.breadplate.matrix" />
          </div>
          <Sign :results="results" />
        </div>
        <div class="mb-8">
          <div class="border border-b-4 border-black">
            <BigRoad :BigRoadResults="roadmap.bigroad.matrix" />
          </div>
        </div>
        <div class="border border-b-4 border-t-3 border-r-4 border-black">
          <BigEye
            :BigEyeResults="roadmap.bigeyeboy.matrix"
            :CustomPlateResults="roadmap.customplate.matrix"
          />
          <SmallRoad
            :SmallRoadResults="roadmap.smallroad.matrix"
            :CockRoachResults="roadmap.cockroachPig.matrix"
          />
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
import Sign from "./components/Sign.vue";
import BigRoad from "./components/BigRoad.vue";
import BigEye from "./components/BigEye.vue";
import SmallRoad from "./components/SmallRoad.vue";
import BreadPlate from "./components/BreadPlate.vue";
import Header from "./components/Header.vue";
export default {
  name: "Home",
  components: {
    Dialog,
    BreadPlate,
    Sign,
    BigRoad,
    BigEye,
    SmallRoad,
    Header,
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
        customplate: {
          show_options: false,
          rows: 3,
          cols: 15,
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
    onChildCabllback(params) {
      alert(params);
    },
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
      this.lastKeyPressed = event.key;
      switch (event.key) {
        case "1":
          this.push("p");
          break;
        case "2":
          this.push("b");
          break;
        // case "3":
        //   this.push("t");
        //   break;
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
        // case "/":
        //   this.push("i"); // tie banker-pair
        //   break;
        // case "*":
        //   this.push("k"); // tie player-pair
        //   break;
        // case "-":
        //   this.push("j"); // tie player-pair banker-pair
        //   break;
        case "0":
          this.clearRoadmap();
          break;
        default:
          break;
      }

      console.log(
        "🚀 ~ file: CustomPlate.js:15 ~ CustomPlate ~ constructor ~ options:",
        this.roadmap
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/Home";
</style>
