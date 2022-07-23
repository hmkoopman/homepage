<template>
  <h2>Contact</h2>
  <p>
    <a :href="linkedIn"><BIconLinkedin /></a>
    <a :href="`mailto:${emailaddress}`"><BIconEnvelope /></a>
  </p>
</template>

<script setup>
const linkedIn = "https://nl.linkedin.com/in/hmkoopman";
const emailaddress = "nee-nee@spam.com";
</script>
