<template>
  <div class="grid bg-white">
    <div
      v-for="(row, rowKey) in BreadPlateResults"
      :key="rowKey"
      class="grid__row"
    >
      <div
        v-for="(col, colKey) in row"
        :key="colKey"
        class="grid__col text-gray-200"
      >
        <div :class="beadRoadResult(col.value)">
          <span
            v-if="
              (col && col.value === 'q') ||
              (col && col.value === 'w') ||
              (col && col.value === 'f') ||
              (col && col.value === 'g') ||
              (col && col.value === 'i') ||
              (col && col.value === 'j')
            "
            class="absolute -top-1 -left-1 inline-flex items-center rounded-full bg-red-500 px-2 py-2"
          ></span>
          <span
            v-if="
              (col && col.value === 'e') ||
              (col && col.value === 'h') ||
              (col && col.value === 'g') ||
              (col && col.value === 'w') ||
              (col && col.value === 'j') ||
              (col && col.value === 'k')
            "
            class="absolute -bottom-2 -right-1 inline-flex items-center rounded-full bg-blue-500 px-2 py-2"
          ></span>
          <div>
            <p v-if="col.value" class="">
              {{ beadRoadValue(col.value) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  props: ["BreadPlateResults"],
  methods: {
    beadRoadResult(value) {
      let beadRoadClass = "";
      switch (value) {
        case "b":
          beadRoadClass = "banker";
          break;
        case "p":
          beadRoadClass = "player";
          break;
        case "t":
          beadRoadClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "q":
          beadRoadClass = "banker";
          break;
        case "w":
          beadRoadClass = "banker";
          break;
        case "e":
          beadRoadClass = "banker";
          break;
        case "f":
          beadRoadClass = "player";
          break;
        case "g":
          beadRoadClass = "player";
          break;
        case "h":
          beadRoadClass = "player";
          break;
        case "i":
          beadRoadClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "j":
          beadRoadClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        case "k":
          beadRoadClass =
            "bg-green-500 rounded-full border-4 border-green-700 w-8 h-8";
          break;
        default:
          break;
      }
      return (
        "flex flex-col justify-center items-center relative " + beadRoadClass
      );
    },
    beadRoadValue(value) {
      let returnValue = "";
      switch (value) {
        case "b":
          returnValue = "庄";
          break;
        case "p":
          returnValue = "闲";
          break;
        case "t":
          returnValue = "和";
          break;
        case "q":
          returnValue = "庄";
          break;
        case "w":
          returnValue = "庄";
          break;
        case "e":
          returnValue = "庄";
          break;
        case "f":
          returnValue = "闲";
          break;
        case "g":
          returnValue = "闲";
          break;
        case "h":
          returnValue = "闲";
          break;
        case "i":
          returnValue = "和";
          break;
        case "j":
          returnValue = "和";
          break;
        case "k":
          returnValue = "和";
          break;
        default:
          break;
      }
      return returnValue;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/Home.scss";
</style>
