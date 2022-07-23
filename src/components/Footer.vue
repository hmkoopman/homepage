<template>
  <div class="footer">
    <p class="footer">©Maurik Koopman - {{ year }}</p>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
/* .footer {
  margin: 0 auto;
} */
</style>
