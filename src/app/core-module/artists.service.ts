import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  event_name: any
  eventname_detail: any;
  private data: any = {};

  constructor(private router: Router) { }

  setOption(option: any, value: any) {
    this.data[option] = value;
  }

  getOption() {
    return this.data;
  }

  eventDetail(temp: any) {
    this.event_name = temp;
    //console.log('Inside Service', this.event_name);

    let songs = [];

    if (localStorage.getItem('EventName')) {
      songs = JSON.parse(localStorage.getItem('EventName') || "{}");
      songs = [temp, ...songs];
    }
    else {
      songs = [temp];
    }

    localStorage.setItem('EventName', JSON.stringify(temp));

    // Fetching Event Name from database 
    let eventnametemp = localStorage.getItem("EventName");
    this.eventname_detail = eventnametemp;
    this.event_name = JSON.parse(this.eventname_detail);

    window.location.reload();
    // this.router.navigateByUrl('/addsong');
    this.getEventName();
  }
  getEventName() {
    return this.event_name;
    // console.log('hyvu',this.event_name);
  }
}
