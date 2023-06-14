import { reactive, shallowReactive } from "vue";

export const store = reactive({
  leftDrawerOpen: false,
  isOne: true,
  menuSelect: 0,
  // setting:   {
  //   currency: 'usd',
  //   usd: {
  //     limit: 0,
  //     limit_red: 0,

  //     leisure_limit: 0,
  //     leisure_limit_red: 0,

  //     limited: 0,
  //     limited_red: 0,

  //     pair_limit: 0,
  //     pair_limit_red: 0,

  //     Lucky_limit: 0,
  //     Lucky_limit_red: 0,
  //   },
  //   thb: {
  //     limit: 0,
  //     limit_red: 0,

  //     leisure_limit: 0,
  //     leisure_limit_red: 0,

  //     limited: 0,
  //     limited_red: 0,

  //     pair_limit: 0,
  //     pair_limit_red: 0,

  //     Lucky_limit: 0,
  //     Lucky_limit_red: 0,
  //   }
  // ],
  setting: {
    table_no: 0,
    bet_counter: 0,
    currency: "usd",
    usd: {
      min_bp: 0,
      max_bp: 0,
      min_tie: 0,
      max_tie: 0,
      min_pair: 0,
      max_pair: 0,
      min_lucky6: 0,
      max_lucky6: 0,
    },
    thb: {
      min_bp: 0,
      max_bp: 0,
      min_tie: 0,
      max_tie: 0,
      min_pair: 0,
      max_pair: 0,
      min_lucky6: 0,
      max_lucky6: 0,
    },
  },
});
