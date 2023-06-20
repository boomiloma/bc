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
                          v-if="
                            lastKeyPressed === 'q' ||
                            lastKeyPressed === 'w' ||
                            lastKeyPressed === 'f' ||
                            lastKeyPressed === 'g' ||
                            lastKeyPressed === 'i' ||
                            lastKeyPressed === 'j' ||
                            lastKeyPressed === 'r' ||
                            lastKeyPressed === 'u' ||
                            lastKeyPressed === 'aq' ||
                            lastKeyPressed === 'aw' ||
                            lastKeyPressed === 'cq' ||
                            lastKeyPressed === 'cw' ||
                            lastKeyPressed === 'df' ||
                            lastKeyPressed === 'dg' ||
                            lastKeyPressed === 'xf' ||
                            lastKeyPressed === 'xg' ||
                            lastKeyPressed === 'vi' ||
                            lastKeyPressed === 'vj' ||
                            lastKeyPressed === 'yi' ||
                            lastKeyPressed === 'yj'
                          "
                          class="big-red-dot-left-top"
                        ></span>
                        <span
                          v-if="
                            lastKeyPressed === 'e' ||
                            lastKeyPressed === 'h' ||
                            lastKeyPressed === 'g' ||
                            lastKeyPressed === 'w' ||
                            lastKeyPressed === 'j' ||
                            lastKeyPressed === 'k' ||
                            lastKeyPressed === 'u' ||
                            lastKeyPressed === 's' ||
                            lastKeyPressed === 'ae' ||
                            lastKeyPressed === 'aw' ||
                            lastKeyPressed === 'ce' ||
                            lastKeyPressed === 'cw' ||
                            lastKeyPressed === 'dh' ||
                            lastKeyPressed === 'dg' ||
                            lastKeyPressed === 'xh' ||
                            lastKeyPressed === 'xg' ||
                            lastKeyPressed === 'yk' ||
                            lastKeyPressed === 'vj' ||
                            lastKeyPressed === 'yk' ||
                            lastKeyPressed === 'yj' ||
                            lastKeyPressed === 'vk'
                          "
                          class="big-blue-dot-right-bottom"
                        ></span>
                        <span
                          v-if="
                            lastKeyPressed === 'c' ||
                            lastKeyPressed === 'x' ||
                            lastKeyPressed === 'y' ||
                            lastKeyPressed === 'cq' ||
                            lastKeyPressed === 'cw' ||
                            lastKeyPressed === 'ce' ||
                            lastKeyPressed === 'xf' ||
                            lastKeyPressed === 'xg' ||
                            lastKeyPressed === 'xh' ||
                            lastKeyPressed === 'yi' ||
                            lastKeyPressed === 'yj' ||
                            lastKeyPressed === 'yk'
                          "
                          class="big-black-dot-right-top flex flex-row justify-center items-center align-items-center font-semibold"
                          style="font-size: 30px"
                          ><p>{{ $t("big") }}</p></span
                        >
                        <span
                          v-if="
                            lastKeyPressed === 'a' ||
                            lastKeyPressed === 'd' ||
                            lastKeyPressed === 'v' ||
                            lastKeyPressed === 'aq' ||
                            lastKeyPressed === 'aw' ||
                            lastKeyPressed === 'ae' ||
                            lastKeyPressed === 'df' ||
                            lastKeyPressed === 'dg' ||
                            lastKeyPressed === 'dh' ||
                            lastKeyPressed === 'vi' ||
                            lastKeyPressed === 'vj' ||
                            lastKeyPressed === 'vk'
                          "
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
      switch (value) {
        case "b":
          return "golden-border-modal-red";
        case "p":
          return "golden-border-modal-blue";
        case "t":
          return "golden-border-modal-green";
        case "q":
          return "golden-border-modal-red";
        case "w":
          return "golden-border-modal-red";
        case "e":
          return "golden-border-modal-red";
        case "f":
          return "golden-border-modal-blue";
        case "g":
          return "golden-border-modal-blue";
        case "h":
          return "golden-border-modal-blue";
        case "i":
          return "golden-border-modal-green";
        case "j":
          return "golden-border-modal-green";
        case "k":
          return "golden-border-modal-green";
        case "a":
          return "golden-border-modal-red";
        case "c":
          return "golden-border-modal-red";
        case "aq":
          return "golden-border-modal-red";
        case "aw":
          return "golden-border-modal-red";
        case "ae":
          return "golden-border-modal-red";
        case "cq":
          return "golden-border-modal-red";
        case "cw":
          return "golden-border-modal-red";
        case "ce":
          return "golden-border-modal-red";

        case "d":
          return "golden-border-modal-blue";
        case "x":
          return "golden-border-modal-blue";
        case "df":
          return "golden-border-modal-blue";
        case "dg":
          return "golden-border-modal-blue";
        case "dh":
          return "golden-border-modal-blue";
        case "xf":
          return "golden-border-modal-blue";
        case "xg":
          return "golden-border-modal-blue";
        case "xh":
          return "golden-border-modal-blue";

        case "v":
          return "golden-border-modal-green";
        case "y":
          return "golden-border-modal-green";

        case "vi":
          return "golden-border-modal-green";
        case "vj":
          return "golden-border-modal-green";
        case "vk":
          return "golden-border-modal-green";
        case "yi":
          return "golden-border-modal-green";
        case "yj":
          return "golden-border-modal-green";
        case "yk":
          return "golden-border-modal-green";
        default:
          break;
      }
    },
    ModalPlayerClass(value) {
      switch (value) {
        case "b":
          return "banker-win";
        case "p":
          return "player-win";
        case "t":
          return "tie-win";
        case "q":
          return "banker-win";
        case "w":
          return "banker-win";
        case "e":
          return "banker-win";
        case "f":
          return "player-win";
        case "g":
          return "player-win";
        case "h":
          return "player-win";
        case "i":
          return "tie-win";
        case "j":
          return "tie-win";
        case "k":
          return "tie-win";
        case "z":
          return "banker-win";
        case "r":
          return "banker-win";
        case "s":
          return "banker-win";
        case "u":
          return "banker-win";
        case "a":
          return "banker-win";
        case "c":
          return "banker-win";
        case "d":
          return "player-win";
        case "x":
          return "player-win";
        case "v":
          return "tie-win";
        case "y":
          return "tie-win";

        case "aq":
          return "banker-win";
        case "aw":
          return "banker-win";
        case "ae":
          return "banker-win";
        case "cq":
          return "banker-win";
        case "cw":
          return "banker-win";
        case "ce":
          return "banker-win";

        case "df":
          return "player-win";
        case "dg":
          return "player-win";
        case "dh":
          return "player-win";
        case "xf":
          return "player-win";
        case "xg":
          return "player-win";
        case "xh":
          return "player-win";

        case "vi":
          return "tie-win";
        case "vj":
          return "tie-win";
        case "vk":
          return "tie-win";
        case "yi":
          return "tie-win";
        case "yj":
          return "tie-win";
        case "yk":
          return "tie-win";
        default:
          break;
      }
    },
    ModelContentValue(value) {
      let returnValue = "";
      console.log(
        "🚀 ~ file: BaseInputDialog.vue:338 ~ ModelContentValue ~ returnValue:",
        returnValue,
        value
      );
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
        case "z":
          returnValue = "6";
          break;
        case "r":
          returnValue = "6";
          break;
        case "s":
          returnValue = "6";
          break;
        case "u":
          returnValue = "6";
          break;
        case "a":
          returnValue = "庄";
          break;
        case "c":
          returnValue = "庄";
          break;
        case "d":
          returnValue = "闲";
          break;
        case "x":
          returnValue = "闲";
          break;
        case "v":
          returnValue = "和";
          break;
        case "y":
          returnValue = "和";
          break;

        case "aq":
          returnValue = "庄";
          break;

        case "aw":
          returnValue = "庄";
          break;

        case "ae":
          returnValue = "庄";
          break;

        case "cq":
          returnValue = "庄";
          break;

        case "cw":
          returnValue = "庄";
          break;

        case "ce":
          returnValue = "庄";
          break;

        case "df":
          returnValue = "闲";
          break;

        case "dg":
          returnValue = "闲";
          break;

        case "dh":
          returnValue = "闲";
          break;

        case "xf":
          returnValue = "闲";
          break;

        case "xg":
          returnValue = "闲";
          break;

        case "xh":
          returnValue = "闲";
          break;

        case "vi":
          returnValue = "和";
          break;

        case "vj":
          returnValue = "和";
          break;

        case "vk":
          returnValue = "和";
          break;

        case "yi":
          returnValue = "和";
          break;

        case "yj":
          returnValue = "和";
          break;

        case "yk":
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

<style>
.dialog-content {
  height: 80%;
  width: 35%;
}

.golden-border-modal .modal-content {
  border: 10px solid #ac987d;
  border-radius: 10px;
  background: url(../../src/assets/images/bg-blue1.webp);
  background-size: cover;
  background-position: center;
}
.big-circle {
  width: 100%;
  height: 100%;
  position: relative;
}
.circle-content {
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  text-align: center;
  margin: 40px auto;
  background: rgb(0, 168, 252);
  background: -moz-linear-gradient(
    top,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00a8fc', endColorstr='#0059ff',GradientType=0 );
  border: 10px solid #ac987d;
  line-height: 480px !important;
  font-size: 180px;
  color: #fff;
}
.player-win .circle-content {
  background: rgb(0, 168, 252);
  background: -moz-linear-gradient(
    top,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00a8fc', endColorstr='#0059ff',GradientType=0 );
}
.banker-win .circle-content {
  background: -moz-linear-gradient(top, #ff1a00 0%, #9a0000 100%);
  background: -webkit-linear-gradient(top, #ff1a00 0%, #9a0000 100%);
  background: linear-gradient(to bottom, #ff1a00 0%, #9a0000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff1a00', endColorstr='#9a0000',GradientType=0 );
}
.tie-win .circle-content {
  background: -moz-linear-gradient(top, #46ff11 0%, #137c21 100%);
  background: -webkit-linear-gradient(top, #46ff11 0%, #137c21 100%);
  background: linear-gradient(to bottom, #46ff11 0%, #137c21 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#46ff11 ', endColorstr='#137c21',GradientType=0 );
}
.big-red-dot-left-top {
  background: -moz-linear-gradient(top, #ff3019 0%, #cf0404 100%);
  background: -webkit-linear-gradient(top, #ff3019 0%, #cf0404 100%);
  background: linear-gradient(to bottom, #ff3019 0%, #cf0404 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff3019', endColorstr='#cf0404',GradientType=0 );
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: absolute;
  left: 30px;
  top: 30px;
  border: 4px solid #ac987d;
}
.big-black-dot-left-bottom {
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    top,
    rgb(129, 129, 129) 0%,
    rgb(75, 75, 75) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgb(63, 59, 59) 0%,
    rgb(31, 28, 28) 100%
  );
  background: linear-gradient(to bottom, rgb(49, 49, 49) 0%, rgb(0, 0, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00a8fc', endColorstr='#0059ff',GradientType=0 );
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: absolute;
  left: 30px;
  bottom: 30px;
  border: 4px solid #ac987d;
  color: white;
}
.big-black-dot-right-top {
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    top,
    rgb(129, 129, 129) 0%,
    rgb(75, 75, 75) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgb(63, 59, 59) 0%,
    rgb(31, 28, 28) 100%
  );
  background: linear-gradient(to bottom, rgb(49, 49, 49) 0%, rgb(0, 0, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00a8fc', endColorstr='#0059ff',GradientType=0 );
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: absolute;
  right: 30px;
  top: 30px;
  border: 4px solid #ac987d;
  color: white;
}
.big-red-dot-right-bottom {
  background: -moz-linear-gradient(top, #ff3019 0%, #cf0404 100%);
  background: -webkit-linear-gradient(top, #ff3019 0%, #cf0404 100%);
  background: linear-gradient(to bottom, #ff3019 0%, #cf0404 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff3019', endColorstr='#cf0404',GradientType=0 );
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  bottom: 40px;
  border: 4px solid #ac987d;
}
.big-blue-dot-left-top {
  background: rgb(0, 168, 252);
  background: -moz-linear-gradient(
    top,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00a8fc', endColorstr='#0059ff',GradientType=0 );
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: absolute;
  left: 0;
  top: 40px;
  border: 4px solid #ac987d;
}
.big-blue-dot-right-bottom {
  background: rgb(0, 168, 252);
  background: -moz-linear-gradient(
    top,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 168, 252, 1) 0%,
    rgba(0, 89, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00a8fc', endColorstr='#0059ff',GradientType=0 );
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: absolute;
  right: 30px;
  bottom: 30px;
  border: 4px solid #ac987d;
}
.big-black-dot-left-bottom {
  background: rgb(46, 46, 46);
  background: -moz-linear-gradient(top, rgb(65, 65, 65) 0%, rgb(0, 0, 0) 100%);
  background: -webkit-linear-gradient(
    top,
    rgb(87, 87, 87) 0%,
    rgb(0, 0, 0) 100%
  );
  background: linear-gradient(to bottom, rgb(49, 49, 49) 0%, rgb(0, 0, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00a8fc', endColorstr='#0059ff',GradientType=0 );
  border-radius: 50%;
  width: 70px;
  height: 70px;
  position: absolute;
  right: 0;
  bottom: 40px;
  border: 4px solid #ac987d;
}

.golden-border-modal-gray .modal-content {
  border: 4px solid #ac987d;
  border-radius: 10px;
  background: url(../../src/assets/images/gray-1.jpg);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.golden-border-modal-gray .modal-body:after {
  position: absolute;
  content: "";
  /* background: rgba(0, 0, 0, 0.5); */
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
  border: 4px solid #ac987d;
  border-radius: 10px;
  background: url(../../src/assets/images/red-1.jpg);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.golden-border-modal-red .modal-body:after {
  position: absolute;
  content: "";
  /* background: rgba(0, 0, 0, 0.4); */
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
  font-size: 120px;
  color: #fff;
  margin-right: 50px;
  font-weight: bold;
}
.mid-text {
  margin-right: 50px;
}
.golden-border-modal-blue .modal-content {
  border: 8px solid #ac987d;
  border-radius: 10px;
  background: url(../../src/assets/images/bg-blue1.webp);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.golden-border-modal-blue .modal-body:after {
  position: absolute;
  content: "";
  /* background: rgba(0, 0, 0, 0.4); */
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.golden-border-modal-green .modal-content {
  border: 8px solid #ac987d;
  border-radius: 10px;
  background: url(../../src/assets/images/bg-blue1.webp);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.golden-border-modal-green .modal-body:after {
  position: absolute;
  content: "";
  /* background: rgba(0, 0, 0, 0.4); */
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.right-num {
  font-size: 120px;
  color: #fff;
  font-weight: bold;
}
.text-3D {
  position: absolute;
  top: 45%;
  right: 50%;
  transform: translate(50%, -50%);
  text-transform: uppercase;
  font-family: verdana;
  font-size: 270px;
  font-weight: 700;
  color: #fafafa;
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
    1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
}
</style>
