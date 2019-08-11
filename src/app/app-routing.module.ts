import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module')
            .then(mod => mod.DashboardModule)
    },
    {
        path: 'board',
        loadChildren: () => import('./sprint-board/sprint-board.module')
            .then(mod => mod.SprintBoardModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module')
            .then(mod => mod.AuthModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
