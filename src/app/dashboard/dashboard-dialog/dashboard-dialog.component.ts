import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
//import { DatePipe } from '@angular/common';
// import { MatDialog } from "@angular/material/dialog";
// import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.scss']
})

@Injectable()
export class DashboardDialogComponent implements OnInit {

  angForm!: FormGroup;

  constructor(private formbulider: FormBuilder) {

    this.createForm();
     
  }

  createForm() {
    this.angForm = this.formbulider.group({
      event: [null, Validators.required],
      discription: [null, Validators.required],
      date: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  AddEvent(value: any) {
   // let dateToDBthis = this.datePipe.transform(value.date, 'yyyy-MM-dd');
    //console.log('date:',dateToDBthis);
    // var dateToDB = moment(value.date).format("MM-DD-YYYY");
    // console.log('date:',dateToDB);
    let events = [];

    if (this.angForm.invalid) {
      alert('Please eneter value')
    }
    else {
      if (localStorage.getItem('Event')) {
        events = JSON.parse(localStorage.getItem('Event') || "{}");
        // events = [value, ...events];
      }
      else {
        // events = [value];
      }

      let temp = { event: value.event, date: moment(value.date).format("MM-DD-YYYY"), discription: value.discription }
      events.push(temp);
      localStorage.setItem('Event', JSON.stringify(events));
      alert('Event added successfully');
      window.location.reload();
    }
  }
}
