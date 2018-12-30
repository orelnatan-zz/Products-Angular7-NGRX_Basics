import { Actions, ActionTypes } from './Actions';
import * as systemActions from './Actions';
import { SystemState } from './SystemState.model';
import { Route } from '../../Models/Route.model';
import { Status } from '../../Models/Status.model';

const initialState: SystemState = {
    location: {} as Route,
    pending: false,
    status: {} as Status
}

export function SystemReducer(state = initialState, action : Actions): SystemState {
  switch(action.type) {
    case ActionTypes.ACTIVATE_PENDING_MODE: {
      return {
        ... state,
        pending: action.payload.isPending
      }
    }

    default: {
      return state;
    }

  }
}
