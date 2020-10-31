<template>
  <div class="home">
    <Test :coins="coinsSortedBySupplyDESC" v-if="coins !== null" />
  </div>
</template>

<script>
import Test from "@/components/Test.vue"; 
import { mapGetters, mapState } from "vuex";

export default {
    name: "Home1",
    components: {
        Test
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