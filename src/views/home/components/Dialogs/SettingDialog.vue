<template>
  <div class="blue-modal">
    <div
      class="modal-dialog modal-dialog-centered modal-lg"
      style="max-width: 878px"
    >
      <div class="modal-content">
        <div class="modal-header flex border-0 p-3 py-2">
          <h5 class="modal-title" style="color: #c5b99e; font-size: 25px">
            {{ $t("settings") }}
          </h5>
          <div>
            <img
              src="../../../../assets/images/close-icon.svg"
              @click="emit('onClose')"
              style="cursor: pointer"
            />
            <!-- <Icon
              height="20."
              style="cursor: pointer"
              @click="emit('onClose')"
              icon="fa:close"
            /> -->
          </div>
        </div>
        <div class="header-bottom"></div>
        <div class="modal-body p-5">
          <div class="row">
            <h4 class="mb-3" style="color: #d4dde3; font-size: 24px">
              {{ $t("edit_table_no") }}
            </h4>
            <div class="col-7">
              <div class="row align-items-center g-2">
                <div class="col-3">
                  <p class="" style="color: #d4dde3; font-size: 17px">
                    {{ $t("edit_table_no") }}:
                  </p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting.table_no"
                    />
                  </div>
                </div>
                <div class="col-5"></div>
                <div class="mt-3 row align-items-center">
                  <div class="col-5">
                    <button
                      @click="onSaveSetting('table_no', 'set_table_success')"
                      type="button"
                      class="btn-theme btn-1"
                    >
                      {{ $t("change_table_id") }}
                    </button>
                  </div>
                </div>
              </div>
              <div class="mt-3 row g-2">
                <div class="col-12">
                  <h4 class="my-3" style="color: #d4dde3; font-size: 24px">
                    {{ $t("edit_table_limit") }}
                  </h4>
                </div>
              </div>
              <div class="row align-items-center g-2">
                <div class="col-3">
                  <p class="" style="color: #d4dde3; font-size: 17px">
                    {{ $t("currency") }}:
                  </p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <select
                      @change="currencyChange"
                      v-model="setting.currency"
                      class="form-control-custom dropdown-custom"
                    >
                      <option value="usd">{{ $t("usd") }}</option>
                      <option value="thb">{{ $t("thb") }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-5"></div>
              </div>
              <div class="row align-items-center g-2">
                <div class="col-3">
                  <p class="" style="color: #d4dde3; font-size: 17px">
                    {{ $t("bp_limit") }}:
                  </p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      :oninput="(evt) => Utils.validationOnlyNumberEvent(evt)"
                      maxlength="12"
                      v-model="setting[setting.currency].min_bp"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      v-model="setting[setting.currency].max_bp"
                      type="text"
                      :oninput="(evt) => Utils.validationOnlyNumberEvent(evt)"
                      maxlength="12"
                      class="form-control-custom"
                    />
                  </div>
                </div>
              </div>
              <div class="row align-items-center g-2">
                <div class="col-3">
                  <p class="" style="color: #d4dde3; font-size: 17px">
                    {{ $t("tie_limit") }}:
                  </p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      :oninput="(evt) => Utils.validationOnlyNumberEvent(evt)"
                      maxlength="12"
                      class="form-control-custom"
                      v-model="setting[setting.currency].min_tie"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      :oninput="(evt) => Utils.validationOnlyNumberEvent(evt)"
                      maxlength="12"
                      class="form-control-custom"
                      v-model="setting[setting.currency].max_tie"
                    />
                  </div>
                </div>
              </div>
              <div class="row align-items-center g-2">
                <div class="col-3">
                  <p class="" style="color: #d4dde3; font-size: 17px">
                    {{ $t("pair_limit") }}:
                  </p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      :oninput="(evt) => Utils.validationOnlyNumberEvent(evt)"
                      maxlength="12"
                      class="form-control-custom"
                      v-model="setting[setting.currency].min_pair"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      :oninput="(evt) => Utils.validationOnlyNumberEvent(evt)"
                      maxlength="12"
                      class="form-control-custom"
                      v-model="setting[setting.currency].max_pair"
                    />
                  </div>
                </div>
              </div>
              <div class="row align-items-center g-2">
                <div class="col-3">
                  <p class="" style="color: #d4dde3; font-size: 17px">
                    {{ $t("lucky_6_limit") }}:
                  </p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      :oninput="(evt) => Utils.validationOnlyNumberEvent(evt)"
                      maxlength="12"
                      class="form-control-custom"
                      v-model="setting[setting.currency].min_lucky6"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      :oninput="(evt) => Utils.validationOnlyNumberEvent(evt)"
                      maxlength="12"
                      class="form-control-custom"
                      v-model="setting[setting.currency].max_lucky6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-5">
              <div class="row align-items-center g-2">
                <div class="col-4">
                  <p class="" style="color: #d4dde3; font-size: 17px">
                    {{ $t("bet_counter") }}:
                  </p>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <input
                      type="text"
                      :oninput="(evt) => Utils.validationOnlyNumberEvent(evt)"
                      maxlength="12"
                      class="form-control-custom text-center"
                      v-model="setting.bet_counter"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <p class="" style="color: #d4dde3; font-size: 17px">
                    {{ $t("sec") }}
                  </p>
                </div>
              </div>
              <div class="mt-3 row align-items-center g-2">
                <div class="col-6">
                  <!-- <button
                    @click="onSaved('set_time_success')"
                    type="button"
                    class="btn-theme btn-1"
                  >
                    {{ $t("change") }}
                  </button> -->
                  <button
                    @click="onSaveSetting('bet_count', 'set_time_success')"
                    type="button"
                    class="btn-theme btn-1"
                    style="padding: 0px 17px"
                  >
                    {{ $t("change_bet_counter") }}
                  </button>
                </div>
              </div>
              <div class="mt-1 row pt-8 align-items-center">
                <div class="col-12">
                  <h4 class="" style="color: #d4dde3; font-size: 24px">
                    {{ $t("change_shoe_verification_code") }}
                  </h4>
                </div>
              </div>
              <div class="row mt-3 align-items-center g-2">
                <div class="col-4">
                  <p class="" style="color: #d4dde3; font-size: 17px">
                    {{ $t("set_code") }}:
                  </p>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom text-center"
                      v-model="setting.verification_code"
                    />
                  </div>
                </div>
                <div class="col-4"></div>
                <div class="col-6">
                  <!-- <button
                    @click="onSaved('set_code_success')"
                    type="button"
                    class="btn-theme btn-1"
                  >
                    {{ $t("change") }}
                  </button> -->
                  <button
                    @click="onSaveSetting('verify_code', 'set_code_success')"
                    type="button"
                    class="btn-theme btn-1"
                  >
                    {{ $t("change_verification_code") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 row">
            <div class="col-7">
              <div class="row">
                <div class="col-5">
                  <!-- <button
                    @click="onSaved('set_limit_success')"
                    type="button"
                    class="btn-theme btn-1"
                  >
                    {{ $t("change") }}
                  </button> -->
                  <button
                    @click="onSaveSetting('table_limit', 'set_limit_success')"
                    type="button"
                    class="btn-theme btn-1"
                  >
                    {{ $t("change_bet_limit") }}
                  </button>
                </div>
                <div class="col-7"></div>
              </div>
            </div>
            <div class="col-5">
              <div class="mt-2 row">
                <div class="col-8">
                  <button
                    @click="isConfirm = true"
                    type="button"
                    class="btn-theme btn-1 py-1 fs-3"
                  >
                    {{ $t("change_shoe") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BaseDialog width="550" :isOpen="isConfirm">
      <div class="blue-modal">
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          style="max-width: 1270px"
        >
          <div class="modal-content">
            <div class="modal-header flex border-0 p-3">
              <h5 class="modal-title flex-1">{{ $t("settings") }}</h5>
              <div>
                <Icon
                  height="20."
                  style="cursor: pointer"
                  @click="isConfirm = false"
                  icon="fa:close"
                />
              </div>
            </div>
            <div class="modal-body p-5">
              <div class="flex flex-col justify-center items-center">
                <p class="text-lg">{{ $t("enter_verification_code") }}</p>
                <input
                  type="text"
                  class="form-control-custom"
                  width="150"
                  v-model="verification_code"
                />
                <button
                  type="button"
                  class="btn-theme btn-1 mt-4"
                  style="width: 40%"
                  @click="verifyCode"
                >
                  {{ $t("change_shoe") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseDialog>
    <BaseDialog width="800" :isOpen="isVerified">
      <div
        class="w-full h-40 bg-slate-800 bg-opacity-70 flex flex-row items-center justify-center border-y border-y-yellow-600"
      >
        <p class="text-6xl text-lime-400 font-semibold">
          {{ $t(verifyStatus) }}
        </p>
      </div>
    </BaseDialog>
  </div>
</template>
<script setup>
import { store } from "@/store/store";
import { ref, onMounted, watch, computed } from "vue";
import { Icon } from "@iconify/vue";
import BaseDialog from "@/components/BaseDialog.vue";
import useConfig from "@/composables/useConfig";
import Utils from "@/helpers/Utils";

const {
  add,
  get,
  configBaselineInfo,
  configBetCount,
  configUpdateBoot,
  configTableLimit,
  configSetShoeVerifyCode,
  configTableLimitTH,
} = useConfig();
const emit = defineEmits(["onClose", "onSave"]);
const isConfirm = ref(false);
const isVerified = ref(false);
const verifyStatus = ref("change_success");
const verification_code = ref("");
const setting = ref({
  currency: "usd",
  table_no: 0,
  bet_counter: 0,
  verification_code: "",
  shoe_no: 0,
  usd: {
    min_bp: 0,
    max_bp: 0,
    min_tie: 0,
    max_tie: 0,
    min_pair: 0,
    max_pair: 0,
    min_lucky6: 0,
    max_lucky6: 0,
  },
  thb: {
    min_bp: 0,
    max_bp: 0,
    min_tie: 0,
    max_tie: 0,
    min_pair: 0,
    max_pair: 0,
    min_lucky6: 0,
    max_lucky6: 0,
  },
});
const currencyChange = () => {
  // if(setting.value.currency == "usd"){
  //   setting.value.limit = 1;
  // }
  // if(setting.value.currency == "thb"){
  //   setting.value.limit = 22;
  // }
  console.log("fomr", setting.value);
};

async function onSaved(text) {
  localStorage.setItem("setting", JSON.stringify(setting.value));
  store.setting = setting.value;
  verifyStatus.value = text;
  isVerified.value = true;
  setTimeout(() => {
    isVerified.value = false;
  }, 2000);
  let saveConfig = {
    desk_name: setting.value.table_no,
    boot_num: setting.value.shoe_no,
    double_small: setting.value.usd.min_pair,
    double_max: setting.value.usd.max_pair,
    draw_small: setting.value.usd.max_bp,
    draw_max: setting.value.usd.min_bp,
    six_max: setting.value.usd.min_lucky6,
    six_small: setting.value.usd.max_lucky6,
    banker_and_player_max: setting.value.usd.max_tie,
    banker_and_player_small: setting.value.usd.min_tie,
    double_small_th: setting.value.thb.min_pair,
    double_max_th: setting.value.thb.max_pair,
    draw_small_th: setting.value.thb.max_bp,
    draw_max_th: setting.value.thb.min_bp,
    six_max_th: setting.value.thb.min_lucky6,
    six_small_th: setting.value.thb.max_lucky6,
    banker_and_player_max_th: setting.value.thb.max_tie,
    banker_and_player_small_th: setting.value.thb.min_tie,
    game_num: setting.value.shoe_no,
    is_online: 1,
    second: "",
    status: "",
    verify: setting.value.verification_code,
  };
  await add(saveConfig);
  emit("onClose");

  // emit("onClose");
}
async function onSaveSetting(label, text) {
  localStorage.setItem("setting", JSON.stringify(setting.value));
  store.setting = setting.value;
  verifyStatus.value = text;
  isVerified.value = true;
  setTimeout(() => {
    isVerified.value = false;
  }, 2000);
  let saveConfig = {
    desk_name: setting.value.table_no,
    boot_num: setting.value.shoe_no,
    double_small: setting.value.usd.min_pair,
    double_max: setting.value.usd.max_pair,
    draw_small: setting.value.usd.max_bp,
    draw_max: setting.value.usd.min_bp,
    six_max: setting.value.usd.min_lucky6,
    six_small: setting.value.usd.max_lucky6,
    banker_and_player_max: setting.value.usd.max_tie,
    banker_and_player_small: setting.value.usd.min_tie,
    double_small_th: setting.value.thb.min_pair,
    double_max_th: setting.value.thb.max_pair,
    draw_small_th: setting.value.thb.max_bp,
    draw_max_th: setting.value.thb.min_bp,
    six_max_th: setting.value.thb.min_lucky6,
    six_small_th: setting.value.thb.max_lucky6,
    banker_and_player_max_th: setting.value.thb.max_tie,
    banker_and_player_small_th: setting.value.thb.min_tie,
    game_num: setting.value.shoe_no,
    is_online: 1,
    second: "",
    status: "",
    verify: setting.value.verification_code,
  };
  console.log("configTableLimit");
  console.log(label);
  if (label == "table_no") {
    await configBaselineInfo(setting.value.table_no);
  } else if (label == "bet_count") {
    await configBetCount(setting.value.bet_counter);
  } else if (label == "table_limit") {
    if (setting.value.currency == "usd") {
      let tableLimitParams = {
        bankerAndPlayer: `${setting.value.usd.min_bp}-${setting.value.usd.max_bp}`,
        draw: `${setting.value.usd.min_tie}-${setting.value.usd.max_tie}`,
        doubles: `${setting.value.usd.min_pair}-${setting.value.usd.max_pair}`,
        six: `${setting.value.usd.min_lucky6}-${setting.value.usd.max_lucky6}`,
      };
      await configTableLimit(tableLimitParams);
    } else {
      let tableLimitParams = {
        bankerAndPlayerTh: `${setting.value.thb.min_bp}-${setting.value.thb.max_bp}`,
        drawTh: `${setting.value.thb.min_tie}-${setting.value.thb.max_tie}`,
        doublesTh: `${setting.value.thb.min_pair}-${setting.value.thb.max_pair}`,
        sixTh: `${setting.value.thb.min_lucky6}-${setting.value.thb.max_lucky6}`,
      };
      await configTableLimitTH(tableLimitParams);
    }
  } else if (label == "verify_code") {
    await configSetShoeVerifyCode(setting.value.verification_code);
  }
  emit("onClose");
}
function verifyCode() {
  if (verification_code.value == setting.value.verification_code) {
    verifyStatus.value = "change_success";

    isConfirm.value = false;
    store.isFirst = false;
    setting.value.shoe_no = setting.value.shoe_no + 1;
    localStorage.setItem("setting", JSON.stringify(setting.value));
    store.setting = setting.value;
    localStorage.setItem("roadmap-results", "");
    isVerified.value = true;
    setTimeout(() => {
      isVerified.value = false;
    }, 3000);
    configUpdateBoot();
  } else {
    verifyStatus.value = "verification_failed";
    isVerified.value = true;

    setTimeout(() => {
      isVerified.value = false;
    }, 3000);
  }
}

const getConfig = async () => {
  try {
    let config = await get(2);
    console.log(config, "config====");
  } catch (e) {
    console.log(e.message);
  }
};

onLoad();
async function onLoad() {
  let getSetting = await localStorage.getItem("setting");
  if (getSetting) {
    setting.value = JSON.parse(getSetting);
  } else {
    setting.value = store.setting;
  }
  getConfig();
}
</script>
<style lang="scss" scoped>
@import "../../styles/Dialogs/SettingsDialog.scss";
</style>
