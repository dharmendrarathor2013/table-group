import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  angForm!: FormGroup;
  options: FormGroup;

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
 
  
  constructor(fb: FormBuilder, private formbulider: FormBuilder, private router: Router
  ) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
    this.createForm();
  }

  createForm() {
    this.angForm = this.formbulider.group({
      event: [null, Validators.required],
      discription: [null, Validators.required],
      date: [null, Validators.required]
    });
  }
  ngOnInit(): void {  }

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
 
       let temp = { event: value.event, date: moment(value.date).format("MM-DD-YYYY"), discription: value.discription }
       events.push(temp);
       localStorage.setItem('Event', JSON.stringify(events));
       alert('Event added successfully');
       
       this.router.navigate(['/dashboard/addsong']);
       window.location.reload();
     }
   }

}

