import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onLogin(loginForm: NgForm): void {
        this.authService.login(
            loginForm.form.value.login_email,
            loginForm.form.value.login_email)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                });
    }

}
