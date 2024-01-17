import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SearchPage from '../views/SearchPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
    {
        path: '/', 
        name: "Home",
        component: HomePage 
    },
    {
        path: '/search/:name', 
        name: "Search",
        component: SearchPage 
    },
    {
        path: '/:pathMatch(.*)*', 
        name: "NotFound",
        component: NotFoundPage 
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router