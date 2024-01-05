import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchCalendarComponent } from './match-calendar/match-calendar.component';
import { CardComponent } from './card/card.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { PlayersComponent } from './players/players.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ScheduleComponent } from './schedule/schedule.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    DashboardComponent,
    MatchCalendarComponent,
    CardComponent,
    PlayersComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatGridListModule,
    LayoutModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class UserDashboardModule { }
