<template>
  <!-- <dialog open> -->
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
              </div>
              <!-- <div class="mt-3 row">
                <div class="col-5">
                  <button type="button" class="btn-theme btn-1">
                    {{ $t("change_table_id") }}
                  </button>
                </div>
              </div> -->
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
              <!-- <div class="mt-3 row">
                <div class="col-5">
                  <button type="button" class="btn-theme btn-1">
                    {{ $t("change") }}
                  </button>
                </div>
              </div> -->
              <!-- <div class="mt-3 row">
                <div class="col-12">
                  <h4 class="text-white my-3">模式切换</h4>
                </div>
              </div>
              <div class="mt-3 row">
                <ul class="col-12">
                  <ul class="list-inline">
                    <li class="list-inline-item text-white radio-field">
                      <label for="muhRadio1"
                        ><input type="radio" name="muhRadio" /> 线上模式</label
                      >
                    </li>
                    <li class="list-inline-item text-white radio-field">
                      <label for="muhRadio2"
                        ><input type="radio" name="muhRadio" value="" />
                        线下模式</label
                      >
                    </li>
                  </ul>
                </ul>
              </div> -->
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
              </div>
              <!-- <div class="mt-3 row">
                <div class="col-5">
                  <button type="button" class="btn-theme btn-1">
                    {{ $t("change") }}
                  </button>
                </div>
              </div> -->
            </div>
          </div>
          <div class="mt-3 row">
            <div class="col-7">
              <div class="row">
                <div class="col-5">
                  <button
                    @click="onSaved"
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
                  <button @click="isConfirm = true" type="button" class="btn-theme btn-1 py-1 fs-3">
                    {{ $t("change_shoe") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BaseDialog width="300" :isOpen="isConfirm">
       <div style="background: #2f4963; padding: 20px">
        <div>
          <Icon
            height="20."
            style="cursor: pointer"
            icon="fa:close"
            @click="isConfirm = false"
            class="float-right"
          />
        </div>

        <h3>你想清除吗</h3>
        <input /> 
        <button
          type="button"
          class="inline-flex mt-3 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          好的
        </button>
      </div>
    </BaseDialog>
  </div>
  <!-- </dialog> -->
</template>
<script setup>
import { store } from "@/store/store";
import { ref, onMounted, watch, computed } from "vue";
import { Icon } from "@iconify/vue";
import BaseDialog from "@/components/BaseDialog.vue";
const emit = defineEmits(["onClose", "onSave"]);
const isConfirm = ref(false);
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

function onSaved() {
  localStorage.setItem("setting", JSON.stringify(setting.value));
  store.setting = setting.value;
  emit("onClose");
}
// currencyChange();
onLoad();
async function onLoad() {
  let getSetting = await localStorage.getItem("setting");
  if (getSetting) {
    setting.value = JSON.parse(getSetting);
  } else {
    setting.value = store.setting
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/Dialogs/SettingsDialog.scss";
</style>
