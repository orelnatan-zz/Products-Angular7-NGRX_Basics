import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { About } from '../Pages/About';

const routes: Routes = [
	{ path: '', redirectTo: 'Home', pathMatch: 'full' },
	{ path: 'Home', component: Home,
	  children: [
		{ path: '', redirectTo: 'Login', pathMatch: 'full' },
		{ path: 'Login', component: Login },
		{ path: 'About', component: About },
	  ],
	},
   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class RoutingModule {

    constructor() {

    }

}