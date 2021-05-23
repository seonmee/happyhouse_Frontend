import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Apt from '@/views/Apt.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

import HomePrice from '@/views/HomePrice.vue';
import DealList from '@/components/houseDeal/DealList.vue';
import DealDetail from '@/components/houseDeal/DealDetail.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/main/',
  },
  {
    path: '/main/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/main/apt',
    name: 'Apt',
    component: Apt,
  },
  {
    path: '/main/about',
    name: 'About',
    component: About,
  },
  {
    path: '/main/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/main/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/main/price',
    name: 'HomePrice',
    component: HomePrice,
    children: [
      {
        path: '',
        component: DealList,
      },
      {
        path: 'detail',
        component: DealDetail,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
