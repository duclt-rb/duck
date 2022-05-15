import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { SidebarModule, SidebarModules } from './sidebar';
import * as SidebarActions from './sidebar.actions';

export const SidebarFeatureKey = 'sidebar';

export interface State {
    modules: SidebarModule[];
    visible: boolean;
}

export const initialState: State = {
    modules: SidebarModules,
    visible: true
};

export const reducer = createReducer(
    initialState,
    on(SidebarActions.loadSidebar, (state) => state),
    on(SidebarActions.toggleSidebar, (state) => ({...state, visible: !state.visible}))
);
