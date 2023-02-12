import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from 'src/app/core/services/login-info.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged = true;
  url = "https://www.flashscore.pl/";
  constructor(private loginInfoService: LoginInfoService, private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.iconRegistry
    .addSvgIcon('football', this.domSanitizer
    .bypassSecurityTrustResourceUrl('assets/football.svg'));
  }
  ngOnInit(): void {
    this.loginInfoService.currentLoggedMessage.subscribe(
      (msg) => (this.isLogged = msg)
    );
  }

  onLogout(){
    this.loginInfoService.updateLoggedMesage(false);
  }

  onMore(){
    window.open(this.url);
  }
}
