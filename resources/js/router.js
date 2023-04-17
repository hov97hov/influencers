import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/join',
        name: 'join',
        component: () => import('./views/JoinForm.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('./views/SearchPage.vue'),
    },
]

const router = new Router({
    routes: routes
})

export default router
