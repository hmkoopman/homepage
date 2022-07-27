<template>
  <Quote
    author="Herman Finkers"
    quote="Ondoenlijk is ook doenlijk, want onweer is ook weer."
  />

  <pre>{{ weather }}</pre>
  <img :src="`/assets/images/weather/${weatherIcon}.png`" />
  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{ error.message }}
    </li>
  </ul>
</template>

<script>
import weatherApi from "@/api/weather.js";
import Quote from "@/components/Quote.vue";

export default {
  data() {
    return {
      errors: [],
      weather: [],
    };
  },
  created() {
    weatherApi
      .get()
      .then((response) => {
        this.weather = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  components: { Quote },
  computed: {
    weatherIcon() {
      return "c01d";
    },
  },
};
</script>
