import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ProductsStoreModule } from './Products/ProductsStore.module';
import { SystemStoreModule } from './System/SystemStore.module';

@NgModule({
    imports: [
      CommonModule,
      ProductsStoreModule,
      SystemStoreModule,
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
      }),
    ],
    declarations: []
  })
  export class AppStoreModule {}
