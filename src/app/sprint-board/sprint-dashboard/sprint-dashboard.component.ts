import { Component, OnInit } from '@angular/core';
import { SprintItem } from 'src/app/models/sprint-item';
import { SprintBoardService } from 'src/app/services/sprint-board/sprint-board.service';
import { MatDialog } from '@angular/material/dialog';
import { SprintModal } from '../sprint-modal/sprint-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FabButton } from 'src/app/shared/fab-button/fab-button.component';
import { SprintItemType } from 'src/app/models/enums';

@Component({
    selector: 'app-sprint-dashboard',
    templateUrl: './sprint-dashboard.component.html',
    styleUrls: ['./sprint-dashboard.component.scss']
})
export class SprintDashboardComponent implements OnInit {

    isShown: boolean = false;
    itemsWentWell: SprintItem[] = [];
    itemsWentWrong: SprintItem[] = [];

    constructor(private sprintBoardService: SprintBoardService,
        private dialog: MatDialog,
        private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.itemsWentWell = this.sprintBoardService.sprintItemsWentWell;
        this.itemsWentWrong = this.sprintBoardService.sprintItemsWentWrong;
    }

    onAddClick(fb: FabButton) {
        if (fb.id == SprintItemType.WentWell) {
            this.addThingsWentWell();
        }
        else if (fb.id == SprintItemType.WentWrong) {
            this.addThingsWentWrong();
        }
        else {

        }
    }

    private addThingsWentWell(): void {
        const dialogRef = this.dialog.open(SprintModal, {
            width: '250px',
            data: new SprintItem()
        });
        dialogRef.afterClosed().subscribe((result: SprintItem) => {
            console.log(result);
            if (result && result.itemText) {
                this.sprintBoardService.addItemWentWell(result);
                this.snackBar.open("added", "close", {
                    duration: 2000,
                });
            }
        });
    }

    private addThingsWentWrong(): void {
        const dialogRef = this.dialog.open(SprintModal, {
            width: '250px',
            data: new SprintItem()
        });

        dialogRef.afterClosed().subscribe((result: SprintItem) => {
            console.log(result);
            if (result && result.itemText) {
                this.sprintBoardService.addItemWentWrong(result);
                this.snackBar.open("added", "close", {
                    duration: 2000,
                });
            }
        });
    }
    speedDialFabButtons = [
        {
            id: SprintItemType.WentWell,
            icon: 'sentiment_very_satisfied',
            tooltip: 'Do some timeline here',
            class: 'alert-primary'
        },
        {
            id: SprintItemType.WentWrong,
            icon: 'sentiment_very_dissatisfied',
            tooltip: 'Do some headline here'
        },
        {
            id: SprintItemType.ActionItem,
            icon: 'list',
            tooltip: 'get some room here'
        }
    ];


}
