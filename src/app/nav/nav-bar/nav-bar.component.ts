import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @Output() toggleSideNav = new EventEmitter<void>();

    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    ngOnInit() {
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}
