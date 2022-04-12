import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import ResidentsAdmin from '../views/ResidentsAdmin.vue'
import AppointmentView from '../views/AppointmentView.vue'
import RevenueView from '../views/RevenueView.vue'
import UsersView from '../views/UsersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login-admin',
    name: 'login-admin',
    component: LoginPage
  },
  {
    path: '/residents',
    name: 'ResidentsAdmin',
    component: ResidentsAdmin
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: AppointmentView
  },
  {
    path: '/revenue',
    name: 'Revenue',
    component: RevenueView
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
