import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueForumEventsListComponent } from './revenue-forum-events-list.component';

describe('RevenueForumEventsListComponent', () => {
  let component: RevenueForumEventsListComponent;
  let fixture: ComponentFixture<RevenueForumEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueForumEventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueForumEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
