require('./bootstrap');

// Import modules...
import Vue from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue';
import Paginate from 'vuejs-paginate'
import {i18n}  from './i18n'
import Notifications from 'vue-notification'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)
Vue.component('paginate', Paginate)

Vue.use(Notifications)
Vue.use(Notifications)
Vue.use(InertiaPlugin);


const app = document.getElementById('app');

new Vue({
    i18n,
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);

