import http from '@/http-common';
// initial state
const state = () => ({
  items: [],
  datas: [],
  year: '',
});

// getters
const getters = {
  getItemList(state) {
    return state.items;
  },
  getDatas(state) {
    return state.datas;
  },
  getYear(state) {
    return state.year;
  },
};

// actions
const actions = {
  resetFacilityState({ commit }) {
    commit('resetFState');
  },
  resetFacilityStateAll({ commit }) {
    commit('resetFStateAll');
  },

  getAptList({ commit }, dong) {
    http
      .get('/getaptList/' + dong)
      .then(({ data }) => {
        console.log(data);
        commit('SET_APT_LIST', data);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
  setDataSet({ commit }, datas) {
    console.log(datas);
    commit('SET_DATA_SET', datas);
  },
  setYear({ commit }, year) {
    commit('SET_YEAR', year);
  },
};

// mutations
const mutations = {
  resetFState(state) {
    state.items = [];
  },
  resetFStateAll(state) {
    state.items = [];
    state.dong = '';
  },
  SET_APT_LIST(state, items) {
    state.items = items;
  },
  SET_DONG(state, dong) {
    console.log('set');
    state.dong = dong;
  },
  SET_YEAR(state, year) {
    state.year = year;
  },
  SET_DATA_SET(state, datas) {
    state.datas = datas;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
