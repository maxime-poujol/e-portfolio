import { Action, createReducer } from '@ngrx/store';
import { TimelineItem } from '../../../shared/interfaces/timeline-item';
import * as moment from 'moment';
import { experienceData } from '../../../data/experienceData';

export const EXPERIENCE_FEATURE_KEY = 'experience';

export interface ExperienceStore {
  readonly [EXPERIENCE_FEATURE_KEY]: ExperienceState;
}

export interface ExperienceState {
  timeline: TimelineItem[];
}


const initialState: ExperienceState = {
  timeline: experienceData()
}


export const experienceReducers = createReducer<ExperienceState, Action>(initialState);
