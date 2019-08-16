import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    {
        path: '',
        canActivate:[AuthGuard],
        loadChildren: () => import('./dashboard/dashboard.module')
            .then(mod => mod.DashboardModule)
    },
    {
        path: 'board',
        canActivate:[AuthGuard],
        loadChildren: () => import('./sprint-board/sprint-board.module')
            .then(mod => mod.SprintBoardModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module')
            .then(mod => mod.AuthModule)
    },
    // otherwise redirect to home
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
