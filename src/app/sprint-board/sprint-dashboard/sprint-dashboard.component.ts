import { Component, OnInit } from '@angular/core';
import { SprintItem } from 'src/app/models/sprint-item';
import { SprintBoardService } from 'src/app/services/sprint-board/sprint-board.service';
import { MatDialog } from '@angular/material/dialog';
import { SprintModal } from '../sprint-modal/sprint-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-sprint-dashboard',
    templateUrl: './sprint-dashboard.component.html',
    styleUrls: ['./sprint-dashboard.component.scss']
})
export class SprintDashboardComponent implements OnInit {

    isShown: boolean = false;
    goodThings: SprintItem[] = [];

    constructor(private sprintBoardService: SprintBoardService,
        private dialog: MatDialog,
        private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.goodThings = this.sprintBoardService.sprintItems;
    }

    addThingsWentWell() {
        const dialogRef = this.dialog.open(SprintModal, {
            width: '250px',
            data: new SprintItem()
        });
        dialogRef.afterClosed().subscribe((result: SprintItem) => {
            console.log('The dialog was closed');
            console.log(result);
            if (result && result.itemText) {
                this.sprintBoardService.addItem(result);
                this.snackBar.open("added", "close", {
                    duration: 2000,
                  });
            }
        });
    }


}
