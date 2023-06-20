<template>
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
              @click="emit('onClose')"
              icon="fa:close"
            />
          </div>
        </div>
        <div class="header-bottom"></div>
        <div class="modal-body p-5">
          <div class="row">
            <h4 class="text-white mb-3">{{ $t("edit_table_no") }}</h4>
            <div class="col-7">
              <div class="row">
                <div class="col-4">
                  <p class="text-white">{{ $t("edit_table_no") }}:</p>
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
                <div class="col-4"></div>
                <div class="mt-3 row">
                  <div class="col-5">
                    <button
                      @click="onSaved('set_table_success')"
                      type="button"
                      class="btn-theme btn-1"
                    >
                      {{ $t("change_table_id") }}
                    </button>
                  </div>
                </div>
              </div>
              <div class="mt-3 row">
                <div class="col-12">
                  <h4 class="text-white my-3">{{ $t("edit_table_limit") }}</h4>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p class="text-white">{{ $t("currency") }}:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <select
                      @change="currencyChange"
                      v-model="setting.currency"
                      class="form-control-custom"
                    >
                      <option value="usd">{{ $t("usd") }}</option>
                      <option value="thb">{{ $t("thb") }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-4"></div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p class="text-white">{{ $t("bp_limit") }}:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting[setting.currency].min_bp"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      v-model="setting[setting.currency].max_bp"
                      type="text"
                      class="form-control-custom"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p class="text-white">{{ $t("tie_limit") }}:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting[setting.currency].min_tie"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting[setting.currency].max_tie"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p class="text-white">{{ $t("pair_limit") }}:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting[setting.currency].min_pair"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting[setting.currency].max_pair"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p class="text-white">{{ $t("lucky_6_limit") }}:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting[setting.currency].min_lucky6"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting[setting.currency].max_lucky6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-5">
              <div class="row">
                <div class="col-5">
                  <p class="text-white">{{ $t("bet_counter") }}:</p>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting.bet_counter"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <p class="text-white">{{ $t("sec") }}</p>
                </div>
              </div>
              <div class="mt-3 row">
                <div class="col-5">
                  <button
                    @click="onSaved('set_time_success')"
                    type="button"
                    class="btn-theme btn-1"
                  >
                    {{ $t("change") }}
                  </button>
                </div>
              </div>
              <div class="mt-1 row pt-8">
                <div class="col-12">
                  <h4 class="text-white">
                    {{ $t("change_shoe_verification_code") }}
                  </h4>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-5">
                  <p class="text-white">{{ $t("set_code") }}:</p>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting.verification_code"
                    />
                  </div>
                </div>
                <div class="col-4"></div>
                <div class="col-5">
                  <button
                    @click="onSaved('set_code_success')"
                    type="button"
                    class="btn-theme btn-1"
                  >
                    {{ $t("change") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 row">
            <div class="col-7">
              <div class="row">
                <div class="col-5">
                  <button
                    @click="onSaved('set_limit_success')"
                    type="button"
                    class="btn-theme btn-1"
                  >
                    {{ $t("change") }}
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

const { add, get } = useConfig();
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
  console.log("🚀 ~ file: SettingDialog.vue:360 ~ onSaved ~ text:", text);
  localStorage.setItem("setting", JSON.stringify(setting.value));
  store.setting = setting.value;
  verifyStatus.value = text;
  isVerified.value = true;
  setTimeout(() => {
    isVerified.value = false;
  }, 2000);
  let saveConfig = {
    desk_name: setting.value.table_no,
    boot_num: 0,
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
    second: '',
    status: '',
    verify: setting.value.verification_code,
  }
  let res =  await add(saveConfig)
  emit("onClose");

  // emit("onClose");
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
      console.log(config,'config====');
   } catch (e) {
    console.log(e.message);
  }
}

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
