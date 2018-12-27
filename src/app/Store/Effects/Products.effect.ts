import { Injectable, NgModule, forwardRef }  from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { Products } from '../../Services/Products.service';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs';

import * as productsActions from '../Actions/Products.action';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store/src';



 @Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions,
              private products: Products){

  }

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType<productsActions.LoadProducts>(
        productsActions.LOAD_PRODUCTS
    ),
    // ...
  )
}


// https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7

// https://github.com/wesleygrimes/angular-ngrx-chuck-norris

// https://stackblitz.com/edit/angular-ngrx-chuck-norris?embed=1&file=src/app/containers/jokes/jokes.component.ts
