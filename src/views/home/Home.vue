<template>
  <DialogInput :lastKeyPressed="lastKeyPressed" :isOpen="isOpen" />
  <DialogCountdown
    :isOpenCountDown="isOpenCountDown"
    @onClose="isOpenCountDown = false"
  />
  <DialogInsurance
    :isInsuranceOpen="isInsuranceOpen"
    :insuranceType="insuranceType"
    :insuranceMax="insuranceMax"
  />
  <div class="home">
    <div class="">
      <Header :matches="results.length" ref="headerComponent" />
      <div v-if="roadmap" class="w-full">
        <div class="flex flex-row">
          <div class="border border-b-4 border-black">
            <BreadPlate
              :BreadPlateResults="roadmap.breadplate.matrix"
              :results="results"
              :isChange="isChange"
              :isReplace="isReplace"
              :Breadplate="roadmap.breadplate"
              @colIndex="colIndex = $event"
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
import DialogInsurance from "@/components/BaseInsuranceDialog.vue";
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
    DialogInsurance,
  },
  data() {
    return {
      isInsuranceOpen: false,
      insuranceType: "",
      insuranceMax: 0,
      colValue: "",
      colIndex: "",
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
    localStorage.setItem("KEYBOARD_GAME", false);
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
      if (arr.includes("1") && arr.includes("3")) {
        // Player Small
        keys = "d";
      }
      if (arr.includes("1") && arr.includes("9")) {
        // Player Big
        keys = "x";
      }
      if (arr.includes("4") && arr.includes("3")) {
        //Banker Small
        keys = "a";
      }
      if (arr.includes("4") && arr.includes("9")) {
        //Banker Big
        keys = "c";
      }
      if (arr.includes("7") && arr.includes("3")) {
        //Tie Small
        keys = "v";
      }
      if (arr.includes("7") && arr.includes("9")) {
        //Tie Big
        keys = "y";
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
      // PLAYER WITH SMALL AND BIG
      if (arr.includes("1") && arr.includes("8") && arr.includes("3")) {
        // Player - Banker Pair Small
        keys = "df";
      }
      if (arr.includes("1") && arr.includes("8") && arr.includes("9")) {
        // Player - Banker Pair Big
        keys = "xf";
      }
      if (arr.includes("1") && arr.includes("5") && arr.includes("3")) {
        // Player - Player Pair Small
        keys = "dh";
      }
      if (arr.includes("1") && arr.includes("5") && arr.includes("9")) {
        // Player - Player Pair Big
        keys = "xh";
      }
      if (arr.includes("1") && arr.includes("2") && arr.includes("3")) {
        // Player - Banker & Player Pair Small
        keys = "dg";
      }
      if (arr.includes("1") && arr.includes("2") && arr.includes("9")) {
        // Player - Banker & Player Pair Big
        keys = "xg";
      }
      // BANKER WITH SMALL AND BIG
      if (arr.includes("4") && arr.includes("8") && arr.includes("3")) {
        // Banker - Banker Pair Small
        keys = "aq";
      }
      if (arr.includes("4") && arr.includes("8") && arr.includes("9")) {
        // Banker - Banker Pair Big
        keys = "cq";
      }
      if (arr.includes("4") && arr.includes("5") && arr.includes("3")) {
        // Banker - Player Pair Small
        keys = "ae";
      }
      if (arr.includes("4") && arr.includes("5") && arr.includes("9")) {
        // Banker - Player Pair Big
        keys = "ce";
      }
      if (arr.includes("4") && arr.includes("2") && arr.includes("3")) {
        // Banker - Banker & Player Pair Small
        keys = "aw";
      }
      if (arr.includes("4") && arr.includes("2") && arr.includes("9")) {
        // Banker - Banker & Player Pair Big
        keys = "cw";
      }

      // TIE WITH SMALL AND BIG
      if (arr.includes("7") && arr.includes("8") && arr.includes("3")) {
        // TIE - Banker Pair Small
        keys = "vi";
      }
      if (arr.includes("7") && arr.includes("8") && arr.includes("9")) {
        // TIE - Banker Pair Big
        keys = "yi";
      }
      if (arr.includes("7") && arr.includes("5") && arr.includes("3")) {
        // TIE - Player Pair Small
        keys = "vk";
      }
      if (arr.includes("7") && arr.includes("5") && arr.includes("9")) {
        // TIE - Player Pair
        keys = "yk";
      }
      if (arr.includes("7") && arr.includes("2") && arr.includes("3")) {
        // Tie - Banker & Player Pair Small
        keys = "vj";
      }
      if (arr.includes("7") && arr.includes("2") && arr.includes("9")) {
        // Tie - Banker & Player Pair Big
        keys = "yj";
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

      if (
        this.isReplace === true &&
        keyPressed === "Enter" &&
        localStorage.getItem("KEYBOARD_GAME") === "false"
      ) {
        localStorage.setItem("KEYBOARD_GAME", "true");
        this.lastKeyPressed = this.results[this.colIndex];
        this.isOpen = true;
      }
      if (keyPressed === "." && this.isReplace === false) {
        const headerComponent = this.$refs.headerComponent;
        headerComponent.handleCountdown();
      }
      if (keyPressed === "+") {
        if (!this.isInsuranceOpen) {
          // Clear the previous values
          this.insuranceType = "";
          this.insuranceMax = 0;
        }
        this.isInsuranceOpen = !this.isInsuranceOpen;
      } else if (this.isInsuranceOpen && this.insuranceType === "") {
        if (keyPressed === "4") {
          this.insuranceType = "banker";
        } else if (keyPressed === "1") {
          this.insuranceType = "player";
        }
      } else if (this.isInsuranceOpen && this.insuranceType !== "") {
        const number = parseInt(keyPressed);
        if (!isNaN(number)) {
          const newInsuranceMax = parseInt(
            this.insuranceMax.toString() + number.toString()
          );
          if (newInsuranceMax.toString().length <= 3) {
            this.insuranceMax = newInsuranceMax;
          }
        }
        console.log("Insurance Max:", this.insuranceMax);
      }
      if (keyPressed === "-") {
        if (this.results.length > 0) {
          this.isReplace = !this.isReplace;
          if (this.isOpen) {
            this.isOpen = false;
            localStorage.setItem("KEYBOARD_GAME", "false");
          }
        }
      }

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
        if (this.isReplace) {
          this.isOpen = false;
          this.results[this.colIndex] = this.lastKeyPressed;
          localStorage.setItem("roadmap-results", JSON.stringify(this.results));
          this.isReplace = false;
          this.colIndex = "";
          this.lastKeyPressed = null;
          this.keyArray = [];
          localStorage.setItem("KEYBOARD_GAME", "false");
          this.initRoadmap();
        } else {
          this.push(this.lastKeyPressed);
          this.lastKeyPressed = null;
          this.isOpen = false;
          this.isOpenCountDown = true;
          localStorage.setItem("KEYBOARD_GAME", "false");
          let joinResult = Object.values(this.keyArray).join("");
          let _data = {
            desk_name: this.store.setting.table_no,
            result: joinResult,
            result_name: "Name",
          };
          this.uResult.add(_data);
          this.keyArray = [];
        }
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
