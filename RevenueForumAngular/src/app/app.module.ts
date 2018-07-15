import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import  { RevenueForumEventService } from  './services/revenue-forum-event.service';
import { UpcomingRevenueForumEventsComponent } from './components/upcoming-revenue-forum-events/upcoming-revenue-forum-events.component';
import { PastRevenueForumEventsComponent } from './components/past-revenue-forum-events/past-revenue-forum-events.component';
import { NavBarComponent } from './components/navbar/navbar.component';
//import { CreateRevenueForumEventComponent } from './components/create-revenue-forum-event/create-revenue-forum-event.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

 import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    UpcomingRevenueForumEventsComponent,
    PastRevenueForumEventsComponent,
  //  CreateRevenueForumEventComponent,
    AboutUsComponent,
    NavBarComponent,
    TestimonialsComponent,
    CreateEventComponent


  ],
  imports: [
    MDBBootstrapModule.forRoot(),
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
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
