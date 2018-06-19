import { TestBed, inject } from '@angular/core/testing';


import { RevenueForumEventService } from './revenue-forum-event.service';

describe('RevenueForumEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueForumEventService]
    });
  });

  it('should be created', inject([RevenueForumEventService], (service: RevenueForumEventService) => {
    expect(service).toBeTruthy();
  }));
});
