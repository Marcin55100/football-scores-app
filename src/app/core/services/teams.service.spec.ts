/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeamsService } from './teams.service';

describe('Service: Teams', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsService],
    });
  });

  it('should ...', inject([TeamsService], (service: TeamsService) => {
    expect(service).toBeTruthy();
  }));
});
