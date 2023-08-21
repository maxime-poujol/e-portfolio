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
import { LangageSelectorComponent } from './components/langage-selector/langage-selector.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    LangageSelectorComponent
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
    MatListModule,
    MatMenuModule,
  ]
})
export class MainModule { }
