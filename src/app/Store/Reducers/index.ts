import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../../Models/AppState.model';

import { productReducer } from '../Reducers/Products.reducer';
// more reducers imports ....

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer,
}

