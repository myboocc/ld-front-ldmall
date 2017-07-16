import * as types from './mutation-types';

const mutations = {
  [types.SET_PRODUCT](state, product) {
    state.product = product;
  }
};

export default mutations;
