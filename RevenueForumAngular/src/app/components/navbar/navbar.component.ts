import { Component, OnInit } from '@angular/core';
import { RevenueForumEventService } from '../../services/revenue-forum-event.service';
import { RevenueForumEvent, Address, Material, Participant, Speaker } from '../../models/revenueForumEvent';
import { RevenueForumEventDetailsComponent } from '../revenue-forum-event-details/revenue-forum-event-details.component';

@Component({
  selector: 'app-navBar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  logoPath: string;
  pastRevenueForumEvents: RevenueForumEvent[];

  constructor(private revenueForumEventService: RevenueForumEventService) { }

  ngOnInit() {
  this.logoPath='assets/images/logo.png';


    this.revenueForumEventService.getPastRevenueForumEvents().subscribe(pastRevenueForumEvents => {
      //console.log('data'+ JSON.stringify(pastRevenueForumEvents));
      //console.log(pastRevenueForumEvents.length);
      this.pastRevenueForumEvents= pastRevenueForumEvents;

      /*for (var i=0;i<this.pastRevenueForumEvents.length;i++){
             console.log(pastRevenueForumEvents[i].address.country)
              console.log(JSON.stringify(pastRevenueForumEvents[i].address.linkToGoogleMap))
              }*/

  });


  }

}
