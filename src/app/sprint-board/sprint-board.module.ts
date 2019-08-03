import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintBoardRoutingModule } from './sprint-board-routing.module';
import { SprintDashboardComponent } from './sprint-dashboard/sprint-dashboard.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SprintItemComponent } from './sprint-item/sprint-item.component';


@NgModule({
  declarations: [SprintDashboardComponent, SprintItemComponent],
  imports: [
    AppMaterialModule,
    SprintBoardRoutingModule
  ]
})
export class SprintBoardModule { }
