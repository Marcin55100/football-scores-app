import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { TeamsService } from '../core/services/teams.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string;
  favouriteTeam: string;
  scheduledMatch: string;
  selected: Date | null;
  constructor(private teamsService: TeamsService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.teamsService.getFavouriteTeam(this.authService.getLastLogin())
      .subscribe({
        next: (data) => {
          console.log("fetched data" + data);
          this.favouriteTeam = data.name;
        }
      });
  }

  dateChanged(date: any): void {
    console.log(date);
    this.teamsService.getFixture(this.favouriteTeam, this.selected)
      // .pipe(
      //   catchError(() => {
      //     return throwError (() => new Error('error while fetching fixtues'));
      //   })
      // )
      .subscribe({
        next: (fix) => {
          console.log('match for ' + this.favouriteTeam + 'is with ' + fix.opponent);
          if (fix.isHome) {
            this.scheduledMatch = this.favouriteTeam + ' - ' + fix.opponent;
          }
          else {
            this.scheduledMatch = fix.opponent + ' - ' + this.favouriteTeam;
          }
        },
        error: (err) => {
          console.log('error while fetching fixtues');
          this.scheduledMatch = '';
        }
      });
  }
}