import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
// import http from '@/http-common';

import deal from './modules/deal.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // apts: [],
    // apt: Object,
    profile: [],
  },
  getters: {
    getProfile(state) {
      return state.profile;
    },
  },
  mutations: {
    GET_APT_LIST(state, apts) {
      // console.log(state, apts);
      state.apts = apts;
    },
    SELECT_APT(state, apt) {
      state.apt = apt;
    },
    LOGIN(state, profile) {
      state.profile = profile;
    },
    LOGOUT(state) {
      state.profile = '';
    },
    // GET_APT_DEAL_LIST(state, apts) {
    //   state.apts = apts;
    // },
  },
  actions: {
    getAptList({ commit }, dongCode) {
      // vue cli enviroment variables 검색
      //.env.local file 생성.
      // 반드시 VUE_APP으로 시작해야 한다.
      const SERVICE_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
      // const SERVICE_KEY =
      //   '9Xo0vlglWcOBGUDxH8PPbuKnlBwbWU6aO7%2Bk3FV4baF9GXok1yxIEF%2BIwr2%2B%2F%2F4oVLT8bekKU%2Bk9ztkJO0wsBw%3D%3D';

      const SERVICE_URL =
        'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';

      const params = {
        LAWD_CD: dongCode,
        DEAL_YMD: '202010',
        serviceKey: decodeURIComponent(SERVICE_KEY),
      };

      // npm install --save axios
      axios
        .get(SERVICE_URL, {
          params,
        })
        .then((response) => {
          // console.log(response.data.response.body.items.item);
          commit('GET_APT_LIST', response.data.response.body.items.item);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    selectApt({ commit }, apt) {
      commit('SELECT_APT', apt);
    },

    getLogin({ commit }, profile) {
      commit('LOGIN', profile);
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
    // getAptDealList({ commit }, paramList) {
    //   console.log(paramList[0]);
    //   console.log(paramList[1]);
    //   http
    //     .get('/apart/search/' + paramList[0] + '/' + paramList[1])
    //     .then(({ data }) => {
    //       commit('GET_APT_DEAL_LIST', data);
    //       console.log(this.apts);
    //     })
    //     .catch(() => {
    //       alert('에러가 발생했습니다.');
    //     });
    // },
  },
  modules: {
    deal,
  },
  plugins: [createPersistedState()],
});
