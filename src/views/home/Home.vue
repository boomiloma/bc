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
  <div></div>
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
    return { t, shoe };
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
      isChange: 1,
      dialogTitle: "My Dialog",
      dialogMessage: "Hello from the dialog!",
      results: [],
      roadmap: null,
      roadmapUtils: null,
      lastKeyPressed: null,
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
      this.isOpen = false;
      if (localStorage.getItem("KEYBOARD_GAME") === "true") {
        switch (event.key) {
          case "1":
            this.lastKeyPressed = "p";
            this.isOpen = true;
            break;
          case "2":
            this.lastKeyPressed = "b";
            this.isOpen = true;
            break;
          case "3":
            this.lastKeyPressed = "t";
            this.isOpen = true;
            break;
          case "4": // banker wins banker pair
            this.lastKeyPressed = "q";
            this.isOpen = true;

            break;
          case "5": // banker wins player pair
            this.lastKeyPressed = "e";
            this.isOpen = true;
            break;
          case "6": // banker wins banker-pair player-pair
            this.lastKeyPressed = "w";
            this.isOpen = true;
            break;
          case "7": // player wins player-pair
            this.lastKeyPressed = "h";
            this.isOpen = true;
            break;
          case "8": // player wins banker-pair
            this.lastKeyPressed = "f";
            this.isOpen = true;
            break;
          case "9": // player wins  banker-pair player-pair
            this.lastKeyPressed = "g";
            this.isOpen = true;
            break;
          case "/": // tie banker-pair
            this.lastKeyPressed = "i";
            this.isOpen = true;
            break;
          case "*": // tie player-pair
            this.lastKeyPressed = "k";
            this.isOpen = true;
            break;
          case "-": // tie player-pair banker-pair
            this.lastKeyPressed = "j";
            this.isOpen = true;
            break;
          case ".":
            this.roadmap.showPrevious();
            break;
          case "Enter":
            if (this.lastKeyPressed && this.lastKeyPressed !== null) {
              this.push(this.lastKeyPressed);
              this.lastKeyPressed = null;
              this.isOpen = false;
              this.isOpenCountDown = true;
              localStorage.setItem("KEYBOARD_GAME", "false");
            } else {
              // alert("Please press 1 or 2");
            }
            break;
          default:
            break;
        }
      } else if (!this.isOpen) {
        switch (event.key) {
          case "0":
            this.isClear = true;
            break;
          default:
            break;
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
