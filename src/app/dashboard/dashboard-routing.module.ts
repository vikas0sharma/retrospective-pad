import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SprintListComponent } from './sprint-list/sprint-list.component';


const routes: Routes = [
    {
        path: '',
        component: SprintListComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
