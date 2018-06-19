import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingRevenueForumEventsComponent } from './upcoming-revenue-forum-events.component';

describe('UpcomingRevenueForumEventsComponent', () => {
  let component: UpcomingRevenueForumEventsComponent;
  let fixture: ComponentFixture<UpcomingRevenueForumEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingRevenueForumEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingRevenueForumEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
