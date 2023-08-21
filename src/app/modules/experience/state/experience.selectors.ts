import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EXPERIENCE_FEATURE_KEY, ExperienceState } from './experience.reducers';
import { MainState } from '../../main/state/main.reducers';

const getExperienceStore = createFeatureSelector<ExperienceState>(EXPERIENCE_FEATURE_KEY);

const selectTimeline = createSelector(
  getExperienceStore,
  (experienceState: ExperienceState) => experienceState.timeline,
)

export const ExperienceSelectors = {
  selectTimeline,
}
