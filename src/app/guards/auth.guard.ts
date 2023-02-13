import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router} from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth: AuthenticationService,
     private router: Router,
     private snackBar: MatSnackBar){}

  canActivate(): boolean{
    if(this.auth.isLoggedIn())
    {
      return true;
    }
    this.snackBar.open('Forbidden path. Please login first.', 'Close');
    this.router.navigate(['auth']);
    return false;
  }
}
