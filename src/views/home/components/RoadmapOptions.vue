<template>
  <div class="roadmap-options">
    <img
      src="@/assets/images/setting.png"
      alt=""
      class="cursor-pointer"
      @click.stop="config.show_options = 1"
    />

    <base-card
      v-if="config.show_options"
      class="settings-card"
      @close="config.show_options = false"
    >
      <template #title> Settings </template>

      <div class="input-form">
        <input v-model="config.rows" label="Rows" type="search" class="mb-2" />
      </div>
      <div class="input-form">
        <input v-model="config.cols" label="Cols" type="search" />
      </div>

      <template #footer>
        <base-button class="bg-blue-500 text-white" @click="$emit('save')">
          Save
        </base-button>
      </template>
    </base-card>
  </div>
</template>

<script>
import BaseCard from "../../../components/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },

  computed: {
    config: {
      set(val) {
        this.$emit("input", val);
      },

      get() {
        return this.value;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.roadmap-options {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;

  img {
    width: 25px;
    height: 25px;
    margin: 10px;
    z-index: 1;
    opacity: 0.3;
    transition: 100ms ease opacity;

    &:hover {
      opacity: 1;
    }
  }

  .settings-card {
    position: absolute;
    width: 300px;
    z-index: 2;
  }
}
.input-form {
  display: block;

  label {
    display: block;
    font-size: pxToRem(11);
    color: theme("colors.gray.200");
  }

  input {
    background-color: rgba(64, 64, 64, 0.5);
    border: 1px solid rgba(64, 64, 64, 0.7);
    border-radius: 3px;
    padding: 5px 7px;
    width: 100%;
    font-size: pxToRem(13);
  }
}
</style>
