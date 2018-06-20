import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { RevenueForumEventService } from '../../services/revenue-forum-event.service';
import { RevenueForumEvent, Address, Material, Participant, Speaker } from '../../models/revenueForumEvent';
import { RevenueForumEventDetailsComponent } from '../revenue-forum-event-details/revenue-forum-event-details.component';

@Component({
  moduleId: module.id,
  selector: 'app-revenue-forum-add-participant',
  templateUrl: 'revenue-forum-add-participant.component.html',
  styleUrls: ['revenue-forum-add-participant.component.css']
})
export class RevenueForumAddParticipantComponent implements OnInit {

  constructor( private revenueForumEventService : RevenueForumEventService  ) { }

  ngOnInit() {
  }

}
