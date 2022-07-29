<template>
  <div class="chess">
    <h2><BIconChess />Chess.com dagelijkse puzzel</h2>
    <p>
      Bekijk deze dagelijkse schaakpuzzel op
      <a :href="dailyPuzzle.url">chess.com</a>.
    </p>
    <p>"{{ dailyPuzzle.title }}""</p>
    <img :src="dailyPuzzle.image" />
    <p v-if="showSolution">{{ solution }}</p>
    <p>
      <button @click="showSolution = !showSolution">
        {{ showSolution ? "Verberg" : "Toon" }} oplossing
      </button>
    </p>
    <div><vuepgn v-bind="{ pgn, height }" /></div>
    {{ dailyPuzzle }}
  </div>
</template>

<script>
import chessApi from "@/api/chess.js";
import { vuepgn } from "vue-pgn";
// import vuepgn from "vue-pgn";
import "vue-pgn/dist/vue-pgn.css";

export default {
  components: { vuepgn },
  data() {
    return {
      dailyPuzzle: {},
      errors: [],
      showSolution: false,
    };
  },
  created() {
    chessApi
      .getDailyPuzzle()
      .then((response) => {
        this.dailyPuzzle = response;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  computed: {
    solution() {
      return this.dailyPuzzle?.pgn;
    },
    pgn() {
      return "1. g4 e5 2. f4 Qh4";
    },
    height() {
      return 300;
    },
  },
};
</script>

<style scoped>
a {
  color: var(--a-text-color);
}
a:hover {
  color: var(--main-text-color);
}
</style>
