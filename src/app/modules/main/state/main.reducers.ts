import { MenuItem } from '../../../shared/interfaces/menu-item';
import { Action, createReducer } from '@ngrx/store';

export const MAIN_FEATURE_KEY = 'main';

export interface MainStore {
  readonly [MAIN_FEATURE_KEY]: MainState;
}

export interface MainState {
  menu: MenuItem[];
}

const initialState: MainState = {
  menu: [
    {
      name: 'Home',
      icon: null,
      link: [''],
    }
  ]
}

export const mainReducers = createReducer<MainState, Action>(initialState);
