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
      <Header
        :matches="results.length"
        ref="headerComponent"
        @start="onStartGame"
      />
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
          <Sign
            :results="results"
            @bankerPredict="predictBanker"
            @playerPredict="predictPlayer"
          />
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
import useConfig from "@/composables/useConfig";
import Sign from "./components/Sign.vue";
import BigRoad from "./components/BigRoad.vue";
import BigEye from "./components/BigEye.vue";
import SmallRoad from "./components/SmallRoad.vue";
import BreadPlate from "./components/BreadPlate.vue";
import Header from "./components/Header.vue";
import BaseDialog from "@/components/BaseDialog.vue";
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";
import MappingUtils from "@/assets/js/roadmap/MappingUtils";
export default {
  name: "Home",
  setup() {
    const { t } = useI18n({ useScope: "global" });
    const shoe = useShoe();
    const uResult = userResult();
    const uConfig = useConfig();
    return { t, shoe, uResult, uConfig };
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
      removePredictionTimeout: null,
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
      results_id: [],
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
    localStorage.setItem("KEYBOARD_GAME", false);
    console.log(this.t("table_no"), "table_no");
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
    async clearRoadmap() {
      await this.shoe.saveShoe(
        this.results,
        this.store.setting.table_no,
        this.store.setting.shoe_no - 1
      );
      this.results = [];
      this.initRoadmap();
      localStorage.setItem("roadmap-results", "");
      localStorage.setItem("roadmap-results-id", "");
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
    async handleKeyDown(event) {
      const keyPressed = event.key;

      const validNumbers = ["1", "4", "6", "7", "2", "5", "8", "3", "9"];

      if (
        this.isReplace === true &&
        keyPressed === "Enter" &&
        localStorage.getItem("KEYBOARD_GAME") === "false"
      ) {
        localStorage.setItem("KEYBOARD_GAME", "true");
        this.lastKeyPressed = this.results[this.colIndex];
        // const newArray = this.reverseMappedResults(this.lastKeyPressed);
        // if (newArray.length > 0) {
        //   this.keyArray = newArray;
        // }
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
      console.log(
        "🚀 ~ file: Home.vue:606 ~ handleKeyDown ~  this.keyArray:",
        this.keyArray
      );

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
      const mappedResults = MappingUtils.mappedResults(this.keyArray);
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
          // for update results in db
          try {
            let joinResult = Object.values(this.keyArray).join("");
            this.uResult.update(this.results_id[this.colIndex], {
              result: joinResult,
            });
          } catch (e) {
            console.log(e);
          }

          this.keyArray = [];
          // end
          this.isReplace = false;
          this.colIndex = "";
          this.lastKeyPressed = null;
          localStorage.setItem("KEYBOARD_GAME", "false");
          this.results = [];
          this.initRoadmap();
          this.getResult();
        } else {
          this.push(this.lastKeyPressed);
          this.isOpen = false;
          this.isOpenCountDown = true;
          localStorage.setItem("KEYBOARD_GAME", "false");
          let joinResult = Object.values(this.keyArray).join("");
          this.keyArray = [];

          try {
            let _data = {
              desk_name: this.store.setting.table_no,
              result: joinResult,
              result_name:
                this.roadmapUtils.identityDictionary[this.lastKeyPressed],
              boot_num: this.store.setting.shoe_no,
              game_num: this.results.length,
            };
            // add to tatabase
            let res = await this.uResult.add(_data);
          // for mapping update to database
            this.results_id.push(res?.id);
            localStorage.setItem(
              "roadmap-results-id",
              JSON.stringify(this.results_id)
            );
          } catch (e) {
            console.log(e);
          }
          this.lastKeyPressed = null;
     
        }
      }
    },
    async getResult() {
      let re = await localStorage.getItem("roadmap-results");
      let reID = await localStorage.getItem("roadmap-results-id");
      if (reID) {
        this.results_id = JSON.parse(reID);
        console.log(this.results_id, " this.results_id ");
      }
      if (re) {
        this.results = JSON.parse(re);
        this.results.forEach((r) => {
          this.roadmap.push(r);
        });
      }
    },
    async getConfig() {
      try {
        let res = await this.uConfig.get("");
        // console.log(res.data, "config");
        if (res.data) {
          try {
            this.store.setting.table_no = res.data.desk_name;
            this.store.setting.shoe_no = res.data.boot_num;
            this.store.setting.usd.min_pair = res.data.double_small;
            this.store.setting.usd.max_pair = res.data.double_max;
            this.store.setting.usd.max_bp = res.data.draw_small;
            this.store.setting.usd.min_bp = res.data.draw_max;
            this.store.setting.usd.min_lucky6 = res.data.six_max;
            this.store.setting.usd.max_lucky6 = res.data.six_small;
            this.store.setting.usd.max_tie = res.data.banker_and_player_max;
            this.store.setting.usd.min_tie = res.data.banker_and_player_small;
            this.store.setting.thb.min_pair = res.data.double_small_th;
            this.store.setting.thb.max_pair = res.data.double_max_th;
            this.store.setting.thb.max_bp = res.data.draw_small_th;
            this.store.setting.thb.min_bp = res.data.draw_max_th;
            this.store.setting.thb.min_lucky6 = res.data.six_max_th;
            this.store.setting.thb.max_lucky6 = res.data.six_small_th;
            this.store.setting.thb.max_tie = res.data.banker_and_player_max_th;
            this.store.setting.thb.min_tie =
              res.data.banker_and_player_small_th;
            this.store.setting.game_num = this.results.length;
            this.store.setting.is_online = res.data.is_online;
            this.store.setting.second = res.data.second;
            this.store.setting.status = res.data.status;
            this.store.setting.verification_code = res.data.verification_code;
            // console.log(this.store.setting, 'this.store.setting');
          } catch (e) {
            console.log("error", e);
          }
        }
      } catch (e) {
        console.log("error", e);
      }
    },
    onStartGame() {
      this.getConfig();
    },

    predictBanker() {
      console.log("BANKER");
      const newPrediction = "b";

      if (this.store.isPredict) {
        this.results.pop();
        this.results.push(newPrediction);
      } else {
        this.store.isPredict = true;
        this.results.push(newPrediction);
      }

      clearTimeout(this.removePredictionTimeout);
      this.removePredictionTimeout = setTimeout(() => {
        this.removePrediction(newPrediction);
        this.initRoadmap();

        this.getResult();
        this.store.isPredict = false;
      }, 5000);

      this.initRoadmap();
    },

    predictPlayer() {
      console.log("Player");
      const newPrediction = "p";

      if (this.store.isPredict) {
        this.results.pop();
        this.results.push(newPrediction);
      } else {
        this.store.isPredict = true;
        this.results.push(newPrediction);
      }

      clearTimeout(this.removePredictionTimeout);
      this.removePredictionTimeout = setTimeout(() => {
        this.removePrediction(newPrediction);
        this.initRoadmap();

        this.getResult();
        this.store.isPredict = false;
      }, 5000);

      this.initRoadmap();
    },

    removePrediction(prediction) {
      this.results.pop();
      this.initRoadmap();
      this.store.isPredict = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/Home";
</style>
