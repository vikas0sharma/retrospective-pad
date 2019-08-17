import { NgModule } from '@angular/core';

import { ActionItemRoutingModule } from './action-item-routing.module';
import { ActionItemBoardComponent } from './action-item-board/action-item-board.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { ActionItemCardComponent } from './action-item-card/action-item-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [ActionItemBoardComponent, ActionItemCardComponent],
    imports: [
        AppMaterialModule,
        ActionItemRoutingModule,
        SharedModule
    ]
})
export class ActionItemModule { }
