import { reactive } from 'vue'

export const store = reactive({
  leftDrawerOpen: false,
  isOne : true,
  menuSelect: 0,
  setting:   { 
    currency: 'usd',
    usd: {
      limit: 0,
      limit_red: 0,
  
      leisure_limit: 0,
      leisure_limit_red: 0,
      
      limited: 0,
      limited_red: 0,
      
      pair_limit: 0,
      pair_limit_red: 0,
      
      Lucky_limit: 0,
      Lucky_limit_red: 0,
    },
    thb: {
      limit: 0,
      limit_red: 0,
  
      leisure_limit: 0,
      leisure_limit_red: 0,
      
      limited: 0,
      limited_red: 0,
      
      pair_limit: 0,
      pair_limit_red: 0,
      
      Lucky_limit: 0,
      Lucky_limit_red: 0,
    }
  }
})
