<template>
  <!-- <dialog open> -->
  <div class="blue-modal">
    <div
      class="modal-dialog modal-dialog-centered modal-lg"
      style="max-width: 1270px"
    >
      <div class="modal-content">
        <div class="modal-header flex border-0 p-3">
          <h5 class="modal-title flex-1">设置</h5>
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
            <h4 class="text-white mb-3">修改台桌</h4>
            <div class="col-7">
              <div class="row">
                <div class="col-4">
                  <p class="text-white">修改台桌:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      value="100号桌"
                    />
                  </div>
                </div>
                <div class="col-4"></div>
              </div>
              <div class="mt-3 row">
                <div class="col-5">
                  <button type="button" class="btn-theme btn-1">
                    修改桌台
                  </button>
                </div>
              </div>
              <div class="mt-3 row">
                <div class="col-12">
                  <h4 class="text-white my-3">现场限红修改区</h4>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p class="text-white">币种:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <select @change="currencyChange" v-model="setting.currency" class="form-control-custom">
                      <option value="usd">美元</option>
                      <option value="thb">泰铢</option>
                    </select>
                  </div>
                </div>
                <div class="col-4"></div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p class="text-white">庄闲限红:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      v-model="setting[setting.currency].limit"
                    />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input   v-model="setting[setting.currency].limit_red" type="text" class="form-control-custom"  />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p class="text-white">和局限红:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input  type="text" class="form-control-custom" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input type="text" class="form-control-custom" value="0" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p class="text-white">对子限红:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input type="text" class="form-control-custom" value="0" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input type="text" class="form-control-custom" value="0" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <p class="text-white">幸运6限红:</p>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input type="text" class="form-control-custom" value="0" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input type="text" class="form-control-custom" value="0" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-5">
              <div class="row">
                <div class="col-5">
                  <p class="text-white">下注倒计时:</p>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <input type="text" class="form-control-custom" value="3" />
                  </div>
                </div>
                <div class="col-4"><p class="text-white">秒</p></div>
              </div>
              <div class="mt-3 row">
                <div class="col-5">
                  <button type="button" class="btn-theme btn-1">修改</button>
                </div>
              </div>
              <div class="mt-3 row">
                <div class="col-12">
                  <h4 class="text-white my-3">模式切换</h4>
                </div>
              </div>
              <div class="mt-3 row">
                <ul class="col-12">
                  <ul class="list-inline">
                    <li class="list-inline-item text-white radio-field">
                      <label for="muhRadio1"
                        ><input type="radio" name="muhRadio" value="" />
                        线上模式</label
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
              </div>
              <div class="mt-1 row">
                <div class="col-12">
                  <h4 class="text-white">换靴验证码</h4>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  <p class="text-white">设置验证码:</p>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-custom"
                      value="123"
                    />
                  </div>
                </div>
                <div class="col-4"></div>
              </div>
              <div class="mt-3 row">
                <div class="col-5">
                  <button type="button" class="btn-theme btn-1">修改</button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 row">
            <div class="col-7">
              <div class="row">
                <div class="col-5">
                  <button type="button" class="btn-theme btn-1">修改</button>
                </div>
                <div class="col-7"></div>
              </div>
            </div>
            <div class="col-5">
              <div class="mt-2 row">
                <div class="col-8">
                  <button @click="onSaved" type="button" class="btn-theme btn-1 py-1 fs-3">
                    更换牌靴
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </dialog> -->
</template>
<script setup>
import { ref, onMounted , watch, computed} from "vue";
import { Icon } from "@iconify/vue";
const emit = defineEmits(["onClose", "onSave"]);

const setting = ref({ 
  currency: 'usd',
  usd: {
    limit: 0,
    limit_red: 2,
    type: 1,
  },
  thb: {
    limit: 0,
    type: 1,
    limit_red: 2,
  }
});

const finalLimit = ref({});

const limitUSD = ref({bp: 1 });
const limitTHB = ref({bp: 2 });

const currencyChange = () => {
  // if(setting.value.currency == "usd"){
  //   setting.value.limit = 1;
  // }
  // if(setting.value.currency == "thb"){
  //   setting.value.limit = 22;
  // }
  console.log('fomr' , setting.value)
}

// const onSaved = () => {

// }

function onSaved(){
  localStorage.setItem('setting', JSON.stringify(setting.value))
}
// currencyChange();
onLoad();
async function  onLoad(){
  let getSetting = await localStorage.getItem('setting')
  if(getSetting){
    setting.value = JSON.parse(getSetting)

  }
}

</script>
<style lang="scss" scoped>
@import "../../styles/Dialogs/SettingsDialog.scss";
</style>
