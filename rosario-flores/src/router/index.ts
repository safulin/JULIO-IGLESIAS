import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue'; 
import Detalles from '../views/Detalles.vue';
import Formulario from '../views/formulario.vue';
import Home from '../views/HomePage.vue'; 
import CrearCuenta from '../views/crearcuenta.vue';
import Recuperar from '../views/recuperar.vue'; 
import Recuperada from '../views/recuperada.vue'; 
import Lista from '../views/Lista.vue';
import AgradecimientoFormulario from '../views/AgradecimientoFormulario.vue'; 
import MapaRutaPie from '../views/MapaRutaPie.vue';
import MapaRutaBus from '../views/MapaRutaBus.vue'; // Importada
import MapaRutaCoche from '../views/MapaRutaCoche.vue'; // Importada

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
    path: '/lista',
    name: 'Lista',
    component: Lista
  },
  {
    path: '/mapa-ruta-pie', 
    name: 'MapaRutaPie',
    component: MapaRutaPie
  },
  {
    path: '/mapa-ruta-bus', 
    name: 'MapaRutaBus',
    component: MapaRutaBus
  },
  {
    path: '/mapa-ruta-coche', 
    name: 'MapaRutaCoche',
    component: MapaRutaCoche
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/agradecimiento', 
    name: 'Agradecimiento',
    component: AgradecimientoFormulario
  },
  {
    path: '/recuperar',
    name: 'Recuperar',
    component: Recuperar
  },
  {
    path: '/recuperada',
    name: 'Recuperada',
    component: Recuperada
  },
  {
    path: '/crearcuenta',
    name: 'CrearCuenta',
    component: CrearCuenta
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router