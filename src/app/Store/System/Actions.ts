import { Action } from '@ngrx/store';
import { Route } from '../../Models/Route.model';

export enum ActionTypes {
	PENDING = '[SYSTEM] pending',
	SUCCESS = '[SYSTEM] Success',
	FAILURE = '[SYSTEM] Failure',
	REDIRECT = '[SYSTEM] Redirect',  
}

export class Pending implements Action {
    readonly type = ActionTypes.PENDING;

    constructor(public payload: { isPending: boolean }){}
}

export class Success implements Action {
    readonly type = ActionTypes.SUCCESS;

    constructor(){}
}

export class Failure implements Action {
    readonly type = ActionTypes.FAILURE;

    constructor(){}
}

export class Redirect implements Action {
    readonly type = ActionTypes.REDIRECT;
	
    constructor(public payload: { route: Route }){}
}

export type Actions = Pending | Success | Failure | Redirect;