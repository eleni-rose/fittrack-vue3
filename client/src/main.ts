import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./../node_modules/bulma/css/bulma.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleUser)

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
app.component('font-awesome-icon', FontAwesomeIcon)