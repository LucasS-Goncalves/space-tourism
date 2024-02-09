import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew.component';
import { RouterModule } from '@angular/router';
import { appCrewRoutes } from './app-Crew.routes';



@NgModule({
  declarations: [
    CrewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appCrewRoutes)
  ]
})
export class CrewModule { }
