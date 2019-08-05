import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module')
            .then(mod => mod.DashboardModule)
    },
    {
        path: 'board/:id',
        loadChildren: () => import('./sprint-board/sprint-board.module')
            .then(mod => mod.SprintBoardModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
