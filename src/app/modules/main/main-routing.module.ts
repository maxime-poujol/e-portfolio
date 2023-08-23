import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'experiences',
        loadChildren: () => import('../experiences/experiences.module').then(m => m.ExperiencesModule),
      },
      {
        path: 'hobbies',
        loadChildren: () => import('../hobbies/hobbies.module').then(m => m.HobbiesModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
