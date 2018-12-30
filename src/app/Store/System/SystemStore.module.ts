import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SystemReducer } from './Reducer';


@NgModule({
    imports: [
      CommonModule,
      StoreModule.forFeature('system', SystemReducer),
    ],
})
export class SystemStoreModule {

}
