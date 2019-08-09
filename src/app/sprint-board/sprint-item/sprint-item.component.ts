import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SprintItem } from 'src/app/models/sprint-item';
import { SprintItemType } from 'src/app/models/enums';

@Component({
    selector: 'app-sprint-item',
    templateUrl: './sprint-item.component.html',
    styleUrls: ['./sprint-item.component.scss']
})
export class SprintItemComponent implements OnInit {

    @Input() sprintItems: SprintItem[];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.sprintItems, event.previousIndex, event.currentIndex);
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
    constructor() { }

    ngOnInit() {
    }

}
