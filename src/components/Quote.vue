<template>
  <div class="quote">
    <p class="quote-text">
      {{ quote }}
    </p>
    <p class="quote-author">
      <i>- {{ author }}</i>
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
