import Vue from 'vue';
import Vuex from 'vuex';

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
  actions: {},
});
