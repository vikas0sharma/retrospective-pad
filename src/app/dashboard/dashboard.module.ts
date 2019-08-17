import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SprintListComponent],
  imports: [
    DashboardRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class DashboardModule { }
