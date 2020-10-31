<template>
  <div class="container" id="app">
    <section class="section">
      <nav class="level">
        <div class="level-left">
          <router-link to="/" class="level-item button is-black is-outlined is-large">Home</router-link>
          <router-link to="/news" class="level-item button is-black is-outlined is-large">News</router-link>
          <router-link to="/home1" class="level-item button is-black is-outlined is-large">Home1</router-link>
        </div>
      </nav>
    </section>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    localStorage.setItem("default", "BTC,ETH,LTC,ETC,XRP,XMR,XTZ,TRX,BCH,BNB");
  }
}
</script>

<style>
  section.section{
    width: 70%;
  }
  section.section{
    margin: auto; 
  }
</style>
