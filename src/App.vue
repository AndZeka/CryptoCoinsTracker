<template>
  <div class="container" id="app">
    <section class="section">
      <nav class="level">
        <div class="level-left">
          <router-link to="/" class="level-item button is-black is-outlined is-large">Home</router-link>
          <router-link to="/news" class="level-item button is-black is-outlined is-large">News</router-link>
        </div>
      </nav>
    </section>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    localStorage.setItem("default", "BTC,ETH,LTC,ETC,XRP,XMR,XTZ,TRX,BCH,BNB,LINK");
  }
}
</script>

<style>
  section.section{
    width: 70%;
  }
  section.section{
    margin : 0 !important;
    padding-left: 0 !important;
  }
</style>
