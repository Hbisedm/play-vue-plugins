import { createApp } from "vue";
import App from "./app.vue";
import { plugin } from "@hbisedm/hello";
const app = createApp(App);

console.log(plugin);
app.use(plugin);
app.mount("#app");
