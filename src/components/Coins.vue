<template>
  <div>
    <form class="form-inline justify-content-between mb-3">
      <input class="form-control" placeholder="Search coins...." v-model="search">
      <input class="form-control" placeholder="Add coins...." @keyup.enter="addCoin">
    </form>
    <table class="table table-bordered">
      <tr class="is-selected">
        <th>
          # <a @click="sortIndexes()"><i class="fas fa-sort"></i></a>
        </th>
        <th>
          COIN <a @click="sortCoinNames()"><i class="fas fa-sort"></i></a>
        </th>
        <th>
          MKTCAP <a @click="sortMarketCap()"><i class="fas fa-sort"></i></a>
        </th>
        <th>
          OPEN24HOUR <a @click="sortOpenPrice()"><i class="fas fa-sort"></i></a>
        </th>
        <th>
          PRICE <a @click="sortPrice()"><i class="fas fa-sort"></i></a>
        </th>
        <th>
          SUPPLY <a @click="sortSupply()"><i class="fas fa-sort"></i></a>
        </th>
        <th>
          VOLUME24HOUR <a @click="sortVolume()"><i class="fas fa-sort"></i></a>
        </th>
      </tr>
      <tr v-for="coin in filteredList" :key="coin.COIN">
        <td>{{ coin.IDX+1 }}</td>
        <td>{{ coin.COIN }}</td>
        <td>$ {{ coin.MKTCAP }}</td>
        <td>$ {{ coin.OPEN24HOUR }}</td>
        <td>$ {{ coin.PRICE }}</td>
        <td>{{ coin.SUPPLY }}</td>
        <td>{{ coin.VOLUME24HOUR }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Test",
  data(){
    return{
      search: "",
      sortDESCASC: false
    };
  },
  props: ["coins"],
  methods: {
    addCoin(e){
      this.$store.dispatch("setDataWithSearchedQuery", e.target.value);
      e.target.value = "";
    },
    sortIndexes() {
      if(this.sortDESCASC) {
        const desc = {
          coinsSortedByIndexesDESC: this.coinsSortedByIndexesDESC,
        }; 
        this.sortDESCASC= !this.sortDESCASC;
        return desc;
      }else{
        const asc = {
          coinsSortedByIndexesASC: this.coinsSortedByIndexesASC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return asc;
      }      
    },
    sortSupply() {
      if(this.sortDESCASC) {
        const desc = {
          coinsSortedBySupplyDESC: this.coinsSortedBySupplyDESC,
        }; 
        this.sortDESCASC= !this.sortDESCASC;
        return desc;
      }else{
        const asc = {
          coinsSortedBySupplyASC: this.coinsSortedBySupplyASC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return asc;
      }      
    },
    sortPrice(){
      if(this.sortDESCASC) {
        const desc = {
          coinsSortedByPriceDESC: this.coinsSortedByPriceDESC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return desc;
      }else{
        const asc = {
          coinsSortedByPriceASC: this.coinsSortedByPriceASC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return asc;
      }
    },
    sortMarketCap(){
      if(this.sortDESCASC) {
        const desc = {
          coinsSortedByMarketCapDESC: this.coinsSortedByMarketCapDESC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return desc;
      }else{
        const asc = {
          coinsSortedByMarketCapASC: this.coinsSortedByMarketCapASC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return asc;
      }
    },
    sortCoinNames(){
      if(this.sortDESCASC) {
        const desc = {
          coinsSortedByCoinNameDESC: this.coinsSortedByCoinNameDESC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return desc;
      }else{
        const asc = {
          coinsSortedByCoinNameASC: this.coinsSortedByCoinNameASC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return asc;
      }
    },
    sortOpenPrice(){
      if(this.sortDESCASC) {
        const desc = {
          coinsSortedByOpenPriceDESC: this.coinsSortedByOpenPriceDESC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return desc;
      }else{
        const asc = {
          coinsSortedByOpenPriceASC: this.coinsSortedByOpenPriceASC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return asc;
      }
    },
    sortVolume(){
      if(this.sortDESCASC) {
        const desc = {
          coinsSortedByVolumeDESC: this.coinsSortedByVolumeDESC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return desc;
      }else{
        const asc = {
          coinsSortedByVolumeASC: this.coinsSortedByVolumeASC,
        };
        this.sortDESCASC= !this.sortDESCASC;
        return asc;
      }
    },
  },
  computed: {
    ...mapGetters({
      coinsSortedBySupplyDESC:"coinsSortedBySupplyDESC",
      coinsSortedBySupplyASC: "coinsSortedBySupplyASC",
      coinsSortedByPriceDESC:"coinsSortedByPriceDESC",
      coinsSortedByPriceASC: "coinsSortedByPriceASC",
      coinsSortedByMarketCapDESC : "coinsSortedByMarketCapDESC",
      coinsSortedByMarketCapASC: "coinsSortedByMarketCapASC",
      coinsSortedByCoinNameDESC : "coinsSortedByCoinNameDESC",
      coinsSortedByCoinNameASC : "coinsSortedByCoinNameASC",
      coinsSortedByOpenPriceDESC : "coinsSortedByOpenPriceDESC",
      coinsSortedByOpenPriceASC : "coinsSortedByOpenPriceDESC",
      coinsSortedByVolumeDESC : "coinsSortedByVolumeDESC",
      coinsSortedByVolumeASC : "coinsSortedByVolumeASC",
      coinsSortedBySupplyTEST : "coinsSortedBySupplyTEST",
      coinsSortedByIndexesDESC : "coinsSortedByIndexesDESC",
      coinsSortedByIndexesASC : "coinsSortedByIndexesASC"
    }),
    filteredList() {
      return this.coins.filter(coin => {
        return coin.COIN.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
};
</script>

<style scoped></style>
