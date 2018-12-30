import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SystemState } from './SystemState.model';

export const getSystemState = createFeatureSelector<SystemState>('system');

export const getIsPending = createSelector(
  getSystemState,
  (state: SystemState): boolean => {
      return state.pending;
  }
);
