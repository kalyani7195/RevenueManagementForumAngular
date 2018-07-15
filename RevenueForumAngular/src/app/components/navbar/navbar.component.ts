import { Component, OnInit } from '@angular/core';
import { RevenueForumEventService } from '../../services/revenue-forum-event.service';
import { RevenueForumEvent, Address, Material, Participant, Speaker } from '../../models/revenueForumEvent';

@Component({
  selector: 'app-navBar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent implements OnInit {
  logoPath: string;
  pastRevenueForumEvents: RevenueForumEvent[];
  constructor(private revenueForumEventService: RevenueForumEventService) { }

  ngOnInit() {
  this.logoPath='assets/images/Site_Logo.png';
  this.revenueForumEventService.getPastRevenueForumEvents().subscribe(pastRevenueForumEvents => {
  this.pastRevenueForumEvents= pastRevenueForumEvents;
  });
  }
}
