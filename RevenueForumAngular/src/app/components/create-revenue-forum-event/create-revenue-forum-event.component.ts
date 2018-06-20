import { Component, OnInit, EventEmitter, Inject, } from '@angular/core';
import { RevenueForumEventService } from '../../services/revenue-forum-event.service';
import { RevenueForumEvent, Address, Material, Participant, Speaker } from '../../models/revenueForumEvent';
import { RevenueForumEventDetailsComponent } from '../revenue-forum-event-details/revenue-forum-event-details.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-create-revenue-forum-event',
  templateUrl: 'create-revenue-forum-event.component.html',
  styleUrls: ['create-revenue-forum-event.component.css'],
})
export class CreateRevenueForumEventComponent implements OnInit {

  /*createEventForm: FormGroup;*/


  constructor( /*formBuilder: FormBuilder*/ ) {
  /*this.formBuilder=formBuilder;*/

  }

  ngOnInit() {

    /*this.createEventForm = this.formBuilder.group({
          title: ['', [Validators.required]],
          description: ['', [Validators.required]],

          address: this.formBuilder.group({
          details: ['',[Validators.required]],
          city : ['',[Validators.required]],
          pinCode: ['',[Validators.required]],
          state: ['', [Validators.required]],
          country: ['', [Validators. required]],
          linkToGoogleMap: ['', [Validators.required]],
          }),

           speakers:this.formBuilder.array([*/

           /*name: ['', [Validators.required]],
           position: ['', [Validators.required]],
           organization: ['', [Validators.required]],
           linkToLinkedInProfile: ['', [Validators.required]],*/

           /*this.onAddSpeaker(),

          ])
          });*/
  }

  /*onAddSpeaker(): FormGroup{
    return this.formBuilder.group({
    name: ['', [Validators.required]],
    position: ['', [Validators.required]],
    organization: ['', [Validators.required]],
    linkToLinkedInProfile: ['', [Validators.required]],
  });

  }*/



 /* onRemoveSpeaker(index){
  this.createEventForm.controls['speakers'].removeAt(index);
  }

  addEvent(){
  console.log(this.createEventForm.value);

  }*/

  }

