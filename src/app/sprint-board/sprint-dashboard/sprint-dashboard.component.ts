import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sprint-dashboard',
    templateUrl: './sprint-dashboard.component.html',
    styleUrls: ['./sprint-dashboard.component.scss']
})
export class SprintDashboardComponent implements OnInit {

    isShown: boolean = false;
    constructor() { }

    ngOnInit() {
    }

}
