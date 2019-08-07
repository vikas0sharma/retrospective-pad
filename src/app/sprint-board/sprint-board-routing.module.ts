import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SprintDashboardComponent } from './sprint-dashboard/sprint-dashboard.component';
import { BoardComponent } from './board/board.component';


const routes: Routes = [
    {
        path: 'create',
        component: BoardComponent
    },
    {
        path: ':id',
        component: SprintDashboardComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SprintBoardRoutingModule { }
