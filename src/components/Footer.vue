<template>
  <footer>
    <div>©Maurik Koopman - {{ year }}</div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
div {
  margin: 0 auto;
}
</style>
