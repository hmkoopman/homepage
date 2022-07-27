<template>
  <QuoteCard
    author="Herman Finkers"
    quote="Ondoenlijk is ook doenlijk, want onweer is ook weer."
  />

  <h2>Het weer in Muntendam</h2>
  <p>
    <img
      :src="`/src/assets/images/weather/${weatherIcon}.png`"
      class="weather-icon"
    />{{ weatherDescription }}
  </p>
  <p class="icons"><BIconSunrise /> | <BIconSunset /></p>
  <p>Zon op: {{ sunrise }} | Zon onder: {{ sunset }}</p>

  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{ error.message }}
    </li>
  </ul>
</template>

<script>
import weatherApi from "@/api/weather.js";
import QuoteCard from "@/components/QuoteCard.vue";

export default {
  data() {
    return {
      errors: [],
      weather: null,
    };
  },
  created() {
    weatherApi
      .get()
      .then((response) => {
        this.weather = response.data[0];
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  components: { QuoteCard },
  computed: {
    sunrise() {
      return this.weather.sunrise;
    },
    sunset() {
      return this.weather.sunrise;
    },
    temperature() {
      return this.weather.temp;
    },
    weatherDescription() {
      return this.weather.weather.description;
    },
    weatherIcon() {
      return this.weather.weather.icon;
    },
  },
};
</script>

<style scoped>
.weather-icon {
  width: 50px;
}

.icons {
  font-size: 200%;
}
</style>
