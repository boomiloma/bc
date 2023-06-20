<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
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
          class="flex min-h-full items-center justify-center p-4 text-center golden-border-modal"
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
              class="transform dialog-content transition-all max-w-full golden-border-modal-blue"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div
                  class="modal-content flex flex-col justify-center"
                  style="height: 600px"
                >
                  <div class="modal-body">
                    <div
                      class="big-circle"
                      :class="ModalPlayerClass(lastKeyPressed)"
                    >
                      <div class="circle-content">
                        <p class="text-3D">
                          {{ ModelContentValue(lastKeyPressed) }}
                        </p>
                        <span
                          v-if="BankerPair(lastKeyPressed)"
                          class="big-red-dot-left-top"
                        ></span>
                        <span
                          v-if="PlayerPair(lastKeyPressed)"
                          class="big-blue-dot-right-bottom"
                        ></span>
                        <span
                          v-if="Big(lastKeyPressed)"
                          class="big-black-dot-right-top flex flex-row justify-center items-center align-items-center font-semibold"
                          style="font-size: 30px"
                          ><p>{{ $t("big") }}</p></span
                        >
                        <span
                          v-if="Small(lastKeyPressed)"
                          class="big-black-dot-left-bottom flex flex-row justify-center items-center align-items-center font-semibold"
                          style="font-size: 30px"
                          ><p>{{ $t("small") }}</p></span
                        >
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
<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import MappingUtils from "../assets/js/roadmap/MappingUtils";

export default {
  props: ["lastKeyPressed", "isOpen"],
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  methods: {
    ModalContentClass(value) {
      return MappingUtils.ModalContentClass(value);
    },
    ModalPlayerClass(value) {
      return MappingUtils.ModalPlayerClass(value);
    },
    ModelContentValue(value) {
      return MappingUtils.ModelContentValue(value);
    },
    BankerPair(value) {
      return MappingUtils.BeadRoadBankerPair(value);
    },
    PlayerPair(value) {
      return MappingUtils.BeadRoadPlayerPair(value);
    },
    Big(value) {
      return MappingUtils.Big(value);
    },
    Small(value) {
      return MappingUtils.Small(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/Dialogs/InputBaseDialog.scss";
</style>
