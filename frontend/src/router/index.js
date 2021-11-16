import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginAndRegister from '../views/LoginAndRegister.vue'
import Chat from '../views/Chat.vue'
import Forgotpassword from '../views/forgotpassword.vue'
import Recruit from '../views/Recruit.vue'
import Taskers from '../views/taskers.vue'

const routes = [{
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/loginandregister',
        name: 'LoginAndRegister',
        component: LoginAndRegister
    },
    {
        path: '/Chat',
        name: 'Chat',
        component: Chat
    },
    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        component: Forgotpassword
    },
    {
        path: '/recruit',
        name: 'recruit',
        component: Recruit
    },
    {
        path: '/taskers',
        name: 'taskers',
        component: Taskers
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router