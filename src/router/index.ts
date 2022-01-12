import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Inicio from '../views/Inicio.vue';
import Login from '@/views/Login.vue';
import Dash from '@/views/dash/Layout.vue';

import AreaLink from '@/views/Links/AreaLink.vue';
import Dasboard from '@/views/Dasboard/Dasboard.vue';
import Table from '@/views/Table.vue';
import Teste from '@/views/Teste.vue';


const routes: Array<RouteRecordRaw> = [
  {path: '/login', component: Login},
  {
    
    path:'',
    component: Inicio,
    children: [
      {path:'', component: AreaLink},

    ],
  },
  {
    path:'/sistemas', 
    component: Dash,
    children: [
       {path: '', redirect: '/dasboard'},
       {path: '/dasboard', component: Dasboard },
       {path: '/table', component: Table },
       {path: '/teste', component: Teste },
       
    ]
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
