import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRevenueForumEventComponent } from './create-revenue-forum-event.component';

describe('CreateRevenueForumEventComponent', () => {
  let component: CreateRevenueForumEventComponent;
  let fixture: ComponentFixture<CreateRevenueForumEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRevenueForumEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRevenueForumEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
