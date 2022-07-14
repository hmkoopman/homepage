import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueTypedJs from 'vue-typed-js';

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.use(VueTypedJs);

app.mount("#app");
