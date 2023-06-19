<template>
  <DialogInput :lastKeyPressed="lastKeyPressed" :isOpen="isOpen" />
  <DialogCountdown
    :isOpenCountDown="isOpenCountDown"
    @onClose="isOpenCountDown = false"
  />
  <div class="home">
    <div class="">
      <Header :matches="results.length" />

      <div v-if="roadmap" class="w-full">
        <div class="flex flex-row">
          <div class="border border-b-4 border-black">
            <BreadPlate
              :BreadPlateResults="roadmap.breadplate.matrix"
              :results="results"
              :isChange="isChange"
              :isReplace="isReplace"
              :Breadplate="roadmap.breadplate"
            />
          </div>
          <Sign :results="results" />
        </div>
        <div class="mb-8">
          <div class="border border-b-4 border-black">
            <BigRoad
              :BigRoadResults="roadmap.bigroad.matrix"
              :isChange="isChange"
            />
          </div>
        </div>
        <div class="border border-b-4 border-t-3 border-r-4 border-black">
          <BigEye
            :BigEyeResults="roadmap.bigeyeboy.matrix"
            :CustomPlateResults="roadmap.customplate.matrix"
            :isChange="isChange"
          />
          <SmallRoad
            :SmallRoadResults="roadmap.smallroad.matrix"
            :CockRoachResults="roadmap.cockroachPig.matrix"
            :isChange="isChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Roadmap from "@/assets/js/roadmap/Roadmap";
import RoadmapUtilities from "@/assets/js/roadmap/RoadmapUtilities";
import DialogInput from "@/components/BaseInputDialog.vue";
import DialogCountdown from "@/components/BaseCountDownDialog.vue";
import DialogSetting from "@/components/BaseSettingDialog.vue";
import { store } from "@/store/store";
import useShoe from "@/composables/useShoe";
import userResult from "@/composables/userResult";
import Sign from "./components/Sign.vue";
import BigRoad from "./components/BigRoad.vue";
import BigEye from "./components/BigEye.vue";
import SmallRoad from "./components/SmallRoad.vue";
import BreadPlate from "./components/BreadPlate.vue";
import Header from "./components/Header.vue";
import BaseDialog from "@/components/BaseDialog.vue";
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

export default {
  name: "Home",
  setup() {
    const { t } = useI18n({ useScope: "global" });
    const shoe = useShoe();
    const uResult = userResult();
    return { t, shoe, uResult };
  },
  components: {
    DialogInput,
    DialogSetting,
    DialogCountdown,
    BigRoad,
    BigEye,
    SmallRoad,
    Header,
    BaseDialog,
    Icon,
    Sign,
    BreadPlate,
  },
  data() {
    return {
      isClear: false,
      isReplace: false,
      isChange: 1,
      dialogTitle: "My Dialog",
      dialogMessage: "Hello from the dialog!",
      results: [],
      roadmap: null,
      roadmapUtils: null,
      lastKeyPressed: null,
      keyArray: [],
      isOpen: false,
      isOpenCountDown: false,
      config: {
        breadplate: {
          show_options: false,
          rows: 6,
          cols: 17,
          // cols: 25,
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
          cols: 18,
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
      store,
    };
  },

  watch: {
    config: {
      handler(val) {
        localStorage.setItem("roadmap-config", JSON.stringify(val));
      },
      deep: true,
    },
    isNewShoe() {
      if (!this.store.isFirst) {
        this.clearRoadmap();
      }
    },
  },
  computed: {
    isNewShoe() {
      return this.store.setting.shoe_no;
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
  created() {
    this.initLocalConfig();
    this.roadmapUtils = new RoadmapUtilities();
    this.initRoadmap();
    window.addEventListener("keydown", this.handleKeyDown);
    this.getResult();
    // this.getResultLocal();
    localStorage.setItem("KEYBOARD_GAME", "false");
    console.log(this.t("table_no"), "table_no");
  },
  methods: {
    onChildCabllback(params) {
      alert(params);
    },
    mappedResults(arr) {
      let keys = "";
      if (arr.includes("1")) {
        keys = "p";
      }
      if (arr.includes("4")) {
        keys = "b";
      }
      if (arr.includes("7")) {
        keys = "t";
      }
      if (arr.includes("1") && arr.includes("2")) {
        keys = "g";
      }
      if (arr.includes("4") && arr.includes("2")) {
        keys = "w";
      }
      if (arr.includes("7") && arr.includes("2")) {
        keys = "j";
      }
      if (arr.includes("1") && arr.includes("5")) {
        keys = "h";
      }
      if (arr.includes("4") && arr.includes("5")) {
        keys = "e";
      }
      if (arr.includes("7") && arr.includes("5")) {
        keys = "k";
      }
      if (arr.includes("1") && arr.includes("8")) {
        keys = "f";
      }
      if (arr.includes("4") && arr.includes("8")) {
        keys = "q";
      }
      if (arr.includes("7") && arr.includes("8")) {
        keys = "i";
      }
      if (arr.includes("6")) {
        keys = "z";
      }
      if (arr.includes("6") && arr.includes("2")) {
        keys = "u";
      }
      if (arr.includes("6") && arr.includes("5")) {
        keys = "r";
      }
      if (arr.includes("6") && arr.includes("8")) {
        keys = "s";
      }

      return keys;
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
    async clearRoadmap() {
      await this.shoe.saveShoe(
        this.results,
        this.store.setting.table_no,
        this.store.setting.shoe_no - 1
      );
      this.results = [];
      this.initRoadmap();
      localStorage.setItem("roadmap-results", "");
      this.isClear = false;
    },

    initRoadmap() {
      this.roadmap = new Roadmap({
        results: this.results,
        config: this.config,
      });
    },

    push(key) {
      this.isChange += 1;
      this.results.push(key);
      this.roadmap.push(key);
      localStorage.setItem("roadmap-results", JSON.stringify(this.results));
      this.isChange += 1;
    },
    handleKeyDown(event) {
      const keyPressed = event.key;

      const validNumbers = ["1", "4", "6", "7", "2", "5", "8", "3", "9"];
      //  Will use on replacing the last result
      // if (keyPressed === "-") {
      //   if (this.results.length > 0) {
      //     this.isReplace = true;
      //     // Remove the last element from the results array
      //     this.results.pop();

      //     // Add the new value to the end of the results array
      //     this.results.push("t");
      //     localStorage.setItem("roadmap-results", JSON.stringify(this.results));

      //     this.getResultLocal();
      //     this.initRoadmap();
      //     // Alternatively, if you want to replace the last value without adding a new one,
      //     // you can directly assign the new value to the last element of the results array
      //     // this.results[this.results.length - 1] = newValue;

      //     console.log("this.results", this.results);
      //   }
      // }

      if (
        this.keyArray.length === 0 &&
        !["1", "4", "6", "7"].includes(keyPressed)
      ) {
        return; // Exit early if the first element is not 1, 4, or 7
      }

      if (
        validNumbers.includes(keyPressed) &&
        localStorage.getItem("KEYBOARD_GAME") === "true"
      ) {
        this.isOpen = true;
        const contains147 =
          this.keyArray.includes("1") ||
          this.keyArray.includes("4") ||
          this.keyArray.includes("6") ||
          this.keyArray.includes("7");
        const contains258 =
          this.keyArray.includes("2") ||
          this.keyArray.includes("5") ||
          this.keyArray.includes("8");
        const contains39 =
          this.keyArray.includes("3") || this.keyArray.includes("9");

        if (contains147 && ["1", "4", "6", "7"].includes(keyPressed)) {
          const index = this.keyArray.findIndex((key) =>
            ["1", "4", "6", "7"].includes(key)
          );
          this.keyArray.splice(index, 1, keyPressed);
        } else if (contains258 && ["2", "5", "8"].includes(keyPressed)) {
          if (this.keyArray.includes(keyPressed)) {
            this.keyArray = this.keyArray.filter((key) => key !== keyPressed);
          } else {
            const index = this.keyArray.findIndex((key) =>
              ["2", "5", "8"].includes(key)
            );
            this.keyArray.splice(index, 1, keyPressed);
          }
        } else if (contains39 && ["3", "9"].includes(keyPressed)) {
          if (this.keyArray.includes(keyPressed)) {
            this.keyArray = this.keyArray.filter((key) => key !== keyPressed);
          } else {
            const index = this.keyArray.findIndex((key) =>
              ["3", "9"].includes(key)
            );
            this.keyArray.splice(index, 1, keyPressed);
          }
        } else if (this.keyArray.length < 3) {
          this.keyArray.push(keyPressed);
        }
      }
      const mappedResults = this.mappedResults(this.keyArray);
      this.lastKeyPressed = mappedResults;
      if (
        keyPressed === "Enter" &&
        this.lastKeyPressed &&
        this.lastKeyPressed !== null &&
        localStorage.getItem("KEYBOARD_GAME") === "true"
      ) {
        this.push(this.lastKeyPressed);
        this.lastKeyPressed = null;
        this.isOpen = false;
        this.isOpenCountDown = true;
        let joinResult = Object.values(this.keyArray).join('');
        let _data = {
          "desk_name" : this.store.setting.table_no,
          "result":  joinResult,
          "result_name" : "Name"
        }
        this.uResult.add(_data)
        this.keyArray = [];
        localStorage.setItem("KEYBOARD_GAME", "false");
      } else {
        // alert("Please press 1 or 2");
      }
    },
    async getResult() {
      let re = await localStorage.getItem("roadmap-results");
      if (re) {
        this.results = JSON.parse(re);
        this.results.forEach((r) => {
          this.roadmap.push(r);
        });
      }
    },
    getResultLocal() {
      let re = localStorage.getItem("roadmap-results");
      if (re) {
        this.results = JSON.parse(re);
        this.results.forEach((r) => {
          this.roadmap.push(r);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/Home";
// @import "./styles/Dialogs/SettingsDialog.scss";
</style>
