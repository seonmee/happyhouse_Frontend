import http from '@/http-common';
// initial state
// shape: [{ id, quantity }]
const state = () => ({
  deals: [],
  deal: Object,
  rents: [],
  rent: Object,
});

// getters
const getters = {
  getDealList(state) {
    return state.deals;
  },
  getDeal(state) {
    return state.deal;
  },
  getRentList(state) {
    return state.rents;
  },
  getRent(state) {
    return state.rent;
  },
  getPosition(state) {
    if (state.rent != '') {
      return state.rent.name;
    } else {
      return state.deal.name;
    }
  },
};

// actions
const actions = {
  selectDeal({ commit }, deal) {
    commit('SELECT_DEAL', deal);
  },
  selectRent({ commit }, rent) {
    commit('SELECT_RENT', rent);
  },
  /* 아파트 */
  getAptDealList({ commit }, paramList) {
    http
      .get('/aptDealList/' + paramList[0] + '/' + paramList[1] + '/' + paramList[2])
      .then(({ data }) => {
        commit('GET_APT_DEAL_LIST', data);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
  getAptRentList({ commit }, paramList) {
    http
      .get(
        '/aptRentList/' +
          paramList[0] +
          '/' +
          paramList[1] +
          '/' +
          paramList[2] +
          '/' +
          paramList[3]
      )
      .then(({ data }) => {
        commit('GET_APT_RENT_LIST', data);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
  /* 연립 다세대 */
  getHomeDealList({ commit }, paramList) {
    http
      .get('/homeDealList/' + paramList[0] + '/' + paramList[1] + '/' + paramList[2])
      .then(({ data }) => {
        commit('GET_HOME_DEAL_LIST', data);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
  getHomeRentList({ commit }, paramList) {
    http
      .get(
        '/homeRentList/' +
          paramList[0] +
          '/' +
          paramList[1] +
          '/' +
          paramList[2] +
          '/' +
          paramList[3]
      )
      .then(({ data }) => {
        commit('GET_HOME_RENT_LIST', data);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
  /* 오피스텔 */
  getOfficeDealList({ commit }, paramList) {
    http
      .get('/officeDealList/' + paramList[0] + '/' + paramList[1] + '/' + paramList[2])
      .then(({ data }) => {
        commit('GET_OFFICE_DEAL_LIST', data);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
  getOfficeRentList({ commit }, paramList) {
    http
      .get(
        '/officeRentList/' +
          paramList[0] +
          '/' +
          paramList[1] +
          '/' +
          paramList[2] +
          '/' +
          paramList[3]
      )
      .then(({ data }) => {
        commit('GET_OFFICE_RENT_LIST', data);
      })
      .catch(() => {
        alert('에러가 발생했습니다.');
      });
  },
};

// mutations
const mutations = {
  SELECT_DEAL(state, deal) {
    console.log(deal);
    state.deal = deal;
  },
  SELECT_RENT(state, rent) {
    console.log(rent);
    state.rent = rent;
  },
  GET_APT_DEAL_LIST(state, deals) {
    state.deals = deals;
    state.rent = '';
  },
  GET_APT_RENT_LIST(state, rents) {
    state.rents = rents;
    state.deals = '';
  },
  GET_HOME_DEAL_LIST(state, deals) {
    state.deals = deals;
    state.rent = '';
  },
  GET_HOME_RENT_LIST(state, rents) {
    state.rents = rents;
    state.deals = '';
  },
  GET_OFFICE_DEAL_LIST(state, deals) {
    state.deals = deals;
    state.rent = '';
  },
  GET_OFFICE_RENT_LIST(state, rents) {
    state.rents = rents;
    state.deals = '';
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
