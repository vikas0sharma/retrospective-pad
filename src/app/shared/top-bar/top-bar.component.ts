import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    @Input() primaryTitle;
    @Input() secondaryTitle;
    @Output() onSearch = new EventEmitter<string>()


    constructor() { }

    ngOnInit() {
    }

    onSearchChange(searchText: string) {
        this.onSearch.emit(searchText);
    }

}
