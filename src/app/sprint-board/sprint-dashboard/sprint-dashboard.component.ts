import { Component, OnInit } from '@angular/core';
import { SprintItem } from 'src/app/models/sprint-item';
import { SprintBoardService } from 'src/app/services/sprint-board/sprint-board.service';

@Component({
    selector: 'app-sprint-dashboard',
    templateUrl: './sprint-dashboard.component.html',
    styleUrls: ['./sprint-dashboard.component.scss']
})
export class SprintDashboardComponent implements OnInit {

    isShown: boolean = false;
    goodThings: SprintItem[] = [];

    constructor(private sprintBoardService: SprintBoardService) { }

    ngOnInit() {
        this.goodThings = this.sprintBoardService.sprintItems;
    }

}
