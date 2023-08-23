import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EXPERIENCES_FEATURE_KEY, ExperiencesState } from './experiences.reducers';

const getExperiencesStore = createFeatureSelector<ExperiencesState>(EXPERIENCES_FEATURE_KEY);

const selectTimeline = createSelector(
  getExperiencesStore,
  (experiencesState: ExperiencesState) => experiencesState.timeline,
)

export const ExperiencesSelectors = {
  selectTimeline,
}
