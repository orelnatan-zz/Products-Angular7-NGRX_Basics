import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Product } from '../../Models/Product.model';
import * as productsReducer from '../Reducers/Products.reducer';

export const getProductsState = createFeatureSelector<Product[]>('products');

export const getProducts = createSelector(
  getProductsState,
  productsReducer.getProducts
);
