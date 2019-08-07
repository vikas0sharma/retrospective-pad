import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
    declarations: [FabButtonComponent],
    imports: [
        CommonModule,
        AppMaterialModule,
    ],
    exports: [
         FabButtonComponent
    ]
})
export class SharedModule { }
