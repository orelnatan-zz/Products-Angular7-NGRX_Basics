import { Action } from '@ngrx/store';
import { Product } from '../../Models/Product.model';

export enum ActionTypes {
    LOAD_PRODUCTS = '[PRODUCTS] Load',
    PRODUCTS_LOAD_FAILED = '[PRODUCTS] Fail',
    PRODUCTS_LOAD_SUCCESS = '[PRODUCTS] Success',
    ADD_PRODUCT = '[PRODUCTS] Add',
    REMOVE_PRODUCT = '[PRODUCT] Remove',
    UPDATE_PRODUCT = '[PRODUCT] Update',
}

export class LoadProducts implements Action {
    readonly type = ActionTypes.LOAD_PRODUCTS;

    constructor(){}
}

export class ProductsLoadFailed implements Action {
    readonly type = ActionTypes.PRODUCTS_LOAD_FAILED;

    constructor(public payload: { errorAlert: string }){}
}

export class ProductsLoadSuccess implements Action {
    readonly type = ActionTypes.PRODUCTS_LOAD_SUCCESS;

    constructor(public payload: { 
        products: Array<Product>, 
        successAlert: string 
    }){}
}

export class AddProduct implements Action {
    readonly type = ActionTypes.ADD_PRODUCT;
  
    constructor(public payload: { product: Product } ){}
}

export class RemoveProduct implements Action {
    readonly type = ActionTypes.REMOVE_PRODUCT;
  
    constructor(public payload: { productId: number }) {}
}

export class UpdateProduct implements Action {
    readonly type = ActionTypes.UPDATE_PRODUCT;
  
    constructor(public payload: { product: Product }) {}
}

export type Actions = LoadProducts | ProductsLoadFailed | ProductsLoadSuccess | AddProduct | RemoveProduct | UpdateProduct;