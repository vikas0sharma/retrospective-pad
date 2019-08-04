import { NgModule } from '@angular/core';

import { SprintBoardRoutingModule } from './sprint-board-routing.module';
import { SprintDashboardComponent } from './sprint-dashboard/sprint-dashboard.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SprintItemComponent } from './sprint-item/sprint-item.component';
import { SprintModal } from './sprint-modal/sprint-modal.component';


@NgModule({
    declarations: [SprintDashboardComponent, SprintItemComponent, SprintModal],
    imports: [
        AppMaterialModule,
        SprintBoardRoutingModule
    ],
    entryComponents: [SprintModal]
})
export class SprintBoardModule { }
