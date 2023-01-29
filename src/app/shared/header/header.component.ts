import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from 'src/app/core/services/login-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDisabled = true;

  constructor(private loginInfoService: LoginInfoService) {}
  ngOnInit(): void {
    this.loginInfoService.currentLogedMessage.subscribe(
      (msg) => (this.isDisabled = !msg)
    );
  }
}
