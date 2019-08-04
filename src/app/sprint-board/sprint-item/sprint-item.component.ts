import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SprintItem } from 'src/app/models/sprint-item';

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

    constructor() { }

    ngOnInit() {
    }

}
