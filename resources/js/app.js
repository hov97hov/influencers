import Vue from "vue";
import App from './App.vue'
import router from "./router";
import Vuex from 'vuex'
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

Vue.use(Vuex)

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
