import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginUser } from '../models/login-user';
import { RegisterUser } from '../models/register-user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private lastLogin: string;
  private isLoggedMessage = new BehaviorSubject(false);
  currentLoggedMessage = this.isLoggedMessage.asObservable();

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  register(firstname: string, lastname: string, phonenumber: string, email: string, password: string) {
    const registerUser: RegisterUser = {
      firstname: firstname,
      lastname: lastname,
      phonenumber: phonenumber,
      email: email,
      password: password,
    };
    console.log(registerUser);

    return this.http.post<any>('db/account/register', registerUser, {
      observe: 'response',
    });
  }

  login(email: string, password: string) {
    const loginUser: LoginUser = {
      email: email,
      password: password,
    };
    console.log(loginUser);
    this.lastLogin = email;

    return this.http.post<any>('db/account/login', loginUser, {
      observe: 'response',
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedMessage.next(false);
    this.router.navigate(['auth']);
    this.snackBar.open('Logout succeded', 'Close');
  }

  storeToken(tokenValue: string) {
    this.isLoggedMessage.next(true);
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getLastLogin(): string {
    return this.lastLogin;
  }
}
