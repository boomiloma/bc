<template>
  <div
    class="text-black bg-white" style="width: 130px; margin-left: 6px; margin-bottom: 6px;"
  >
    <div class="flex flex-row items-center justify-center border-b-2" style="padding: 5px 0;">
      <p class="" style="color: #253849; font-size: 28px;">{{ $t("prediction") }}</p>
    </div>
    <div class="flex flex-col gap-4 justify-center mt-1">
      <div class="flex flex-row items-center justify-evenly gap-1">
        <div
          class="banker-fill"
          :class="{
            'shadow-lg shadow-slate-500 rounded-full  transition-all':
              predictType === 'b' && store.isPredict,
          }"
        >
          <span
            class="main hover:cursor-pointer select-none"
            @click="predictBanker"
          >
            {{ $t("b") }}
          </span>
        </div>
        <div
          class="player-fill"
          :class="{
            'shadow-xl shadow-slate-500 rounded-full transition-all':
              predictType === 'p' && store.isPredict,
          }"
        >
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
    class="text-black bg-white" style="width:143px; margin-left: 6px; margin-bottom: 6px;"
  >
    <div class="flex flex-row items-start justify-center border-b-2"  style="padding: 5px 0;">
      <p class="" style="color: #253849; font-size: 28px;">{{ results.length }}</p>
    </div>
    <div class="flex flex-col gap-2 justify-center">
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"  style="padding: 5px 16px;"
      >
        <span class="text-2xl text-red-500 mx-1">
          {{ $t("b") }}
        </span>
        <span class="text-2xl text-red-500 mx-1">
          {{ filterBanker() }}
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"  style="padding: 5px 16px;"
      >
        <span class="text-2xl text-blue-500 mx-1">
          {{ $t("p") }}
        </span>
        <span class="text-2xl text-blue-500 mx-1">
          {{ filterPlayer() }}
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"  style="padding: 5px 16px;"
      >
        <span class="text-2xl text-green-500 mx-1">
          {{ $t("t") }}
        </span>
        <span class="text-2xl text-green-500 mx-1">
          {{ filterTie() }}
        </span>
      </div>
      <div
        class="flex flex-row items-center justify-between gap-2 border-b-2 py-1"  style="padding: 5px 16px;"
      >
        <span class="text-2xl text-red-500 mx-1">
          {{ $t("bp") }}
        </span>
        <span class="text-2xl text-red-500 mx-1">
          {{ filterBankerPair() }}
        </span>
      </div>
      <div class="flex flex-row items-center justify-between gap-2" style="padding: 5px 16px;">
        <span class="text-2xl text-blue-500 mx-1">
          {{ $t("pp") }}
        </span>
        <span class="text-2xl text-blue-500 mx-1">
          {{ filterPlayerPair() }}
        </span>
      </div>
    </div>
  </div>
  <!-- Table Limit -->
  <div
    class="items-stretch justify-center border-black text-black bg-white" style="width:458px; margin-left: 6px; margin-bottom: 6px;"
  >
    <div class="grid grid-cols-2" style="border: 0;">
      <div class="flex flex-row justify-center border-b-2 items-center" style="padding: 5px 0;">
        <p style="color: #253849; font-size: 28px;">{{ $t("table_limit") }}</p>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-ixl w-28 flex flex-row justify-center items-center text-black border-r-2"
        >
          {{ $t("b") }}/{{ $t("p") }}
        </div>
        <div
          class="text-ixl w-full flex flex-col justify-start items-baseline text-blue-500 py-1"
        >
          <div class="border-b-2 w-full ">
            {{ $t("usd") }} : {{ store.setting["usd"]?.min_bp ?? 0 }}-{{
              store.setting["usd"]?.max_bp ?? 0
            }}
          </div>
          <div class="">
            {{ $t("thb") }} : {{ store.setting["thb"]?.min_bp ?? 0 }}-{{
              store.setting["thb"]?.max_bp ?? 0
            }}
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-ixl w-28 flex flex-row justify-center items-center text-black border-r-2"
        >
          {{ $t("t") }}
        </div>
        <div
          class="text-ixl w-full flex flex-col justify-start items-baseline text-blue-500 py-1"
        >
          <div class="border-b-2 w-full">
            {{ $t("usd") }} : {{ store.setting["usd"]?.min_tie ?? 0 }}-{{
              store.setting["usd"]?.max_tie ?? 0
            }}
          </div>
          <div class="">
            {{ $t("thb") }} : {{ store.setting["thb"]?.min_tie ?? 0 }}-{{
              store.setting["thb"]?.max_tie ?? 0
            }}
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-ixl w-28 flex flex-row justify-center items-center text-black border-r-2"
        >
          {{ $t("pair") }}
        </div>
        <div
          class="text-ixl w-full flex flex-col justify-start items-baseline text-blue-500 py-1"
        >
          <div class="border-b-2 w-full ">
            {{ $t("usd") }} : {{ store.setting["usd"]?.min_pair ?? 0 }}-{{
              store.setting["usd"]?.max_pair ?? 0
            }}
          </div>
          <div class="">
            {{ $t("thb") }} : {{ store.setting["thb"]?.min_pair ?? 0 }}-{{
              store.setting["thb"]?.max_pair ?? 0
            }}
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center border-b-2">
        <div
          class="text-ixl w-28 flex flex-row justify-center items-center text-black border-r-2"
        >
          {{ $t("lucky_6") }}
        </div>
        <div
          class="text-ixl w-full flex flex-col justify-start items-baseline text-blue-500 py-1"
        >
          <div class="border-b-2 w-full">
            {{ $t("usd") }} : {{ store.setting["usd"]?.min_lucky6 ?? 0 }}-{{
              store.setting["usd"]?.max_lucky6 ?? 0
            }}
          </div>
          <div class="">
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
      predictType: "",
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
      this.predictType = "b";
    },
    predictPlayer() {
      if (this.RoadMap.breadplate.index > 0) this.$emit("Predict", "p");
      this.predictType = "p";
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
