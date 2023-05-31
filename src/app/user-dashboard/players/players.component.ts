import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs';
import { PlayerDto } from 'src/app/core/models/dtos/player-dto';
import { PlayersService } from 'src/app/core/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  public dataSource: MatTableDataSource<PlayerDto> = new MatTableDataSource();
  public displayedColumns: string[] = ['name', 'age', 'position', 'photo'];

  @Input() favouriteTeam: string;
  players: PlayerDto[];
  isDataAvailable: boolean = false;

  ngOnInit(): void {
    this.playersService
      .getAll("Arsenal")//TODO: this.favouriteTeam")
      .pipe(take(1))
      .subscribe((players) => {
        this.players = players;
        console.log(players);
        this.isDataAvailable = true;
        this.dataSource = new MatTableDataSource(players);
      });
  }

  constructor(private playersService: PlayersService) { }
}
