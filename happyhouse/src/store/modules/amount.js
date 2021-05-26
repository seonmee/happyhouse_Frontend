import http from '@/http-common';
// initial state
const state = () => ({
  items: [],
  dong: '',
  year: '',
});

// getters
const getters = {
  getItemList(state) {
    return state.items;
  },
  getdong(state) {
    return state.dong;
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
        commit('SET_APT_LIST', data);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
  setDong({ commit }, dong) {
    commit('SET_DONG', dong);
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
    state.dong = dong;
  },
  SET_YEAR(state, year) {
    state.year = year;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
