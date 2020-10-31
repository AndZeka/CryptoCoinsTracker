<template>
  <section class="section">
      
    <!-- <input type="text" v-model="coinName" @keyup="searchCoins"> -->
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth" >
      <thead>
        <tr class="is-selected">
          <th>#</th>
          <th>Name</th>
          <th>Market Cap</th>
          <th>Price</th>
          <th>Volume (24h)</th>
          <th>Circulating Supply</th>
          <th>Open (24h)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key, index) in coins" :key="key">
          <th>{{ index + 1 }}</th>
          <td>{{ key }}</td>
          <td>{{ value.USD.MKTCAP }}</td>
          <td>{{ value.USD.PRICE }}</td>
          <td>{{ value.USD.VOLUME24HOUR }}</td>
          <td>{{ value.USD.SUPPLY }}</td>
          <td>{{ value.USD.OPEN24HOUR }}</td>
        </tr>
      </tbody>
    </table>
    <h3>UnSorted:</h3>
    <div v-for="(value, key, index) in coins" :key="key">
        <p class="d-inline"> {{ index + 1 }} - </p>
        <p class="d-inline"> {{ key }} - </p>
        <p class="d-inline"> {{ value.USD.PRICE }} </p>
    </div>
    <button @click="sortByValue(coins)">Click Me</button>
    
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data: () => ({
    coins: [],
    orderedObj:{},
    coinsName:[],
    coinsLength:0,
  }),
  methods:{
    sortObject: function(o) {
        let idx=0;
        console.log(Object.values(o)[idx++]["USD"]);
        //Me kriju ni array te re edhe mi rujt vlerat e usd.price tani qata me sortu
        // return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    },
    sortByValue(jsObj){
      console.log(jsObj);
      var sortedArray = [];
      for(var i in jsObj){
        // Push each JSON Object entry in array by [value, key]
        sortedArray.push([jsObj[i], i]);
      }
      return sortedArray.sort();
    }
  },
  computed:{

  },
  created() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,USDT,DASH,LTC,ETC,XMR,XRP,TRX&tsyms=USD,EUR"
      )
      .then(response => {
        this.coins = response.data.DISPLAY;
        // console.log("data");
        console.log(response.data.RAW);

        this.coinsLength=Object.keys(response.data.DISPLAY).length;
        for(let i=0;i<this.coinsLength;i++){
          this.coinsName.push(Object.keys(response.data.DISPLAY)[i]);
        }
        console.log(this.coinsName);
        // console.log(Object.keys(response.data.DISPLAY)[0]);
        // console.log(this.coins); //kthen object
        // console.log(this.coins["BTC"]); //kthen object
        // console.log((this.coins["BTC"]["EUR"])); //kthen object 
        // console.log((this.coins["BTC"]["EUR"].PRICE)); //kthen String
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

