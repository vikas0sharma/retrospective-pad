import { NgModule } from '@angular/core';

import { SprintBoardRoutingModule } from './sprint-board-routing.module';
import { SprintDashboardComponent } from './sprint-dashboard/sprint-dashboard.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SprintItemComponent } from './sprint-item/sprint-item.component';
import { SprintModal } from './sprint-modal/sprint-modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [SprintDashboardComponent, SprintItemComponent, SprintModal],
    imports: [
        AppMaterialModule,
        SprintBoardRoutingModule,
        SharedModule
    ],
    entryComponents: [SprintModal]
})
export class SprintBoardModule { }
