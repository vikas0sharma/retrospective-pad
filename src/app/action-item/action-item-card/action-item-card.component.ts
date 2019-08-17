import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-action-item-card',
    templateUrl: './action-item-card.component.html',
    styleUrls: ['./action-item-card.component.scss']
})
export class ActionItemCardComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.subTasks.push({ text: "dum", status: false });
        this.subTasks.push({ text: "dum1", status: true });
    }

    isDone: boolean = false;
    subTasks: { text: string, status: boolean }[] = [];

    onStatusChanged(e) {
        console.log(e);
        if (e.checked) {
            this.subTasks.forEach(s => s.status = true);
        }
    }


}
