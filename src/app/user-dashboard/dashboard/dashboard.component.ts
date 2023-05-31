import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthenticationService } from '../../user-auth/services/authentication.service';
import { TeamsService } from '../../core/services/teams.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string;
  favouriteTeam: string;

  ngOnInit(): void {
    this.teamsService.getFavouriteTeam(this.authService.getLastLogin())
      .subscribe({
        next: (data) => {
          console.log("fetched data" + data);
          this.favouriteTeam = data.name;
        }
      });
  }

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 2,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          calendar: { cols: 1, rows: 2 },
          table: { cols: 2, rows: 2 }
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        calendar: { cols: 1, rows: 2 },
        table: { cols: 2, rows: 2 }
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private teamsService: TeamsService, private authService: AuthenticationService) { }
}
