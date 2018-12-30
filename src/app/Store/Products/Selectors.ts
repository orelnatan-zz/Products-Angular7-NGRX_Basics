import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../../Models/Product.model';
import { Status } from '../../Models/Status.model';
import { ProductsState } from './ProductsState.model';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getAllProducts = createSelector(
    getProductsState,
    (state: ProductsState): Array<Product> => {
        return state.products;
    }
);

// export const getProductIsPending = createSelector(
//     getProductsState,
//     (state: ProductsState): boolean => {
//         return state.isPending;
//     }
// );

export const getProductsRequestStatus = createSelector(
    getProductsState,
    (state: ProductsState): Status => {
        return state.status;
    }
);
