import { Action, createReducer } from '@ngrx/store';

export const APP_FEATURE_KEY = 'app';

export interface AppStore {
  [APP_FEATURE_KEY]: AppState;
}

export interface AppState {
  appName: string;
}

const initialState: AppState = {
  appName: 'e-portfolio',
}

export const appReducers = createReducer<AppState, Action>(initialState);
