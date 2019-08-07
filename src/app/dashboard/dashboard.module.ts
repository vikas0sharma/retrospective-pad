import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [SprintListComponent],
  imports: [
    DashboardRoutingModule,
    AppMaterialModule
  ]
})
export class DashboardModule { }
