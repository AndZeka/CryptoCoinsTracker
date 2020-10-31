<template>
  <div>
    <table class="table table-bordered">
      <tr>
        <th>COIN</th>
        <th>CURRENCY</th>
        <th>MKTCAP</th>
        <th>OPEN24HOUR</th>
        <th>PRICE</th>
        <th>SUPPLY</th>
        <th>VOLUME24HOUR</th>
      </tr>
      <tr v-for="coin in coins" :key="coin.COIN">
        <td>{{ coin.COIN }}</td>
        <td>{{ coin.CURRENCY }}</td>
        <td>{{ coin.MKTCAP }}</td>
        <td>{{ coin.OPEN24HOUR }}</td>
        <td>{{ coin.PRICE }}</td>
        <td>{{ coin.SUPPLY }}</td>
        <td>{{ coin.VOLUME24HOUR }}</td>
      </tr>
    </table>
    <!-- <button @click="sort()">Sort</button> -->
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ["coins"]
};
</script>

<style scoped>
</style>
