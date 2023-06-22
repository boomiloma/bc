<template>
  <div
    class="border-l-4 border-b-4 border-solid border-black text-black w-36 bg-white"
  >
    <div class="flex flex-row items-center justify-center border-b-2">
      <p class="text-2xl font-bold">{{ $t("prediction") }}</p>
    </div>
    <div class="flex flex-col gap-5 justify-center mt-1">
      <div class="flex flex-row items-center justify-evenly gap-1">
        <div class="banker-fill">
          <span
            class="main hover:cursor-pointer select-none"
            @click="predictBanker"
          >
            {{ $t("b") }}
          </span>
        </div>
        <div class="player-fill">
          <span
            class="main hover:cursor-pointer select-none"
            @click="predictPlayer"
          >
            {{ $t("p") }}
          </span>
        </div>
      </div>
      <div
        class="flex flex-row items-center justify-evenly gap-1"
        v-if="RoadMap.bigroad.matrix[0][1] !== 0"
      >
        <div class="banker-hollow bw">
          <span class="main"> </span>
        </div>
        <div class="player-hollow pw">
          <span class="main"> </span>
        </div>
      </div>
      <div
        class="flex flex-row items-center justify-evenly gap-1"
        v-if="RoadMap.bigeyeboy.index > 0"
      >
        <div class="banker-fill">
          <span class="main"> </span>
        </div>
        <div class="player-fill">
          <span class="main"> </span>
        </div>
      </div>
      <div
        class="flex flex-row items-center justify-evenly gap-1"
        v-if="RoadMap.bigroad.matrix[0][4] !== 0"
      >
        <div class="red-slash">
          <span class="slash"></span>
        </div>
        <div class="blue-slash">
          <span class="slash"></span>
        </div>
      </div>
    </div>
  </div>

  <div
    class="border border-l-4 border-b-4 border-black text-black w-36 bg-white"
  >
    <div class="flex flex-row items-start justify-center border-b-2">
      <p class="text-2xl font-bold">{{ results.length }}</p>
    </div>
    <div class="flex flex-col gap-2 justify-center">
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"
      >
        <span class="text-3xl font-bold text-red-500 mx-1">
          {{ $t("b") }}
        </span>
        <span class="text-3xl font-bold text-red-500 mx-1">
          {{ filterBanker() }}
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"
      >
        <span class="text-3xl font-bold text-blue-500 mx-1">
          {{ $t("p") }}
        </span>
        <span class="text-3xl font-bold text-blue-500 mx-1">
          {{ filterPlayer() }}
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"
      >
        <span class="text-3xl font-bold text-green-500 mx-1">
          {{ $t("t") }}
        </span>
        <span class="text-3xl font-bold text-green-500 mx-1">
          {{ filterTie() }}
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"
      >
        <span class="text-3xl font-bold text-red-500 mx-1">
          {{ $t("bp") }}
        </span>
        <span class="text-3xl font-bold text-red-500 mx-1">
          {{ filterBankerPair() }}
        </span>
      </div>
      <div class="flex flex-row items-center justify-between gap-2">
        <span class="text-3xl font-bold text-blue-500 mx-1">
          {{ $t("pp") }}
        </span>
        <span class="text-3xl font-bold text-blue-500 mx-1">
          {{ filterPlayerPair() }}
        </span>
      </div>
    </div>
  </div>
  <!-- Table Limit -->
  <div
    class="border border-1 border-solid border-l-0 items-stretch justify-center border-black text-black w-96 bg-white"
  >
    <div class="grid grid-cols-2">
      <div class="flex flex-row justify-center border-b-2 items-center">
        <p class="text-2xl font-bold">{{ $t("table_limit") }}</p>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-2xl w-28 flex flex-row justify-center items-center font-bold text-black border-r-2"
        >
          {{ $t("b") }}/{{ $t("p") }}
        </div>
        <div
          class="text-2xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
        >
          <div class="border-b-2 w-full font-extrabold">
            {{ $t("usd") }} : {{ store.setting["usd"]?.min_bp ?? 0 }}-{{
              store.setting["usd"]?.max_bp ?? 0
            }}
          </div>
          <div class="font-extrabold">
            {{ $t("thb") }} : {{ store.setting["thb"]?.min_bp ?? 0 }}-{{
              store.setting["thb"]?.max_bp ?? 0
            }}
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-2xl w-28 flex flex-row justify-center items-center font-bold text-black border-r-2"
        >
          {{ $t("t") }}
        </div>
        <div
          class="text-2xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
        >
          <div class="border-b-2 w-full font-extrabold">
            {{ $t("usd") }} : {{ store.setting["usd"]?.min_tie ?? 0 }}-{{
              store.setting["usd"]?.max_tie ?? 0
            }}
          </div>
          <div class="font-extrabold">
            {{ $t("thb") }} : {{ store.setting["thb"]?.min_tie ?? 0 }}-{{
              store.setting["thb"]?.max_tie ?? 0
            }}
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-2xl w-28 flex flex-row justify-center items-center font-bold text-black border-r-2"
        >
          {{ $t("pair") }}
        </div>
        <div
          class="text-2xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
        >
          <div class="border-b-2 w-full font-extrabold">
            {{ $t("usd") }} : {{ store.setting["usd"]?.min_pair ?? 0 }}-{{
              store.setting["usd"]?.max_pair ?? 0
            }}
          </div>
          <div class="font-extrabold">
            {{ $t("thb") }} : {{ store.setting["thb"]?.min_pair ?? 0 }}-{{
              store.setting["thb"]?.max_pair ?? 0
            }}
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-xl w-28 flex flex-row justify-center items-center font-bold text-black border-r-2"
        >
          {{ $t("lucky_6") }}
        </div>
        <div
          class="text-2xl w-full flex flex-col justify-start items-baseline font-bold text-blue-500"
        >
          <div class="border-b-2 w-full font-extrabold">
            {{ $t("usd") }} : {{ store.setting["usd"]?.min_lucky6 ?? 0 }}-{{
              store.setting["usd"]?.max_lucky6 ?? 0
            }}
          </div>
          <div class="font-extrabold">
            {{ $t("thb") }} : {{ store.setting["thb"]?.min_lucky6 ?? 0 }}-{{
              store.setting["thb"]?.max_lucky6 ?? 0
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { store } from "@/store/store";
import MappingUtils from "../../../assets/js/roadmap/MappingUtils";

export default {
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
  data() {
    return {
      store,
    };
  },
  props: ["results", "RoadMap"],
  methods: {
    filterBanker() {
      return MappingUtils.CountBankerBeads(this.results);
    },
    filterPlayer() {
      return MappingUtils.CountPlayerBeads(this.results);
    },
    filterTie() {
      return MappingUtils.CountTierBeads(this.results);
    },
    filterBankerPair() {
      return MappingUtils.CountBankerPair(this.results);
    },
    filterPlayerPair() {
      return MappingUtils.CountPlayerPair(this.results);
    },

    predictBanker() {
      if (this.RoadMap.breadplate.index > 0) this.$emit("Predict", "b");
    },
    predictPlayer() {
      if (this.RoadMap.breadplate.index > 0) this.$emit("Predict", "p");
    },
    async onLoad() {
      let getSetting = await localStorage.getItem("setting");
      if (getSetting) {
        store.setting = JSON.parse(getSetting);
      }
    },
  },
  mounted() {
    this.onLoad();
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/roadmaps/Sign.scss";
</style>
