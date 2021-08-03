import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      event: ['', Validators.required],
      discription:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  AddEvent(value: any) {
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

      let temp = { event: value.event, discription:value.discription }
      events.push(temp);
      localStorage.setItem('Event', JSON.stringify(events));
      alert('Event added successfully');
      window.location.reload();
    }
  }
}
