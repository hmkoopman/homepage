import { createApp } from "vue";
import App from "@/App.vue";

import Typewriter from "@/modules/Typewriter.vue";

import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import "./assets/main.css";

const app = createApp(App);

app.component('Typewriter', Typewriter);

app.use(BootstrapIconsPlugin);

app.mount("#app");
