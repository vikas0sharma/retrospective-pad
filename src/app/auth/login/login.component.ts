import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {
    }

    onLogin(loginForm: NgForm): void {
        this.authService.login(
            loginForm.form.value.login_email,
            loginForm.form.value.login_email)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                });
    }

}
