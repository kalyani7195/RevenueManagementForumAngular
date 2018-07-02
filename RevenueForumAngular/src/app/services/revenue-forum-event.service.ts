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


  private urlSuffix='revenueForumEvents';
  private baseUrl = 'http://www.rmforum.co.in:8080';


  constructor(public http: Http) {
   }

  getAllRevenueForumEvents(): Observable<RevenueForumEvent[]>{
   const headers= new Headers();
        //headers.append('Access-Control-Allow-Origin',`${this.baseUrl}`);
        headers.append('Access-Control-Allow-Origin','*');
        headers.append('Access-Control-Allow-Methods','POST, PUT, GET, OPTIONS');
        const options = new RequestOptions({headers});
    return this.http.get(`${this.baseUrl}`,options).map((response:Response) => response.json());

  }

  getRevenueForumEvent(eventId: string):Observable<RevenueForumEvent>{
   const headers= new Headers();
        headers.append('Access-Control-Allow-Origin','*');
        headers.append('Access-Control-Allow-Methods','POST, PUT, GET, OPTIONS');
        const options = new RequestOptions({headers});
   return this.http.get(`${this.baseUrl}/${this.urlSuffix}/${eventId}`,options).map((response: Response) => response.json());
    }

  getUpcomingRevenueForumEvents(): Observable<RevenueForumEvent[]>{
      const headers= new Headers();
      headers.append('Access-Control-Allow-Origin','*');
      headers.append('Access-Control-Allow-Methods','POST, PUT, GET, OPTIONS');
      console.log(`${this.baseUrl}/${this.urlSuffix}/upcoming`);
      const options = new RequestOptions({headers});
    return this.http.get(`${this.baseUrl}/${this.urlSuffix}/upcoming`,options).map((response: Response) => response.json());
  }

   getPastRevenueForumEvents(): Observable<RevenueForumEvent[]>{
    const headers= new Headers();
    headers.append('Access-Control-Allow-Origin','*');
     headers.append('Access-Control-Allow-Methods','POST, PUT, GET, OPTIONS');
    console.log(`${this.baseUrl}/${this.urlSuffix}/past`);
     const options = new RequestOptions({headers});
   return this.http.get(`${this.baseUrl}/${this.urlSuffix}/past`, options).map((response: Response) => response.json());
   }

   createRevenueForumEvent(revenueForumEvent: RevenueForumEvent){
   return this.http.post(`${this.baseUrl}/${this.urlSuffix}`,revenueForumEvent);
   }

   updateRevenueForumEventParticipants(eventId: string,value:any): Observable<any>{
   const headers= new Headers();
   headers.append('Access-Control-Allow-Origin','*');
   headers.append('Access-Control-Allow-Methods','POST, PUT, GET, OPTIONS');
   const options = new RequestOptions({headers});
   return this.http.put(`${this.baseUrl}/${this.urlSuffix}/addParticipant/${eventId}`,value,options);
   }

   deleteRevenueForumEvent(eventId: string): Observable<any>{
   return this.http.delete(`${this.baseUrl}/${this.urlSuffix}/${this.urlSuffix}/${eventId}`/*,{responseType: 'text'}*/);
   }


   getSpeakerImage(pathToImage):Observable<any>{
         console.log('call!!!');
         const headers= new Headers();
         headers.append('Access-Control-Allow-Origin','*');
         headers.append('Access-Control-Allow-Methods','POST, PUT, GET, OPTIONS');
          const options = new RequestOptions({headers});
         console.log(`${this.baseUrl}/speaker/${pathToImage}`);
         return this.http.get(`${this.baseUrl}/${this.urlSuffix}/speaker/${pathToImage}`,options).map((response: Response) => response.json());
   }
  }



