import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeasonsService {
  constructor(private http: HttpClient) {}

  getSeasons() {
    var seasons = this.http.get<string[]>('api/seasons');
    console.log(seasons);
    return seasons;
  }
}
