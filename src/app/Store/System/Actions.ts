import { Action } from '@ngrx/store';

export enum ActionTypes {
	ACTIVATE_PENDING_MODE = '[SYSTEM] pending',
	ACTIVATE_SUCCESS_MODE = '[SYSTEM] Success',
	ACTIVATE_FAILURE_MODE = '[SYSTEM] failure',  
}

export class ActivatePendingMode implements Action {
    readonly type = ActionTypes.ACTIVATE_PENDING_MODE;

    constructor(public payload: { isPending: boolean }){}
}

export class ActivateSuccessMode implements Action {
    readonly type = ActionTypes.ACTIVATE_SUCCESS_MODE;

    constructor(){}
}

export class ActivateFailureMode implements Action {
    readonly type = ActionTypes.ACTIVATE_FAILURE_MODE;

    constructor(){}
}

export type Actions = ActivatePendingMode | ActivateSuccessMode | ActivateFailureMode;