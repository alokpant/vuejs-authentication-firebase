import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { store } from './store';
import firebase from 'firebase';
import FIREBASE_AUTH from './firebase_auth';

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.auth().onAuthStateChanged( (firebaseUser) => {
      if (!!firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser);
      }
    });
  },
});

firebase.initializeApp({
  apiKey: FIREBASE_AUTH.apiKey,
  authDomain: FIREBASE_AUTH.authDomain,
  databaseURL: FIREBASE_AUTH.databaseURL,
  projectId: FIREBASE_AUTH.projectId,
});
