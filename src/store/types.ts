export type CategoriesState = {
  all: Array<unknown>;
}
export type ProductsState = {
  all: Array<unknown>;
}
/* eslint-disable semi */
export default interface RootState {
  categories: CategoriesState;
  products: CategoriesState;
}
