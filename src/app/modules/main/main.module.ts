import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './components/menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { MAIN_FEATURE_KEY, mainReducers } from './state/main.reducers';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      MAIN_FEATURE_KEY,
      mainReducers,
      {}
    ),
    MainRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class MainModule { }
