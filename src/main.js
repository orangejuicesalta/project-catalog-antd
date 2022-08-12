import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const pinia = createPinia();

createApp(App).use(Antd).use(pinia).use(router).mount("#app");
