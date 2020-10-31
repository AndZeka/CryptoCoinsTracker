<template>
  <div>
    <p>{{ t }}</p>
    <!-- <button @click="sort()">Sort</button> -->
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ["t"]
};
</script>

<style scoped>
</style>
