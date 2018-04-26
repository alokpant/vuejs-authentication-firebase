import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';

const routeOptions = [
  {
    path: '/',
    name: 'Landing',
    component: 'Landing',
  },
  {
    path: '/home',
    name: 'Home',
    component: 'Home',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: 'Signin',
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: 'Signup',
  },
];

const routes = routeOptions.map((route) => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`),
  };
});

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/sign-in');
  } else {
    next();
  }

});

export default router;
