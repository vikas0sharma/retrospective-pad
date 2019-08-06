import { Component } from '@angular/core';
import { NavbarService } from './services/helper/navbar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'retrospective-pad';

    toggleNavSidebar(): void {
        this.navbarService.toggle();
    }
    constructor(private navbarService: NavbarService) {
    }
}
