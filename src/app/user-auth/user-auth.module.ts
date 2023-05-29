import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterComponent, LoginComponent, AuthenticationComponent],
  imports: [
    ReactiveFormsModule,
    //BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    //MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    //MatDatepickerModule,
    //MatNativeDateModule,
    //LayoutModule,
  ],
  providers: [
    DatePipe,
  ],
})
export class UserAuthModule { }
