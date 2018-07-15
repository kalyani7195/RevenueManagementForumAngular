import { Component, OnInit } from '@angular/core';
import { RevenueForumEventService } from '../../services/revenue-forum-event.service';
import { RevenueForumEvent, Address, Material, Participant, Speaker } from '../../models/revenueForumEvent';
//import { RevenueForumEventDetailsComponent } from '../revenue-forum-event-details/revenue-forum-event-details.component';

@Component({
  moduleId: module.id,
  selector: 'app-upcoming-revenue-forum-events',
  templateUrl: 'upcoming-revenue-forum-events.component.html',
  styleUrls: ['upcoming-revenue-forum-events.component.scss']
})
export class UpcomingRevenueForumEventsComponent implements OnInit {
  upcomingRevenueForumEvents:RevenueForumEvent[];
  participant: Participant={
  name:'',
  emailId:'',
  organization:'',
  };

  constructor( private revenueForumEventService: RevenueForumEventService) { }

  ngOnInit() {
  this.revenueForumEventService.getUpcomingRevenueForumEvents().subscribe(upcomingRevenueForumEvents => {
  console.log('data'+ JSON.stringify(upcomingRevenueForumEvents));
  this.upcomingRevenueForumEvents= upcomingRevenueForumEvents;
  });
 }

  registerParticipant(eventId,participant){
    this.revenueForumEventService.updateRevenueForumEventParticipants(eventId, participant)
    .subscribe(data => {console.log(data);},
    error => console.log(error));
    alert('Thank you for registration! Please check your Email for more details.')
 }
}
