import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Fixture } from 'src/app/core/models/fixture';
import { TeamsService } from 'src/app/core/services/teams.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnChanges {
  public dataSource: MatTableDataSource<Fixture> = new MatTableDataSource();
  public displayedColumns: string[] = ['date', 'home', 'away'];
  @Input() favouriteTeam: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.teamsService.getLastFixtures(this.favouriteTeam, 3).subscribe({
      next: (data) => {
        console.log('fetched data' + data);
        this.dataSource = new MatTableDataSource(data);
      },
    });
  }

  constructor(private teamsService: TeamsService, public datePipe: DatePipe) {}
}
