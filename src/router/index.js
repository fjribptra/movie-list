import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SearchPage from '../views/SearchPage.vue'
import DetailPage from '../views/DetailPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import PopularPage from '../views/PopularPage.vue'

const routes = [
    {
        path: '/', 
        name: "Home",
        component: HomePage 
    },
    {
        path: '/popular', 
        name: "Popular",
        component: PopularPage 
    },
    {
        path: '/search/:name', 
        name: "Search",
        component: SearchPage 
    },
    {
        path: '/details/:id', 
        name: "Detail",
        component: DetailPage 
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