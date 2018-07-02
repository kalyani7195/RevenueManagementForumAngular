import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { RevenueForumEventsListComponent } from '../components/revenue-forum-events-list/revenue-forum-events-list.component';
//import { RevenueForumAddParticipantComponent } from '../components/revenue-forum-add-participant/revenue-forum-add-participant.component';
import { UpcomingRevenueForumEventsComponent } from '../components/upcoming-revenue-forum-events/upcoming-revenue-forum-events.component';
import { PastRevenueForumEventsComponent } from '../components/past-revenue-forum-events/past-revenue-forum-events.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
//import { ContactUsComponent } from '../components/contact-us/contact-us.component';
//import { CreateRevenueForumEventComponent } from '../components/create-revenue-forum-event/create-revenue-forum-event.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';

const routes: Routes = [
  { path: '', redirectTo: 'aboutUs', pathMatch: 'full' },
  { path: 'aboutUs' , component: AboutUsComponent},
  { path : 'testimonials' ,component: TestimonialsComponent },

  { path: 'revenueForumEvents',
    children: [
      { path : '', redirectTo: 'revenueForumEvents' ,pathMatch: 'full'},
      { path : 'upcoming', component: UpcomingRevenueForumEventsComponent  },
      { path : 'past', component: PastRevenueForumEventsComponent },
      ]

  },
//  { path: 'createEvent' , component: CreateRevenueForumEventComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }



