import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../core-module/artists.service';
import { AddDialog } from "./addsong-dialog/add-dialog";

@Component({
  selector: 'addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.scss'],
})
export class AddsongComponent implements OnInit {
  angForm: any;

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  event_name: any;
  joinevent_detail: any;
  joinevent: any;
  eventname_detail: any;
  public data: any;
  eventName: any;

  constructor(fb: FormBuilder,
    public user: ArtistsService,
    private form: FormBuilder,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
    this.createForm();
    this.data = user.getOption();
    // var test = this.activatedRoute.snapshot.params;
    // this.eventName = test.id;
    //console.log("checking", test.id);
  }

  createForm() {
    this.angForm = this.form.group({
      name: ['', Validators.required],
    });

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
  }

  openAddSongPage() {
    this.dialog.open(AddDialog)
  }

}

