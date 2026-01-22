import CreateAccount from '@/pages/CreateAccount.vue'
import HomePage from '@/pages/HomePage.vue'
import SignIn from '@/pages/SignIn.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomePage},
    {path: '/createaccount', component: CreateAccount},
    {path: '/login', component: SignIn}
  ],
})

export default router
