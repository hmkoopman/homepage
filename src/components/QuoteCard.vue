<template>
  <div class="quote-card">
    <p class="quote-text">
      <BIconQuote />{{ quote }}<BIconQuote class="quote-end" />
    </p>
    <p class="quote-author">
      <i>{{ author }}</i>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: false,
      default: "Onbekend",
    },
    quote: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.quote-card {
  border: 3px solid var(--main-border-color);
  border-radius: 1rem;
  max-width: 250px;
}

.quote-end {
  transform: rotateY(180deg);
}
</style>
