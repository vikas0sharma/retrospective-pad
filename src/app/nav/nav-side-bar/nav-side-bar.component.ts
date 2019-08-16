import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavbarService } from 'src/app/services/helper/navbar.service';
import { User } from 'src/app/models/auth/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-nav-side-bar',
    templateUrl: './nav-side-bar.component.html',
    styleUrls: ['./nav-side-bar.component.scss']
})
export class NavSideBarComponent implements OnInit {

    @ViewChild('sidenav', { static: true }) private sidenav: MatSidenav;

    private user: User;

    constructor(
        private navbarService: NavbarService,
        private authenticationService: AuthService) { }

    ngOnInit() {
        this.navbarService.setSidenav(this.sidenav);
        this.authenticationService.currentUser.subscribe(u => this.user = u);
    }

    getInitials(): string {
        if (this.user && this.user.email) {

            return this.user.email[0].toUpperCase();
        }
        return '';
    }

}
