import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  angForm: FormGroup;
  submitted = false;
  formsuccess = false;

  constructor(private form: FormBuilder) {

    this.createForm();
  }

  createForm() {
    this.angForm = this.form.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(100), Validators.email])]
    });
  }
  ngOnInit(): void {
  }


  get email() {
    return this.angForm.get('email');
  }
  get f() { return this.angForm.controls; }

  Submitform(data: any) {
    this.submitted = true;
    if (this.angForm.invalid) {
      this.formsuccess = false;
      return;
    }
    if(this.angForm.valid){
    this.formsuccess = true;
   }
  }
}
