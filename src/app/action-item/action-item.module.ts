import { NgModule } from '@angular/core';

import { ActionItemRoutingModule } from './action-item-routing.module';
import { ActionItemBoardComponent } from './action-item-board/action-item-board.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { ActionItemCardComponent } from './action-item-card/action-item-card.component';


@NgModule({
    declarations: [ActionItemBoardComponent, ActionItemCardComponent],
    imports: [
        AppMaterialModule,
        ActionItemRoutingModule
    ]
})
export class ActionItemModule { }
