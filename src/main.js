import { createApp } from "vue";
import App from "./App.vue";
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import "./assets/main.css";

const app = createApp(App);

app.use(BootstrapIconsPlugin);

app.mount("#app");
