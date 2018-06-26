import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import  { RevenueForumEventService } from  './services/revenue-forum-event.service';
import { RevenueForumEventsListComponent } from './components/revenue-forum-events-list/revenue-forum-events-list.component';
import { RevenueForumEventDetailsComponent } from './components/revenue-forum-event-details/revenue-forum-event-details.component';
import { RevenueForumAddParticipantComponent } from './components/revenue-forum-add-participant/revenue-forum-add-participant.component';
import { UpcomingRevenueForumEventsComponent } from './components/upcoming-revenue-forum-events/upcoming-revenue-forum-events.component';
import { PastRevenueForumEventsComponent } from './components/past-revenue-forum-events/past-revenue-forum-events.component';
import { NavBarComponent } from './components/navbar/navbar.component';
//import { CreateRevenueForumEventComponent } from './components/create-revenue-forum-event/create-revenue-forum-event.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
//import { ContactUsComponent } from './components/contact-us/contact-us.component';


 import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RevenueForumEventsListComponent,
    RevenueForumEventDetailsComponent,
    RevenueForumAddParticipantComponent,
    UpcomingRevenueForumEventsComponent,
    PastRevenueForumEventsComponent,
  //  CreateRevenueForumEventComponent,
    AboutUsComponent,
  //  ContactUsComponent,
    NavBarComponent,
    TestimonialsComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ RevenueForumEventService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
