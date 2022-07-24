<template>
  <div class="contact">
    <h2>Contact</h2>
    <p>
      <a :href="linkedIn"><BIconLinkedin /></a>
      <a :href="`mailto:${emailaddress}`"><BIconEnvelope /></a>
    </p>
  </div>
</template>

<script setup>
// TODO: refactor to main links
const linkedIn = "https://nl.linkedin.com/in/hmkoopman";
const emailaddress = "nee-nee@spam.com";
</script>

<style lang="scss" scoped>
.contact {
  a {
    font-size: 200%;
    padding: 1rem;
  }
}
</style>
