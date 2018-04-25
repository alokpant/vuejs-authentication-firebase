import Vue from 'vue';
import VueRouter from 'vue-router';

const routeOptions = [
  {
    path: '/',
    name: 'Landing',
    component: 'Landing'
  },
  {
    path: '/home',
    name: 'Home',
    component: 'Home'
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: 'Signin'
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: 'Signup'
  }
];

const routes = routeOptions.map( route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes
})
