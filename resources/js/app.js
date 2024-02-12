require('./bootstrap');

// Import modules...
import Vue from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue';
import vSelect from "vue-select";
import Paginate from 'vuejs-paginate'
import VueI18n from 'vue-i18n'
import Notifications from 'vue-notification'

Vue.component('paginate', Paginate)
Vue.component("v-select", vSelect);

Vue.use(Notifications)
Vue.use(Notifications)
Vue.use(VueI18n)
Vue.use(InertiaPlugin);

const app = document.getElementById('app');

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);

