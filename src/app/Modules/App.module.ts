import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './Routing.module';
import { MomentModule } from 'angular2-moment'; // npm i angular2-moment // https://www.npmjs.com/package/angular2-moment

import { AppRoot } from '../Core/AppRoot';
import { Modal } from '../Core/Modal';
import { Notification } from '../Core/Notification';
import { Home } from '../Pages/Home';
import { Spinner } from '../Common/Spinner';
import { Loader } from '../Modals/Loader';
import { Dialog } from '../Modals/Dialog';
import { Success } from '../Modals/Success';
import { Failure } from '../Modals/Failure';
import { InputText } from '../Inputs/InputText';
import { InputSelect } from '../Inputs/InputSelect';
import { InputDate } from '../Inputs/InputDate';
import { InputCheckbox } from '../Inputs/InputCheckbox';
import { InputRadioButton } from '../Inputs/InputRadioButton';
import { InputTextarea } from '../Inputs/InputTextarea';
import { InputNumber } from '../Inputs/InputNumber';

@NgModule({
  declarations: [
    AppRoot,
    Modal,
    Notification,
    Home,
    Spinner,
    Loader,
    Dialog,
    Success,
    Failure,
    InputText,
    InputSelect,
    InputDate,
    InputCheckbox,
    InputRadioButton,
    InputTextarea,
    InputNumber,
  ],

  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModule,
    MomentModule,

  ],

  providers: [

  ],

  bootstrap: [
    AppRoot
  ]
})
export class AppModule {

}
