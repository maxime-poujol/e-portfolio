import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './pages/project/experience.component';
import { MatCardModule } from '@angular/material/card';
import { ExperienceTimelineComponent } from './components/experience-timeline/experience-timeline.component';
import { StoreModule } from '@ngrx/store';
import { MAIN_FEATURE_KEY, mainReducers } from '../main/state/main.reducers';
import { EXPERIENCE_FEATURE_KEY, experienceReducers } from './state/experience.reducers';


@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceTimelineComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      EXPERIENCE_FEATURE_KEY,
      experienceReducers,
      {}
    ),
    ExperienceRoutingModule,
    MatCardModule
  ]
})
export class ExperienceModule { }
