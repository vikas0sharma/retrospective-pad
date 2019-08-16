import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionItemBoardComponent } from './action-item-board/action-item-board.component';


const routes: Routes = [
    {
        path: '',
        component: ActionItemBoardComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionItemRoutingModule { }
