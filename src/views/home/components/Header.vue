<template>
  <header class="header-main container-fluid-custom">
    <div class="header-top">
      <div class="px-3">
        <div class="flex flex-row items-center">
          <div class="left-part-text">
            <div class="flex flex-row items-center">
              <div class="blocks-one-side-left">
                <div class="terrace-details">
                  <span class="text-left">台号:</span>
                  <span class="text-right">100号桌</span>
                </div>
                <div class="boot-size">
                  <span class="text-left">靴号:</span>
                  <span class="text-right">8</span>
                </div>
                <div class="no-of-rounds">
                  <span class="text-left">局数:</span>
                  <span class="text-right">22</span>
                </div>
                <div class="status">
                  <span class="text-left">状态:</span>
                  <span class="text-right">结算完成</span>
                </div>
                <div class="online">
                  <span class="text-left">在线:</span>
                  <span class="text-right">0</span>
                </div>
                <div class="countdown">
                  <span class="text-left">倒计时:</span>
                  <span class="text-right">0秒</span>
                </div>
              </div>
              <div class="blocks-one-sde-right ms-auto">
                <div class="btn-start">
                  <button type="button" class="btn-theme btn-1">开始</button>
                </div>
              </div>
            </div>
          </div>
          <div class="right-part-text ms-auto">
            <div class="flex flex-row items-center">
              <button type="button" class="btn-theme btn-1 me-4">设置</button>
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
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/Header.scss";
</style>
