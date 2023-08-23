import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbiesRoutingModule } from './hobbies-routing.module';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';


@NgModule({
  declarations: [
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    HobbiesRoutingModule
  ]
})
export class HobbiesModule { }
