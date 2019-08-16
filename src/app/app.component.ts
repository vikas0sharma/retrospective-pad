import { Component } from '@angular/core';
import { NavbarService } from './services/helper/navbar.service';

import { User } from './models/auth/user.model';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'retrospective-pad';
    user: User;

    toggleNavSidebar(): void {
        this.navbarService.toggle();
    }

    constructor(
        private router: Router,
        private navbarService: NavbarService,
        private authService: AuthService) {
        this.authService.currentUser.subscribe(u => this.user = u);
    }
    
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
