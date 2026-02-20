import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue'; 
import Detalles from '../views/Detalles.vue';
import Formulario from '../views/formulario.vue';
import Home from '../views/HomePage.vue'; 


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/detalles',
    name: 'Detalles',
    component: Detalles
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: Formulario
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router