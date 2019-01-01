import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {  SystemActions } from '../../Store';
import { AppState } from '../../Store/AppState.model';

@Component({
  selector: 'about',
  templateUrl: './About.page.html',
  styleUrls: ['./About.page.scss']
})

export class About {

	constructor(private store$: Store<AppState>){
		
	}

	navigateToLogin(){
		this.store$.dispatch(
			new SystemActions.Redirect({
				route: {
					path: 'Home/Login',
					queryParams: {
						productId: 65,
					}
				}
			})
		);
	}

}

