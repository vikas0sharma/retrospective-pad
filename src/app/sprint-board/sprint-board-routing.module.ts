import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SprintDashboardComponent } from './sprint-dashboard/sprint-dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: SprintDashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprintBoardRoutingModule { }