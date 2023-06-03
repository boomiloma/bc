<template>
  <div>
    <button @click="openDialog" class="bg-slate-500 rounded-lg px-2 py-2">
      Open Dialog
    </button>
    <div v-if="isDialogOpen" class="dialog-overlay">
      <div class="border-4 border-yellow-300 w-100 rounded-xl bg-blue-300">
        <div
          class="rounded-full border-4 border-yellow-300 bg-blue-500 py-10 w-80 h-80 flex justify-center items-center flex-col my-8 mx-8"
        >
          <h2 class="text-9xl font-extrabold">B</h2>
          <button @click="closeDialog">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "Dialog Title",
    },
    message: {
      type: String,
      default: "Dialog Message",
    },
  },
  setup() {
    const isDialogOpen = ref(false);

    function openDialog() {
      isDialogOpen.value = true;
    }

    function closeDialog() {
      isDialogOpen.value = false;
    }

    return {
      isDialogOpen,
      openDialog,
      closeDialog,
    };
  },
};
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .dialog {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
} */

button {
  margin-top: 10px;
}
</style>
