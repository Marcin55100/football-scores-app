import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from '../../core/services/teams.service';
import { AuthenticationService } from '../../user-auth/services/authentication.service';

@Component({
  selector: 'app-match-calendar',
  templateUrl: './match-calendar.component.html',
  styleUrls: ['./match-calendar.component.scss'],
})
export class MatchCalendarComponent {
  selected: Date | null;
  scheduledMatch: string;
  @Input() favouriteTeam: string;

  dateChanged(date: any): void {
    console.log('[Calendar] favourite team data:' + this.favouriteTeam);
    console.log(date);
    this.teamsService.getFixture(this.favouriteTeam, this.selected).subscribe({
      next: (fix) => {
        console.log(
          'match for ' + this.favouriteTeam + 'is with ' + fix.opponent
        );
        if (fix.isHome) {
          this.scheduledMatch = this.favouriteTeam + ' - ' + fix.opponent;
        } else {
          this.scheduledMatch = fix.opponent + ' - ' + this.favouriteTeam;
        }
      },
      error: (err) => {
        console.log('error while fetching fixtues');
        this.scheduledMatch = 'No matches';
      },
    });
  }

  constructor(
    private teamsService: TeamsService,
    private authService: AuthenticationService
  ) {}
}
