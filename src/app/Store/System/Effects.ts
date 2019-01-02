import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Products } from '../../Services/Products.service';
import * as productsActions from '../Products/Actions';
import { SystemActions } from '../../Store';
import { Store } from '@ngrx/store';
import { SystemState } from '../System/SystemState.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class SystemEffects {

    constructor(
      private products: Products,
      private actions$: Actions,
      private route: ActivatedRoute,
      private router: Router,
      private store$: Store<SystemState>
    ) {}

    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions$.pipe(
      ofType<productsActions.LoadProducts>(
        productsActions.ActionTypes.LOAD_PRODUCTS
      ),
      tap((user) => {
        this.route.queryParams.subscribe((params) => {
          this.store$.dispatch(
            new SystemActions.Redirect({ route: {
              path: this.router.url.split('?')[0],
              queryParams: params,
            }})
          );
        })
      })
    );



}
