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
  },
  mutations: {
    SET_DEFAULT_COINS(state, default_coins) {
      state.default_coins = default_coins;
    },
    SET_DATA(state, data) {
      state.data = data;
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
          let coins_obj = {};
          let coins_array=[];

          // coins_obj.price = data.DISPLAY.BTC.USD.PRICE;
          coins_obj = data.DISPLAY;
          
          for(const coin in coins_obj){
            coins_array[coin]=coins_obj[coin].USD.PRICE;
          }
          
          // Descending order
          // coins_array.sort(function(a, b){return b-a}); 


          for(let i=0;i<Object.keys(coins_array).length;i++){
            console.log(Object.values(coins_array)[i]);
          }

          //ascending order
          let sorted=Object.values(coins_array).sort((a,b)=>b-a);

          console.log(sorted);


          context.commit("SET_DATA", coins_array);
        })
        .catch(e => console.log("Error: " + e));
    },
  },
  getters: {
    getAPIURL(state) {
      return state.api_url;
    }
  }
});
