import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginInfoService {
  private isLoggedMessage = new BehaviorSubject(false);
  currentLogedMessage = this.isLoggedMessage.asObservable();

  constructor() {}

  updateLoggedMesage(message: boolean) {
    this.isLoggedMessage.next(message);
  }
}
