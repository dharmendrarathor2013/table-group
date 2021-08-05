import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { DashboardDialogComponent } from '../dashboard/dashboard-dialog/dashboard-dialog.component';
// import { AddeventsongDialogComponent } from "../dashboard/addeventsong-dialog/addeventsong-dialog.component";
import { ArtistsService } from "../core-module/artists.service";
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Router } from "@angular/router";
import { DashboardDialogComponent } from './dashboard-dialog/dashboard-dialog.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  eventname_detail: any;
  event_name: any;
  joinevent_detail:any;
  joinevent: any;
  event_detail: any;
  event_data: any;
  
   document: any
  title = 'tabe-group';
  constructor(private router: Router, @Inject (DOCUMENT) private _document: Document, fb: FormBuilder, public user: ArtistsService,
    private dialog: MatDialog
  ) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
   this.document = _document;

   
  }
  // @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  showSubmenu1: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  panelOpenState = false;

  song_data: any;
  song_detail: any;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
 openAddEventPage() {
   
   this.dialog.open(DashboardDialogComponent,{
     width: '500px',
      height:'500px'
    });
  }
  openAddEventSongPage(temp: any) {

   // this.dialog.open(AddeventsongDialogComponent, {
    //   width: '400px',
    //   height: '350px',
    //   backdropClass: 'custom-dialog-backdrop-class',
    //   panelClass: 'custom-dialog-panel-class',
    //   data: { event: temp }
    // });
  }

  ngOnInit(): void {

    // Fetching Event Name from database 
    let eventnametemp = localStorage.getItem("EventName");
    this.eventname_detail = eventnametemp;
    this.event_name = JSON.parse(this.eventname_detail);

    // Fetch Event details from database 
    let ejtemp = localStorage.getItem("EventDetail");
    this.joinevent_detail = ejtemp;
    this.joinevent = JSON.parse(this.joinevent_detail);

    // Fetching Song details from database 
    let etemp = localStorage.getItem("Event");
    this.event_detail = etemp;
    this.event_data = JSON.parse(this.event_detail);
  }

  displayEventDetail(event_name: any) {
    // this.router.navigateByUrl('./addsong');
    this.user.eventDetail(event_name);

    //this.document.defaultView.location.reload();
  }
}

