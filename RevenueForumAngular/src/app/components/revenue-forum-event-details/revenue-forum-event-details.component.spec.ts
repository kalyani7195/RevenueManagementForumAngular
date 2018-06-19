import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueForumEventDetailsComponent } from './revenue-forum-event-details.component';

describe('RevenueForumEventDetailsComponent', () => {
  let component: RevenueForumEventDetailsComponent;
  let fixture: ComponentFixture<RevenueForumEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueForumEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueForumEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
