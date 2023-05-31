import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthenticationService } from 'src/app/user-auth/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged = true;
  url = "https://www.flashscore.pl/";
  constructor(private auth: AuthenticationService, private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.iconRegistry
      .addSvgIcon('football', this.domSanitizer
        .bypassSecurityTrustResourceUrl('assets/football.svg'));
  }

  ngOnInit(): void {
    this.auth.currentLoggedMessage.subscribe(
      (msg) => (this.isLogged = msg)
    );
  }

  onLogout() {
    this.auth.logout();
  }

  onMore() {
    window.open(this.url);
  }
}
