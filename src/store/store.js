import { reactive, shallowReactive } from "vue";

export const store = reactive({
  leftDrawerOpen: false,
  isOne: true,
  menuSelect: 0,
  setting: {
    table_no: "1号桌",
    bet_counter: 10,
    verification_code: 123,
    currency: "usd",
    shoe_no: 1,
    usd: {
      min_bp: 1,
      max_bp: 1000,
      min_tie: 1,
      max_tie: 400,
      min_pair: 1,
      max_pair: 400,
      min_lucky6: 1,
      max_lucky6: 400,
    },
    thb: {
      min_bp: 34.8,
      max_bp: 34799.0,
      min_tie: 34.8,
      max_tie: 13919.6,
      min_pair: 34.8,
      max_pair: 13919.6,
      min_lucky6: 34.8,
      max_lucky6: 13919.6,
    },
  },
  isFirst: true,
});
