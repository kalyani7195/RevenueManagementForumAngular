import { Component, OnInit } from '@angular/core';
import { RevenueForumEventService } from '../../services/revenue-forum-event.service';
import { RevenueForumEvent, Address, Material, Participant, Speaker } from '../../models/revenueForumEvent';
import { RevenueForumEventDetailsComponent } from '../revenue-forum-event-details/revenue-forum-event-details.component';

@Component({
  moduleId: module.id,
  selector: 'app-past-revenue-forum-events',
  templateUrl: 'past-revenue-forum-events.component.html',
  styleUrls: ['past-revenue-forum-events.component.css']
})
export class PastRevenueForumEventsComponent implements OnInit {
  private baseUrl = 'http://www.rmforum.co.in:8080/revenueForumEvents';
  pastRevenueForumEvents: RevenueForumEvent[];
  showExtended:boolean =false;
  count: number;
  speakerImageUrl : string;
  constructor( private revenueForumEventService: RevenueForumEventService ) {}


  ngOnInit() {
    /*console.log('In past-revenue-forum-events');
    this.revenueForumEventService.getPastRevenueForumEvents().subscribe((pastRevenueForumEvents: RevenueForumEvent[]) => this.pastRevenueForumEvents=pastRevenueForumEvents );*/


    this.revenueForumEventService.getPastRevenueForumEvents().subscribe(pastRevenueForumEvents => {
      console.log('data'+ JSON.stringify(pastRevenueForumEvents));
      console.log(pastRevenueForumEvents.length);
      this.pastRevenueForumEvents= pastRevenueForumEvents;



      for (var i=0;i<this.pastRevenueForumEvents.length;i++){
             console.log(pastRevenueForumEvents[i].address.country)
              console.log(JSON.stringify(pastRevenueForumEvents[i].address.linkToGoogleMap))
              }

  });



  }


  getImageUrl(pathToImage : string){
  /*console.log('call to service');
  this.revenueForumEventService.getSpeakerImage(pathToImage).subscribe(image =>{
  console.log(image);
  this.speakerImage=image;
  this.speakerImage= 'data:image/jpeg;base64,'+image.content;
  } )*/

  console.log(`${this.baseUrl}/speaker/${pathToImage}`);
  this.speakerImageUrl=`${this.baseUrl}/speaker/${pathToImage}`;

  return this.speakerImageUrl;


  };








  toggle(pastRevenueForumEvent: RevenueForumEvent){
    pastRevenueForumEvent.showExtended=!pastRevenueForumEvent.showExtended;

    }

    getLength():number{
    var data=this.pastRevenueForumEvents;
    var count=Object.keys(data).length;
    console.log(count);
    this.count=count;
    return count;


    }






  }

