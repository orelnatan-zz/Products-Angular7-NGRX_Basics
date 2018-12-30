import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductsReducer } from './Reducer';
import { ProductsEffects } from './Effects';

@NgModule({
    imports: [
      CommonModule,
      StoreModule.forFeature('products', ProductsReducer),
      EffectsModule.forFeature([ProductsEffects]),
    ],
    providers: [ ProductsEffects ]
})
export class ProductsStoreModule {

}
