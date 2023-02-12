import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from '../core/services/login-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  userName:string;
  selected: Date | null;
  constructor(private loginInfoService: LoginInfoService) {}

  ngOnInit(): void {
    this.loginInfoService.currentUserNameMessage.subscribe(
      (msg) => (this.userName = msg)
    );
  }

}
