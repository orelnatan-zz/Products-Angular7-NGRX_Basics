import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SystemReducer } from './Reducer';
import { EffectsModule } from '@ngrx/effects';
import { SystemEffects } from './Effects';

@NgModule({
    imports: [
      CommonModule,
      StoreModule.forFeature('system', SystemReducer),
      EffectsModule.forFeature([SystemEffects]),
    ],
})
export class SystemStoreModule {

}
