import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { reducers } from './Reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),

  ]
})
export class AppStoreModule {}
