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
                            lastKeyPressed === 'u'
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
                            lastKeyPressed === 's'
                          "
                          class="big-blue-dot-right-bottom"
                        ></span>
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
          break;
        case "p":
          return "golden-border-modal-blue";
          break;
        case "t":
          return "golden-border-modal-green";
          break;
        case "q":
          return "golden-border-modal-red";
          break;
        case "w":
          return "golden-border-modal-red";
          break;
        case "e":
          return "golden-border-modal-red";
          break;
        case "f":
          return "golden-border-modal-blue";
          break;
        case "g":
          return "golden-border-modal-blue";
          break;
        case "h":
          return "golden-border-modal-blue";
          break;
        case "i":
          return "golden-border-modal-green";
          break;
        case "j":
          return "golden-border-modal-green";
          break;
        case "k":
          return "golden-border-modal-green";
          break;
        default:
          break;
      }
    },
    ModalPlayerClass(value) {
      switch (value) {
        case "b":
          return "banker-win";
          break;
        case "p":
          return "player-win";
          break;
        case "t":
          return "tie-win";
          break;
        case "q":
          return "banker-win";
          break;
        case "w":
          return "banker-win";
          break;
        case "e":
          return "banker-win";
          break;
        case "f":
          return "player-win";
          break;
        case "g":
          return "player-win";
          break;
        case "h":
          return "player-win";
          break;
        case "i":
          return "tie-win";
          break;
        case "j":
          return "tie-win";
          break;
        case "k":
          return "tie-win";
          break;
        case "z":
          return "banker-win";
          break;
        case "r":
          return "banker-win";
          break;
        case "s":
          return "banker-win";
          break;
        case "u":
          return "banker-win";
        default:
          break;
      }
    },
    ModelContentValue(value) {
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
  left: 0;
  top: 40px;
  border: 4px solid #ac987d;
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
