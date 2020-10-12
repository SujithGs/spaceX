import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router/src/config';
import { ProgramsLandingPageComponent } from './component/programs-landing-page/programs-landing-page.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    component: ProgramsLandingPageComponent
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
