import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // api_url: "https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=BTC,ETH,DOGE,USDT,DASH,LTC,ETC,XMR,XRP,TRX",
    api_url: "https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=",
    // api_url: "http://api.weatherapi.com/v1/current.json?key=2dce8c59b1994fe9b59153202201910&q=",
    data: null,
    default_coins:"",
    coins: []
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
          let coins = [];

          /**
           * Coder: Ylber Veliu
           */
          //console.log(data.RAW);
          for (const [coin, details] of Object.entries(data.RAW)) {
            //console.log(`${coin}:`);
            let o = {};
            o.COIN = coin;

            for (const [index, value] of Object.entries(details)) {
              //console.log(`${index}`);
              o.CURRENCY = index;

              for (const [i, v] of Object.entries(value)) {
                //console.log(`${i} : ${v}`);

                if (i == 'MKTCAP') o.MKTCAP = v;
                if (i == 'PRICE') o.PRICE = v;
                if (i == 'VOLUME24HOUR') o.VOLUME24HOUR = v;
                if (i == 'SUPPLY') o.SUPPLY = v;
                if (i == 'OPEN24HOUR') o.OPEN24HOUR = v;
              }
            }

            coins.push(o);
          }

          console.log(coins);

          // coins_obj.price = data.DISPLAY.BTC.USD.PRICE;
          // coins_obj = data.DISPLAY;
          
          // for(const coin in coins_obj){
          //   coins_array[coin]=coins_obj[coin].USD.PRICE;
          // }
          
          // // Descending order
          // // coins_array.sort(function(a, b){return b-a}); 


          // for(let i=0;i<Object.keys(coins_array).length;i++){
          //   console.log(Object.values(coins_array)[i]);
          // }

          // //ascending order
          // let sorted=Object.values(coins_array).sort((a,b)=>b-a);

          // console.log("Sorted");
          // console.log(sorted);


          context.commit("SET_COINS", coins);
        })
        .catch(e => console.log("Error: " + e));
    },
  },
  getters: {
    getAPIURL(state) {
      return state.api_url;
    },
    coinsSortedBySupplyDESC(state) {
      return state.coins.sort((c1, c2) => (c1.SUPPLY < c2.SUPPLY) ? 1 : -1);
    }
  }
});
