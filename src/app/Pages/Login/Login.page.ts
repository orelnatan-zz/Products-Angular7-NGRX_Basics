import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SystemActions } from '../../Store';
import { AppState } from '../../Store/AppState.model';

@Component({
  selector: 'login',
  templateUrl: './Login.page.html',
  styleUrls: ['./Login.page.scss']
})

export class Login {

	constructor(private store$: Store<AppState>) {

	}

	navigateToAbout(){
		this.store$.dispatch(
			new SystemActions.Redirect({
				route: {
					path: 'Home/About',
					queryParams: {
						productId: 43,
					}
				}
			})
		);
	}

}

