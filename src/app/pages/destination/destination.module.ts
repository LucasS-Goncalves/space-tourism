import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationComponent } from './destination.component';
import { RouterModule } from '@angular/router';
import { appDestinationRoutes } from './app-destination.routes';


@NgModule({
  declarations: [
    DestinationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appDestinationRoutes)
  ]
})
export class DestinationModule { }
