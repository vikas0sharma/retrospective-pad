import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavbarService } from 'src/app/services/helper/navbar.service';

@Component({
    selector: 'app-nav-side-bar',
    templateUrl: './nav-side-bar.component.html',
    styleUrls: ['./nav-side-bar.component.scss']
})
export class NavSideBarComponent implements OnInit {

    @ViewChild('sidenav', { static: true }) private sidenav: MatSidenav;
    
    constructor(private navbarService: NavbarService) { }

    ngOnInit() {
        this.navbarService.setSidenav(this.sidenav);
    }

}
