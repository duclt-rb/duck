import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSidebar from './sidebar.reducer';

export const selectState = createFeatureSelector<fromSidebar.State>(fromSidebar.SidebarFeatureKey);
export const selectModules = createSelector(selectState, (state) => state.modules);
export const selectVisible = createSelector(selectState, (state) => state.visible);
