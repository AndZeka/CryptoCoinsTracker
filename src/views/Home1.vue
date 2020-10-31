<template>
  <div class="home">
    <Test :w="$store.state.data.DISPLAY" v-if="$store.state.data !== null" />
    <!-- {{ getAPIURL }} -->
  </div>
</template>

<script>
import Test from "@/components/Test.vue"; 
import { mapGetters } from "vuex";

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
        ...mapGetters(["getAPIURL"]),
        testComputed() {
        return "";
    }
  }
}
</script>