import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Products } from '../../Services/Products.service';
import * as productsActions from './Actions';
import { Product } from '../../Models/Product.model';
import { SystemActions } from '../../Store';
import { Store } from '@ngrx/store';
import { SystemState } from '../System/SystemState.model';

@Injectable()
export class ProductsEffects {

    constructor(
        private products: Products,
		private actions$: Actions,
		private store$: Store<SystemState>
    ) {}

    @Effect()
    loadProductsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<productsActions.LoadProducts>(
            productsActions.ActionTypes.LOAD_PRODUCTS
        ),
        startWith(new productsActions.LoadProducts()),
        switchMap((action: Action) => this.products.getProducts().pipe(
            map((products: Array<Product>) => {
				this.store$.dispatch(
					new SystemActions.Pending({ isPending: false })
				);
				return new productsActions.ProductsLoadSuccess({
					products: products,
					successAlert: 'Status 200, Success!' 
				});
			}
                    
                ),
                catchError(error =>
                    observableOf(new productsActions.ProductsLoadFailed({ 
                        errorAlert: 'Status 404! Oops, File not found.' 
                    }))
                )
            )
        )
    );


}