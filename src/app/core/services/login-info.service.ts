import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginInfoService {
  private isLoggedMessage = new BehaviorSubject(false);
  private userNameMessage = new BehaviorSubject('');

  currentLoggedMessage = this.isLoggedMessage.asObservable();
  currentUserNameMessage = this.userNameMessage.asObservable();

  constructor() {}

  updateLoggedMesage(message: boolean, userName: string = "") {
    this.isLoggedMessage.next(message);
    this.userNameMessage.next(userName);
  }
}
