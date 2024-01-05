import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TeamData } from '../models/team-data';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { Fixture } from '../models/fixture';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getTeams() {
    var teams = this.http.get<TeamData[]>('api/standings');
    console.log(teams);
    return teams;
  }

  getFixture(team: string, date: Date) {
    let formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    let match = this.http.get<Fixture>(
      'api/fixtures?teamName=' + team + '&dateTime=' + formattedDate
    );
    return match;
  }

  getLastFixtures(team: string, numberOfMatches: number) {
    let matches = this.http.get<Fixture[]>(
      'api/fixtures/last?teamName=' +
        team +
        '&numberOfMatches=' +
        numberOfMatches
    );
    return matches;
  }

  getFavouriteTeam(email: string) {
    var team = this.http.get<any>('db/teams?email=' + email);
    console.log('your team is' + team);
    return team;
  }
}
