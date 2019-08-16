import { NgModule } from '@angular/core';

import { ActionItemRoutingModule } from './action-item-routing.module';
import { ActionItemBoardComponent } from './action-item-board/action-item-board.component';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
    declarations: [ActionItemBoardComponent],
    imports: [
        AppMaterialModule,
        ActionItemRoutingModule
    ]
})
export class ActionItemModule { }
