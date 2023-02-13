import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { TeamsService } from '../core/services/teams.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  userName:string;
  favouriteTeam:string;
  selected: Date | null;
  constructor(private teamsService: TeamsService, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.teamsService.getFavouriteTeam(this.authService.getLastLogin())
    .subscribe({
      next: (data) =>{
        console.log("fetched data"+data);
    this.favouriteTeam = data.name;
      }
    }
      );
}
}
