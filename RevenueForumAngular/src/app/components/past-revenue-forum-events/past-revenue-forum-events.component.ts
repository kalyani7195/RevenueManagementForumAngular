import { Component, OnInit } from '@angular/core';
import { RevenueForumEventService } from '../../services/revenue-forum-event.service';
import { RevenueForumEvent, Address, Material, Participant, Speaker } from '../../models/revenueForumEvent';

@Component({
  moduleId: module.id,
  selector: 'app-past-revenue-forum-events',
  templateUrl: 'past-revenue-forum-events.component.html',
  styleUrls: ['past-revenue-forum-events.component.scss']
})
export class PastRevenueForumEventsComponent implements OnInit {
  private baseUrl = 'http://www.rmforum.co.in:8080/revenueForumEvents';
  //private baseUrl = 'http://localhost:8080/revenueForumEvents';

  pastRevenueForumEvents: RevenueForumEvent[];
  showExtended:boolean =false;
  count: number;
  speakerImageUrl : string;
  constructor( private revenueForumEventService: RevenueForumEventService ) {}

  ngOnInit() {
    this.revenueForumEventService.getPastRevenueForumEvents().subscribe(pastRevenueForumEvents => {
      this.pastRevenueForumEvents= pastRevenueForumEvents;
  });
  }

  getImageUrl(pathToImage : string){
  this.speakerImageUrl=`${this.baseUrl}/speaker/${pathToImage}`;
  return this.speakerImageUrl;
  };
 }

