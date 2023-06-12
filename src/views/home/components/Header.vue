<template>
  <header class="header-main container-fluid-custom">
    <div class="header-top">
      <div class="px-3">
        <div class="flex flex-row items-center">
          <div class="left-part-text">
            <div class="flex flex-row items-center">
              <div class="blocks-one-side-left">
                <div class="terrace-details">
                  <span class="text-left font-bold text-3xl">台号:</span>
                  <span class="text-right font-bold text-3xl"> 100号桌</span>
                </div>
                <div class="boot-size">
                  <span class="text-left font-bold text-3xl">靴号:</span>
                  <span class="text-right font-bold text-3xl"> 8</span>
                </div>
                <div class="no-of-rounds">
                  <span class="text-left font-bold text-3xl">局数:</span>
                  <span class="text-right font-bold text-3xl"> 22</span>
                </div>
                <div class="status">
                  <span class="text-left font-bold text-3xl">状态:</span>
                  <span class="text-right font-bold text-3xl">结算完成</span>
                </div>
                <div class="countdown">
                  <span class="text-left font-bold text-3xl">倒计时:</span>
                  <span class="text-right font-bold text-3xl"> 0秒</span>
                </div>
              </div>
              <div class="blocks-one-sde-right ms-auto">
                <div class="btn-start">
                  <button
                    type="button"
                    class="btn-theme btn-1 font-bold text-3xl"
                  >
                    开始
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
                设置
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
    <Setting  @onClose="isOpen = false"/>
  </BaseDialog>
</template>
<script>
import { Icon } from "@iconify/vue";
import Setting from "./Dialogs/SettingDialog.vue";
import BaseDialog from "@/components/BaseDialog.vue";

export default {
  components: {
    Setting,
    Icon,
    BaseDialog,
  },
  data() {
    return {
      isOpen: false,
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/Header.scss";
</style>
