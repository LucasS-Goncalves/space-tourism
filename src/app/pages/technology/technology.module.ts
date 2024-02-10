import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology.component';
import { RouterModule } from '@angular/router';
import { appTechnologyRoutes } from './app-technology.routes';



@NgModule({
  declarations: [
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appTechnologyRoutes)
  ]
})
export class TechnologyModule { }
