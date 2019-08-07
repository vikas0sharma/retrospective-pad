import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fabButtonAnimations } from './fab-button.animation';



@Component({
    selector: 'app-fab-button',
    templateUrl: './fab-button.component.html',
    styleUrls: ['./fab-button.component.scss'],
    animations: fabButtonAnimations
})

export class FabButtonComponent {

    @Input("reverse-column-direction") reverseColumnDirection: boolean = false;
    @Input("buttons") fabButtons: FabButton[];
    @Output('fabClick') fabClick = new EventEmitter<FabButton>();

    buttons = [];
    fabTogglerState = 'inactive';

    constructor() { }

    private showItems() {
        this.fabTogglerState = 'active';
        this.buttons = this.fabButtons;
    }

    private hideItems() {
        this.fabTogglerState = 'inactive';
        this.buttons = [];
    }

    public onToggleFab() {
        this.buttons.length ? this.hideItems() : this.showItems();
    }

    public onClickFab(btn: FabButton) {
        this.hideItems();
        this.fabClick.emit(btn);
    }

}

export interface FabButton {
    icon: string,
    tooltip: string,
    class: string
}

export enum SpeedDialFabPosition {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right'
}
