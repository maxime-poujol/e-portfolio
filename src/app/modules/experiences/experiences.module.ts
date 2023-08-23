import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { MatCardModule } from '@angular/material/card';
import { ExperiencesTimelineComponent } from './components/experiences-timeline/experiences-timeline.component';
import { StoreModule } from '@ngrx/store';
import { EXPERIENCES_FEATURE_KEY, experiencesReducers } from './state/experiences.reducers';


@NgModule({
  declarations: [
    ExperiencesComponent,
    ExperiencesTimelineComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      EXPERIENCES_FEATURE_KEY,
      experiencesReducers,
      {}
    ),
    ExperiencesRoutingModule,
    MatCardModule
  ]
})
export class ExperiencesModule { }
