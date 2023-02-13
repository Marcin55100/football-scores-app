import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  loginForm!: FormGroup;
  isLogged = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.tryLogin();
    } else {
      this.validateAllFormFields(this.loginForm);
      this.snackBar.open('Invalid form', 'Close');
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  tryLogin() {
    this.authService
      .login(this.loginForm.value['email'], this.loginForm.value['password'])
      .subscribe({
        next: (res) => {
          if (res.status == HttpStatusCode.Accepted) {
            console.log(res);
            this.loginForm.reset();
            this.authService.storeToken(res.body.token);
            this.snackBar.open('Logged successfully', 'Close');
            this.isLogged = true;
            this.router.navigate(['dashboard']);
          }
        },
        error: (err) => {
          this.snackBar.open('Login failed', 'Close');
        },
      });
  }
}
