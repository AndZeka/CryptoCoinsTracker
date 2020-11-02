<template>
  <div class="home">
    <Coins :coins="coins" v-if="coins !== null" />
  </div>
</template>

<script>
import Coins from "@/components/Coins.vue"; 
import { mapGetters, mapState } from "vuex";

export default {
    name: "Home1",
    components: {
        Coins
    },
    created() {
      if(localStorage.getItem("default") !== null) {
          this.$store.dispatch("setDefaultLocation", localStorage.getItem("default"));
          this.$store.dispatch("setDataWithDefaultLocation");
      }
    },
    computed: {
      ...mapState(['coins']),
      ...mapGetters(["getAPIURL", "coinsSortedBySupplyDESC"]),
      testComputed() {
          return "";
      }
  }
}
</script>