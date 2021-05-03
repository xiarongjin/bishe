import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: "",
    count: 0,
  },
  mutations: {
    getData(state, data) {
      state.data = data;
    },
    getCunt(state, isZero = 0) {
      if (isZero == 0) {
        state.count++;
      } else {
        state.count = 0;
      }
    },
  },
  actions: {},
});

export default store;
