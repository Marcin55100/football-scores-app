import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerDto } from '../models/dtos/player-dto';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  getAll(team: string) {
    var players = this.http.get<PlayerDto[]>('api/players?teamName=' + team);
    console.log(players);
    return players;
  }

  constructor(private http: HttpClient) { }
}
