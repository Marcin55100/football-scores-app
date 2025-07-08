import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs';
import { TeamData } from '../core/models/team-data';
import { TeamsService } from '../core/services/teams.service';
import { MatSelectChange } from '@angular/material/select';
import { SeasonsService } from 'src/app/core/services/seasons.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
})
export class MainTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  seasons: string[] = [];
  selectedSeason: string = '2024';

  public displayedColumns: string[] = ['rank', 'name', 'points'];
  public dataSource: MatTableDataSource<TeamData> = new MatTableDataSource(
    FAKE_TEAMS_DATA
  );
  clickedRows = new Set<TeamData>();

  constructor(
    private teamsService: TeamsService,
    private seasonsService: SeasonsService
  ) {
    console.log('main-table created');
    console.log(this.dataSource);
  }

  ngOnInit(): void {
    this.updateTableData();

    this.seasonsService.getSeasons().subscribe({
      next: (data) => {
        console.log('seasons fetched: ' + data);
        this.seasons = data;
      },
    });
  }

  updateTableData() {
    this.teamsService
      .getTeams(this.selectedSeason)
      //.pipe(take(1))
      .subscribe((data) => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
  }

  onSelectedSeasonChanged($event: MatSelectChange) {
    this.selectedSeason = $event.value;
    this.updateTableData();
  }
}

const FAKE_TEAMS_DATA: TeamData[] = [
  { name: 'Arsenal FAKE', rank: 1, points: 50 },
  { name: 'Chelsea FC', rank: 2, points: 45 },
  { name: 'Manchester United', rank: 3, points: 44 },
  { name: 'Manchester City', rank: 4, points: 40 },
  { name: 'Tottenham', rank: 5, points: 2 },
];
