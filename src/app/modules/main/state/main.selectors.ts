import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MAIN_FEATURE_KEY, MainState } from './main.reducers';

const getMainStore = createFeatureSelector<MainState>(MAIN_FEATURE_KEY);

const selectMenu = createSelector(
  getMainStore,
  (mainState: MainState) => mainState.menu
)

export const MainSelectors = {
  selectMenu,
}
