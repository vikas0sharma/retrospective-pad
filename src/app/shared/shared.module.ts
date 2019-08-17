import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
    declarations: [FabButtonComponent, TopBarComponent],
    imports: [
        CommonModule,
        AppMaterialModule,
    ],
    exports: [
        FabButtonComponent,
        TopBarComponent
    ]
})
export class SharedModule { }
