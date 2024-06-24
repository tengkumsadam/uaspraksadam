import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Tugas1 from '../views/Tugas1.vue';
import Tugas2 from '../views/Tugas2.vue';
import Tugas3 from '../views/Tugas3.vue';
import Tugas4 from '../views/Tugas4.vue';
import Tugas5 from '../views/Tugas5.vue';
import Tugas6 from '../views/Tugas6.vue';
import Tugas7 from '../views/Tugas7.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tugas1', component: Tugas1 },
  { path: '/tugas2', component: Tugas2 },
  { path: '/tugas3', component: Tugas3 },
  { path: '/tugas4', component: Tugas4 },
  { path: '/tugas5', component: Tugas5 },
  { path: '/tugas6', component: Tugas6 },
  { path: '/tugas7', component: Tugas7 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
