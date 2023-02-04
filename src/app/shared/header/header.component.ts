import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from 'src/app/core/services/login-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged = true;

  constructor(private loginInfoService: LoginInfoService) {}
  ngOnInit(): void {
    this.loginInfoService.currentLogedMessage.subscribe(
      (msg) => (this.isLogged = msg)
    );
  }

  onLogout(){
    this.loginInfoService.updateLoggedMesage(false);
  }
}
