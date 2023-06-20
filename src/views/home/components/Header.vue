<template>
  <header class="header-main container-fluid-custom">
    <div class="header-top">
      <div class="px-3">
        <div class="flex flex-row items-center">
          <div class="left-part-text">
            <div class="flex flex-row items-center">
              <div class="blocks-one-side-left">
                <div class="terrace-details">
                  <span class="text-left font-bold text-3xl"
                    >{{ $t("table_no") }}:</span
                  >
                  <span class="text-right font-bold text-3xl">
                    &nbsp;{{ store.setting.table_no }}</span
                  >
                </div>
                <div class="boot-size">
                  <span class="text-left font-bold text-3xl"
                    >{{ $t("shoe_no") }}:</span
                  >
                  &nbsp;
                  <span class="text-right font-bold text-3xl">{{
                    store.setting.shoe_no
                  }}</span>
                </div>
                <div class="no-of-rounds">
                  <span class="text-left font-bold text-3xl"
                    >{{ $t("match_no") }}:</span
                  >
                  &nbsp;
                  <span class="text-right font-bold text-3xl">
                    {{ matches }}</span
                  >
                </div>
                <div class="status">
                  <span class="text-left font-bold text-3xl"
                    >{{ $t("status") }}:</span
                  >
                  &nbsp;
                  <span class="text-right font-bold text-3xl">{{
                    $t(status)
                  }}</span>
                </div>
                <div class="countdown gap-2">
                  <span class="text-left font-bold text-3xl"
                    >{{ $t("counter") }}:</span
                  >
                  &nbsp;
                  <span class="text-right font-bold text-3xl">
                    {{ countdown }}&nbsp;{{ $t("sec") }}</span
                  >
                </div>
              </div>
              <div class="blocks-one-sde-right ms-auto">
                <div class="btn-start">
                  <button
                    type="button"
                    class="btn-theme btn-1 font-bold text-3xl"
                    @click="handleCountdown"
                  >
                    {{ $t("start") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="right-part-text ms-auto">
            <div class="flex flex-row items-center">
              <button
                type="button"
                @click="isOpen = true"
                class="btn-theme btn-1 me-4 font-bold text-3xl"
              >
                {{ $t("settings") }}
              </button>
              <button type="button" class="btn-power">
                <!-- <i class="fa fa-power-off"></i> -->
                <Icon icon="fa:power-off" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom"></div>
  </header>
  <BaseDialog width="999" :isOpen="isOpen">
    <Setting @onClose="isOpen = false" />
  </BaseDialog>
  <BaseDialog width="800" :isOpen="isGameEnd">
    <div
      class="w-full h-40 bg-slate-800 bg-opacity-70 flex flex-row items-center justify-center border-y border-y-yellow-600"
    >
      <p class="text-6xl text-lime-400 font-semibold">
        {{ $t("wait_game_ends") }}
      </p>
    </div>
  </BaseDialog>
</template>
<script>
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";
import Setting from "./Dialogs/SettingDialog.vue";
import BaseDialog from "@/components/BaseDialog.vue";
import placeYourBet from "@/assets/sounds/place_your_bet.mp3";
import noMoreBet from "@/assets/sounds/no_more_bet.mp3";
import { store } from "@/store/store";

export default {
  setup() {
    const { t } = useI18n({ useScope: "global" });
    return { t };
  },
  components: {
    Setting,
    Icon,
    BaseDialog,
  },
  props: ["matches"],
  watch: {
    isOpen(newVal) {},
  },
  data() {
    return {
      isOpen: false,
      countdown: 0,
      countdownInterval: null,
      isCountdownFinished: false,
      status: "complete_settlement",
      isGameEnd: false,
      store,
    };
  },
  //  check if matches is changed then set the status to complete_settlement
  watch: {
    matches(newVal) {
      this.status = "complete_settlement";
    },
  },
  methods: {
    async onLoad() {
      let getSetting = await localStorage.getItem("setting");
      if (getSetting) {
        this.store.setting = JSON.parse(getSetting);
        console.log(
          "🚀 ~ file: Header.vue:111 ~ onLoad ~ getSetting:",
          JSON.parse(getSetting)
        );
      }
    },

    handleCountdown() {
      if (localStorage.getItem("KEYBOARD_GAME") === "false") {
        this.status = "start_bet";
        this.playPlaceYourBetSound();
        clearInterval(this.countdownInterval);
        this.countdown = store.setting.bet_counter;
        this.countdownInterval = setInterval(() => {
          this.countdown--;
          if (this.countdown === 0) {
            clearInterval(this.countdownInterval);
            this.isCountdownFinished = true; // Set the flag to indicate countdown finish
            this.status = "no_more_bet";
            localStorage.setItem("KEYBOARD_GAME", "true");
            this.NoMoreBetSound();
          }
        }, 1000);
      } else {
        this.isGameEnd = true;
        setTimeout(() => {
          this.isGameEnd = false;
        }, 2000);
      }
      this.$emit("start");
    },
    playPlaceYourBetSound() {
      const audio = new Audio(placeYourBet);
      audio.play();
    },
    NoMoreBetSound() {
      const audio = new Audio(noMoreBet);
      audio.play();
    },
  },
  mounted() {
    this.onLoad();
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/Header.scss";
</style>
