import httpRequest from '@/services/http-request';
import { ActionContext } from 'vuex';
import { AxiosResponse } from 'axios';
import RootState, { ProductsState } from '../types';

const state = (): ProductsState => ({
  all: [],
});

const getters = {};

const actions = {
  getAllProducts(
    context: ActionContext<ProductsState,
    RootState>, categoryId: string,
  ): void {
    httpRequest.get(`/sites/MLB/search?category=${categoryId}`)
      .then((res: AxiosResponse) => {
        context.commit('setProducts', res.data.results);
      });
  },
};

const mutations = {
  setProducts(
    s: ProductsState,
    products: Array<unknown>,
  ): void {
    // eslint-disable-next-line no-param-reassign
    s.all = products;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
