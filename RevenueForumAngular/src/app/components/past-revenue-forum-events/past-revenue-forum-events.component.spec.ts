import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastRevenueForumEventsComponent } from './past-revenue-forum-events.component';

describe('PastRevenueForumEventsComponent', () => {
  let component: PastRevenueForumEventsComponent;
  let fixture: ComponentFixture<PastRevenueForumEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastRevenueForumEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastRevenueForumEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
