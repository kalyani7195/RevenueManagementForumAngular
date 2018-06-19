import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RevenueForumEvent } from '../models/revenueForumEvent';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class RevenueForumEventService {

  /*172.26.121.224*/
  private urlSuffix='revenueForumEvents';
  private baseUrl = 'http://localhost:8080';


  constructor(public http: Http) {
   }

  getAllRevenueForumEvents(): Observable<RevenueForumEvent[]>{
    return this.http.get(`${this.baseUrl}`).map((response:Response) => response.json());

  }

  getRevenueForumEvent(eventId: string):Observable<RevenueForumEvent>{
   return this.http.get(`${this.baseUrl}/${this.urlSuffix}/${eventId}`).map((response: Response) => response.json());
    }

  getUpcomingRevenueForumEvents(): Observable<RevenueForumEvent[]>{
    return this.http.get(`${this.baseUrl}/${this.urlSuffix}/upcoming`).map((response: Response) => response.json());
  }

   getPastRevenueForumEvents(): Observable<RevenueForumEvent[]>{
   return this.http.get(`${this.baseUrl}/${this.urlSuffix}/past`).map((response: Response) => response.json());
   }

   createRevenueForumEvent(revenueForumEvent: RevenueForumEvent){
   return this.http.post(`${this.baseUrl}/${this.urlSuffix}`,revenueForumEvent);
   }

   updateRevenueForumEventParticipants(eventId: string,value:any): Observable<any>{
   console.log('updateRevenueForumEventParticipants');

   const headers= new Headers();

   headers.append('Access-Control-Allow-Origin',`${this.baseUrl}`);

   headers.append('Access-Control-Allow-Methods','POST, PUT, GET, OPTIONS');
   const options = new RequestOptions({headers});

   console.log(value);
   console.log(`${this.baseUrl}/${this.urlSuffix}/addParticipant/${eventId}`);
   return this.http.put(`${this.baseUrl}/${this.urlSuffix}/addParticipant/${eventId}`,value,options);
   }

   deleteRevenueForumEvent(eventId: string): Observable<any>{
   return this.http.delete(`${this.baseUrl}/${this.urlSuffix}/${this.urlSuffix}/${eventId}`/*,{responseType: 'text'}*/);
   }


   getSpeakerImage(pathToImage):Observable<any>{
   console.log('call!!!');
   console.log(`${this.baseUrl}/speaker/${pathToImage}`);
   return this.http.get(`${this.baseUrl}/${this.urlSuffix}/speaker/${pathToImage}`).map((response: Response) => response.json());
   }
  }



