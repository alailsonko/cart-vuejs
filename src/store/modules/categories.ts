import httpRequest from '@/services/http-request';
import { ActionContext } from 'vuex';
import { AxiosResponse } from 'axios';
import RootState, { CategoriesState } from '../types';

const state = (): CategoriesState => ({
  all: [],
});

const getters = {};

const actions = {
  getAllCategories(
    context: ActionContext<CategoriesState,
    RootState>,
  ): void {
    httpRequest.get('/sites/MLB/categories')
      .then((res: AxiosResponse) => {
        context.commit('setCategories', res.data);
      });
  },
};

const mutations = {
  setCategories(
    s: CategoriesState,
    categories: Array<unknown>,
  ): void {
    // eslint-disable-next-line no-param-reassign
    s.all = categories;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
