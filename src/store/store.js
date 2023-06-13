import { reactive } from 'vue'

export const store = reactive({
  leftDrawerOpen: false,
  isOne : true,
  menuSelect: 0,
  orderNav: [
    {
      id: 1,
      name: 'Home',
      icon: 'home'
    },
    {
      id: 2,
      name: 'Report',
      icon: 'home'
    },
    {
      id: 3,
      name: 'Detial',
      icon: 'home'
    }
  ],
  setting:{
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
  }
})
