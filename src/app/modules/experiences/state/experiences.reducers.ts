import { Action, createReducer } from '@ngrx/store';
import { TimelineItem } from '../../../shared/interfaces/timeline-item';
import { experiencesData } from '../../../data/experiences.data';

export const EXPERIENCES_FEATURE_KEY = 'experiences';

export interface ExperiencesStore {
  readonly [EXPERIENCES_FEATURE_KEY]: ExperiencesState;
}

export interface ExperiencesState {
  timeline: TimelineItem[];
}


const initialState: ExperiencesState = {
  timeline: experiencesData()
}


export const experiencesReducers = createReducer<ExperiencesState, Action>(initialState);
