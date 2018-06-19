import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueForumAddParticipantComponent } from '.components/revenue-forum-add-participant.component';

describe('RevenueForumAddParticipantComponent', () => {
  let component: RevenueForumAddParticipantComponent;
  let fixture: ComponentFixture<RevenueForumAddParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueForumAddParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueForumAddParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
