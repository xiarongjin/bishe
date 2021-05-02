import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: "",
  },
  mutations: {
    getData(state, data) {
      state.data = data;
    },
  },
  actions: {
    getHotMovieList() {
      let url = "/api/admin/goods/search";
      return axios(url);
    },
  },
});

export default store;
