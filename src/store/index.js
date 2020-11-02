import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_url: "https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=",
    data: null,
    default_coins:"",
    coins: [],
    idx: 0
  },
  mutations: {
    SET_DEFAULT_COINS(state, default_coins) {
      state.default_coins = default_coins;
    },
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_COINS(state, coins) {
      state.coins = coins;
    }
  },
  actions: {
    setDefaultLocation(context, default_coins) {
      context.commit("SET_DEFAULT_COINS", default_coins);
    },
    setDataWithDefaultLocation(context) {
      fetch(`${this.state.api_url}${this.state.default_coins}`)
        .then(res => res.json())
        .then(data =>  {
          let coinsInner = [];

          for (const [coin, details] of Object.entries(data.RAW)) {
            let o = {};
            o.COIN = coin;                            
            o.IDX = this.state.idx++;
            for (const [index, value] of Object.entries(details)) {
              
              o.CURRENCY = index;
              for (const [i, v] of Object.entries(value)) {
                // console.log(`${i} : ${v}`);
                if (i == 'MKTCAP') o.MKTCAP = v;
                if (i == 'PRICE') o.PRICE = v;
                if (i == 'VOLUME24HOUR') o.VOLUME24HOUR = v;
                if (i == 'SUPPLY') o.SUPPLY = v;
                if (i == 'OPEN24HOUR') o.OPEN24HOUR = v;
              }
            }      
            coinsInner.push(o);          
          }

          console.log(coinsInner);

          context.commit("SET_COINS", coinsInner);
        })
        .catch(e => console.log("Error: " + e));
    },
    setDataWithSearchedQuery(context,query) {
      fetch(`${this.state.api_url},${query}`)
        .then(res => res.json())
        .then(data =>  {
          let coinsInner = [];

          for (const [coin, details] of Object.entries(data.RAW)) {
            let o = {};
            o.COIN = coin;
            o.IDX = this.state.idx++;
            for (const [index, value] of Object.entries(details)) {
              o.CURRENCY = index;
              for (const [i, v] of Object.entries(value)) {
                // console.log(`${i} : ${v}`);

                if (i == 'MKTCAP') o.MKTCAP = v;
                if (i == 'PRICE') o.PRICE = v;
                if (i == 'VOLUME24HOUR') o.VOLUME24HOUR = v;
                if (i == 'SUPPLY') o.SUPPLY = v;
                if (i == 'OPEN24HOUR') o.OPEN24HOUR = v;
              }
            }
            coinsInner.push(o);
          }

          console.log(coinsInner);
          // this.state.coins.push(coinsInner);
          // console.log(this.state.coins);

          context.commit("SET_COINS", coinsInner);
        })
        .catch(e => console.log("Error: " + e));
    },
  },
  getters: {
    getAPIURL(state) {
      return state.api_url;
    },
    coinsSortedByIndexesDESC(state) {
      return state.coins.sort((c1, c2) => (c1.IDX < c2.IDX) ? 1 : -1);
    },
    coinsSortedByIndexesASC(state){
      return state.coins.sort((c1, c2) => (c1.IDX < c2.IDX) ? -1 : 1);
    },
    coinsSortedBySupplyDESC(state) {
      return state.coins.sort((c1, c2) => (c1.SUPPLY < c2.SUPPLY) ? 1 : -1);
    },
    coinsSortedBySupplyASC(state){
      return state.coins.sort((c1, c2) => (c1.SUPPLY < c2.SUPPLY) ? -1 : 1);
    },
    coinsSortedByPriceDESC(state) {
      return state.coins.sort((c1, c2) => (c1.PRICE < c2.PRICE) ? 1 : -1);
    },
    coinsSortedByPriceASC(state){
      return state.coins.sort((c1, c2) => (c1.PRICE < c2.PRICE) ? -1 : 1);
    },
    coinsSortedByMarketCapDESC(state) {
      return state.coins.sort((c1, c2) => (c1.MKTCAP < c2.MKTCAP) ? 1 : -1);
    },
    coinsSortedByMarketCapASC(state){
      return state.coins.sort((c1, c2) => (c1.MKTCAP < c2.MKTCAP) ? -1 : 1);
    },
    coinsSortedByCoinNameDESC(state) {
      return state.coins.sort((c1, c2) => (c1.COIN < c2.COIN) ? 1 : -1);
    },
    coinsSortedByCoinNameASC(state){
      return state.coins.sort((c1, c2) => (c1.COIN < c2.COIN) ? -1 : 1);
    },
    coinsSortedByOpenPriceDESC(state) {
      return state.coins.sort((c1, c2) => (c1.OPEN24HOUR < c2.OPEN24HOUR) ? 1 : -1);
    },
    coinsSortedByOpenPriceASC(state){
      return state.coins.sort((c1, c2) => (c1.OPEN24HOUR < c2.OPEN24HOUR) ? -1 : 1);
    },
    coinsSortedByVolumeDESC(state) {
      return state.coins.sort((c1, c2) => (c1.VOLUME24HOUR < c2.VOLUME24HOUR) ? 1 : -1);
    },
    coinsSortedByVolumeASC(state){
      return state.coins.sort((c1, c2) => (c1.VOLUME24HOUR < c2.VOLUME24HOUR) ? -1 : 1);
    }
  }
});
