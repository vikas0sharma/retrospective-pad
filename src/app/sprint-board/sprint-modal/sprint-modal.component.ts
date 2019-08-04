import { Component, Inject } from '@angular/core';
import { SprintItem } from 'src/app/models/sprint-item';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'sprint-modal',
    templateUrl: 'sprint-modal-template.html'
})
export class SprintModal {
    constructor(
        public dialogRef: MatDialogRef<SprintModal>,
        @Inject(MAT_DIALOG_DATA) public data: SprintItem) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}