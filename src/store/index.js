import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    appTitle: 'Authentication with Firebase',
    users: null,
    errors: null,
    loading: false,
  },
  mutations: {
    setState(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  getters: {},
  actions: {
    userSignUp({store}, payload) {
      commit('setLoading', true);
      firebase.auth().createWithEmailAndPassword(payload.email, payload.password)
      .then( (firebaseUser) => {
        commit('setUser', {
          email: firebaseUser.email
        });
        commit('setError', null);
        commit('setLoading', false);
        router.push('/home');
      })
      .catch( (error) => {
        commit('setError', error.message)
        commit('setLoading', false);
      });
    },
  },
});
