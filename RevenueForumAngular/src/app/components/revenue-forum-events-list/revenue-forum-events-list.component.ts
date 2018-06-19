import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RevenueForumEventService } from '../../services/revenue-forum-event.service';
import { RevenueForumEvent, Address, Material, Participant, Speaker } from '../../models/revenueForumEvent';
import { RevenueForumEventDetailsComponent } from '../revenue-forum-event-details/revenue-forum-event-details.component';

@Component({
  selector: 'app-revenue-forum-events-list',
  templateUrl: './revenue-forum-events-list.component.html',
  styleUrls: ['./revenue-forum-events-list.component.css']
})
export class RevenueForumEventsListComponent implements OnInit {


  revenueForumEvents: RevenueForumEvent[];
  constructor( private revenueForumEventService : RevenueForumEventService ) { }

  ngOnInit() {
    this.revenueForumEventService.getAllRevenueForumEvents().subscribe((revenueForumEvents:RevenueForumEvent[]) => this.revenueForumEvents=revenueForumEvents);

  }

  /*reloadData() {
    this.revenueForumEvents = this.revenueForumEventService.getAllRevenueForumEvents();
    console.log(this.revenueForumEvents);
  }*/

}


