<template>
  <div class="fixed inset-0 flex items-center justify-center"></div>
  <TransitionRoot appear :show="props.isOpenCountDown" as="template">
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
              :style="'width:500px; height:300px;'"
              class="transform overflow-hidden rounded-md text-left shadow-xl gap-5 bg-slate-700 flex flex-row justify-center items-center border border-solid border-yellow-600"
            >
              <p class="text-4xl font-bold">结算中...</p>
              <p class="text-4xl font-bold text-lime-500">{{ countdown }}</p>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import CountdownSound from "@/assets/sounds/countdown.mp3";
import { ref, onMounted, watch } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

const props = defineProps({
  isOpenCountDown: Boolean,
});
const emit = defineEmits(["onClose", "onSave"]);

const countdown = ref(3);
const audio = ref(null);

const playSoundAndClose = () => {
  audio.value.play();
  audio.value.onended = () => {
    emit("onClose");
    props.isOpenCountDown = false;
  };
};

onMounted(() => {
  audio.value = new Audio(CountdownSound);

  watch(
    () => props.isOpenCountDown,
    (newVal) => {
      if (newVal) {
        playSoundAndClose();

        countdown.value = 3;
        const countdownInterval = setInterval(() => {
          countdown.value--;
          if (countdown.value === 0) {
            clearInterval(countdownInterval);
          }
        }, 1000);
      }
    }
  );
});
</script>
