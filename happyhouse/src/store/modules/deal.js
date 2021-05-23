import http from '@/http-common';
// initial state
// shape: [{ id, quantity }]
const state = () => ({
  apts: [],
  apt: Object,
});

// getters
const getters = {
  getAptList(state) {
    return state.apts;
  },
  getApt(state) {
    return state.apt;
  },
  getAptPosition(state) {
    return [state.apt.lat, state.apt.lng];
  },
};

// actions
const actions = {
  selectApt({ commit }, apt) {
    commit('SELECT_APT', apt);
  },
  getAptDealList({ commit }, paramList) {
    http
      .get('/apart/search/' + paramList[0] + '/' + paramList[1])
      .then(({ data }) => {
        commit('GET_APT_DEAL_LIST', data);
        console.log(this.apts);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
};

// mutations
const mutations = {
  SELECT_APT(state, apt) {
    console.log(apt);
    state.apt = apt;
  },
  GET_APT_DEAL_LIST(state, apts) {
    state.apts = apts;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
