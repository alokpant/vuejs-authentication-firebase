import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    appTitle: 'Authentication with Firebase',
    users: null,
    error: null,
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
  getters: {
    isAuthenticated(state) {
      return state.user !== null &&
        state.user !== undefined;
    },
  },
  actions: {
    userSignUp({ commit }, payload) {
      commit('setLoading', true);
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((firebaseUser) => {
        commit('setState', {
          email: firebaseUser.email,
        });
        commit('setError', null);
        commit('setLoading', false);
        router.push('/home');
      })
      .catch((error) => {
        commit('setError', error.message);
        commit('setLoading', false);
      });
    },
    userSignIn({ commit }, payload) {
      commit('setLoading', true);
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((firebaseUser) => {
        commit('setState', {
          email: firebaseUser.email,
        });
        commit('setError', null);
        commit('setLoading', false);
        router.push('/home');
      })
      .catch((error) => {
        commit('setError', error.message);
        commit('setLoading', false);
      });
    },
    autoSignIn({ commit }, payload) {
      commit('setState', {
        email: payload.email,
      });
    },
    userSignOut({ commit }) {
      firebase.auth().signOut();
      commit('setState', null);
      router.push('/');
    },
  },
});
