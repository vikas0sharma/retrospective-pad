import { Component, OnInit, Input } from '@angular/core';
import { SprintItem } from 'src/app/models/sprint-item';
import { SprintItemType } from 'src/app/models/enums';

@Component({
    selector: 'app-sprint-card',
    templateUrl: './sprint-card.component.html',
    styleUrls: ['./sprint-card.component.scss']
})
export class SprintCardComponent implements OnInit {

    @Input() sprintCard: SprintItem;
    isEditing: boolean = false;
    constructor() { }

    ngOnInit() {
    }

    getColor(sprintItem: SprintItem): string {

        switch (sprintItem.itemType) {
            case SprintItemType.WentWell:
                return "#d4edda";
            case SprintItemType.WentWrong:
                return "#f8d7da";
            case SprintItemType.ActionItem:
                return "#cce5ff";
            default:
                return "";
        }
    }

}
