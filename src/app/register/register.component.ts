import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide = true;
  registerForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService,
  ) {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.tryRegister();
    } else {
      this.validateAllFormFields(this.registerForm);
      this.snackBar.open('Invalid form', 'Close');
    }
  }

  tryRegister() {
    this.authService
      .register(this.registerForm.value['firstname'],
       this.registerForm.value['lastname'],
       "123123123",
       this.registerForm.value['email'],
       this.registerForm.value['password'])
      .subscribe({
        next: (res) => {
          if (res.status == HttpStatusCode.Accepted) {
            console.log(res);
            this.registerForm.reset();
            this.snackBar.open('Registered successfully', 'Close');
          }
        },
        error: (err) => {
          this.snackBar.open('Register failed', 'Close');
        },
      });
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
}
