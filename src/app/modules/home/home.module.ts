import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { ExperienceComponent } from './components/experience/experience.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class HomeModule { }
