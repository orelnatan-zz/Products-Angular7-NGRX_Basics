import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Product } from '../../Models/Product.model';

export const ADD_PRODUCT = '[PRODUCT] Add';
export const REMOVE_PRODUCT = '[PRODUCT] Remove';

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: Product){}
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT

  constructor(public payload: number) {}
}

export type Actions = AddProduct | RemoveProduct;
