<template>
  <div class="fixed inset-0 flex items-center justify-center"></div>
  <TransitionRoot appear :show="isInsuranceOpen" as="template">
    <Dialog as="div" @close="emit('onClose')" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              :style="'width:70%; height:60%;'"
              class="transform overflow-hidden rounded-md text-left shadow-xl h-auto"
              :class="checkInsuranceType(insuranceType)"
            >
              <div class="modal-content">
                <div class="modal-body text-center py-5">
                  <div class="content-inside-modal">
                    <h3
                      class="text-white mb-6 fw-bold text-6xl font-semibold mt-12"
                    >
                      庄保险
                    </h3>
                    <h3 class="text-white mb-16 text-5xl capitalize">
                      Insurance for Betting on {{ insuranceType }}
                    </h3>
                    <div class="middle-arranged">
                      <div class="left-num" v-if="insuranceType">1</div>
                      <div class="mb-20">
                        <h2 class="text-white text-7xl">赔</h2>
                        <h2 class="text-white text-7xl">to</h2>
                      </div>
                      <div class="ml-10 right-num" v-if="insuranceMax > 0">
                        {{ insuranceMax }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

const props = defineProps({
  isInsuranceOpen: Boolean,
  insuranceType: String,
  insuranceMax: Number,
});
const emit = defineEmits(["onClose", "onSave"]);
function checkInsuranceType(type) {
  if (type === "banker") {
    return "golden-border-modal-red";
  } else if (type === "player") {
    return "golden-border-modal-blue";
  }
  return "golden-border-modal-gray";
}
</script>
<style scoped>
.golden-border-modal-gray .modal-content {
  border: 4px solid #ac987d;
  border-radius: 10px;
  background: url(../assets/images/gray-1.jpg);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.golden-border-modal-gray .modal-body:after {
  position: absolute;
  content: "";
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.golden-border-modal-gray .modal-body h2,
.golden-border-modal-gray .modal-body h3 {
  position: relative;
  z-index: 3;
}

.golden-border-modal-red .modal-content {
  border: 4px solid #aca77d;
  border-radius: 10px;
  background: url(../assets/images/red-1.jpg);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.golden-border-modal-red .modal-body:after {
  position: absolute;
  content: "";
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.content-inside-modal {
  position: relative;
  z-index: 9;
}
.middle-arranged {
  display: flex;
  width: fit-content;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.left-num {
  font-size: 200px;
  color: #fff;
  margin-right: 50px;
  font-weight: bold;
}
.mid-text {
  margin-right: 50px;
}
.golden-border-modal-blue .modal-content {
  border: 4px solid #ac987d;
  border-radius: 10px;
  background: url(../assets/images/blue-1.jpg);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.golden-border-modal-blue .modal-body:after {
  position: absolute;
  content: "";
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.right-num {
  font-size: 200px;
  color: #fff;
  font-weight: bold;
}
.form-group {
  margin-bottom: 10px;
}
</style>
