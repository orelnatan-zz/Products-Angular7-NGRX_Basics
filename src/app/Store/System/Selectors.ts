import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SystemState } from './SystemState.model';
import { Route } from '../../Models/Route.model';

export const getSystemState = createFeatureSelector<SystemState>('system');

export const getIsPending = createSelector(
	getSystemState,
	(state: SystemState): boolean => {
		return state.pending;
	}
);

export const getOnRedirect = createSelector(
	getSystemState,
	(state: SystemState): Route => {
		return state.location;
	}
);