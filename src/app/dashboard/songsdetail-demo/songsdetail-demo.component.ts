import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'songsdetail-demo',
  templateUrl: './songsdetail-demo.component.html',
  styleUrls: ['./songsdetail-demo.component.scss'],
})

export class SongsDetailDemoComponent implements OnInit {
  songName: any;
  ngOnInit(): void {
  }

  // angForm: any;
  // options: FormGroup;
  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto');

  // event_name: any;
  // joinevent_detail: any;
  // joinevent: any;
  // eventname_detail: any;
  // public data: any;


  constructor(private activatedRoute: ActivatedRoute ) {
    var test = this.activatedRoute.snapshot.params
    this.songName = test.id
    console.log("checking", test.id);
    
  //   this.activatedRoute.queryParams.subscribe(params => {
  //     let temp = params;
  //     console.log('ygfyfytftu',temp);
  //      // Print the parameter to the console. 
  // });
   }

  // createForm() {
  //   this.angForm = this.form.group({
  //     name: ['', Validators.required],
  //   });

  // }
  
  // ngOnInit(): void {

  //   // Fetching Event Name from database 
  //   let eventnametemp = localStorage.getItem("EventName");
  //   this.eventname_detail = eventnametemp;
  //   this.event_name = JSON.parse(this.eventname_detail);

  //   // Fetch Event details from database 
  //   let ejtemp = localStorage.getItem("EventDetail");
  //   this.joinevent_detail = ejtemp;
  //   this.joinevent = JSON.parse(this.joinevent_detail);

  // }
  // openAddSongPage() {
  //   this.dialog.open(AddDialog)
  // }

  

}


