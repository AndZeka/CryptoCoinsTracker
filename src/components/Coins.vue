<template>
  <div>
    <table class="table table-bordered">
      <tr class="is-selected">
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
      <tr v-for="coin in coins" :key="coin.COIN">
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
      sortDescAsc: false
    };
  },
  props: ["coins"],
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
      coinsSortedByVolumeASC : "coinsSortedByVolumeASC"
    }),

    sortSupply() {
      const bool = this.sortDescAsc;
      const desc = {
        coinsSortedBySupplyDESC: this.coinsSortedBySupplyDESC,
        bool: !bool,
      };
      console.log(bool);
      const asc ={
        coinsSortedBySupplyASC: this.coinsSortedBySupplyASC,
        bool : !bool
      };
      return this.sortDescAsc ? asc : desc;
    },
    sortPrice(){
      const desc = {
        coinsSortedByPriceDESC: this.coinsSortedByPriceDESC,
      };
      return desc;
    },
    sortMarketCap(){
      const desc = {
        coinsSortedByMarketCapDESC: this.coinsSortedByMarketCapDESC,
      };
      return desc;
    },
    sortCoinNames(){
      const desc = {
        coinsSortedByCoinNameDESC: this.coinsSortedByCoinNameDESC,
      };
      return desc;
    },
    sortOpenPrice(){
      const desc = {
        coinsSortedByOpenPriceDESC: this.coinsSortedByOpenPriceDESC,
      };
      return desc;
    },
    sortVolume(){
      const desc = {
        coinsSortedByVolumeDESC: this.coinsSortedByVolumeDESC,
      };
      return desc;
    }
  }
};
</script>

<style scoped></style>
