import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TeamData } from '../models/team-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  getTeams() {
    var teams = this.http.get<TeamData[]>('api/standings');
    console.log(teams);
    return teams;
  }
}
