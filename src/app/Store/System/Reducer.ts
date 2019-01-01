import { Actions, ActionTypes } from './Actions';
import * as systemActions from './Actions';
import { SystemState } from './SystemState.model';
import { Route } from '../../Models/Route.model';
import { Status } from '../../Models/Status.model';
import { ActivatedRoute } from '@angular/router';

const initialState: SystemState = {
    location: {
		path: '/',              /// ????
		queryParams: {}
	},
    pending: false,
    status: {} as Status
}


export function SystemReducer(state = initialState, action : Actions): SystemState {
  switch(action.type) {
		case ActionTypes.PENDING: {
			return {
				... state,
				pending: action.payload.isPending
			}
		}

		case ActionTypes.REDIRECT: {
			return {
				... state,
				location: action.payload.route,
			}
		}

		default: {
			return state;
		}

  }
}
