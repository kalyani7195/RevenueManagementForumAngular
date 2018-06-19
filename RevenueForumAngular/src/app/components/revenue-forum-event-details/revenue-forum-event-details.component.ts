import { Component, OnInit, Input } from '@angular/core';
import { RevenueForumEventService } from '../../services/revenue-forum-event.service';
import { RevenueForumEvent, Address, Material, Participant, Speaker } from '../../models/revenueForumEvent';
import { RevenueForumEventsListComponent } from '../revenue-forum-events-list/revenue-forum-events-list.component';

@Component({
  selector: 'app-revenue-forum-event-details',
  templateUrl: './revenue-forum-event-details.component.html',
  styleUrls: ['./revenue-forum-event-details.component.css']
})
export class RevenueForumEventDetailsComponent implements OnInit {
  @Input()
  revenueForumEvent: RevenueForumEvent;

  constructor(private revenueForumEventService: RevenueForumEventService, private revenueForumEventsListComponent: RevenueForumEventsListComponent ) { }

  ngOnInit() {
  console.log('in details');
  console.log(this.revenueForumEvent.title);
  }
}


