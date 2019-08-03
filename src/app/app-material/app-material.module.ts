import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatListModule,
    MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule
  ]
})
export class AppMaterialModule { }
