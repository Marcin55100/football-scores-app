import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs';
import { TeamData } from '../core/models/team-data';
import { TeamsService } from '../core/services/teams.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
})
export class MainTableComponent implements OnInit {
  public displayedColumns: string[] = ['rank', 'name', 'points'];
  public dataSource: MatTableDataSource<TeamData> = new MatTableDataSource(
    FAKE_TEAMS_DATA
  );

  constructor(private teamsService: TeamsService) {
    console.log('main-table created');
    console.log(this.dataSource);
  }
  ngOnInit(): void {
    this.teamsService
      .getTeams()
      //.pipe(take(1))
      .subscribe((data) => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
      });
  }
}

const FAKE_TEAMS_DATA: TeamData[] = [
  { name: 'Arsenal', rank: 1, points: 50 },
  { name: 'Chelsea FC', rank: 2, points: 45 },
  { name: 'Manchester United', rank: 3, points: 44 },
  { name: 'Manchester City', rank: 4, points: 40 },
  { name: 'Tottenham', rank: 5, points: 2 },
];
