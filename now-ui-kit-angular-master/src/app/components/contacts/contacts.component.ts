
import { ApidataService } from 'app/apidata.service';

//import { ResourceLoader } from '@angular/compiler';
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
  posts: any[];

  

  constructor(private form: FormBuilder, private ApidataService: ApidataService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.form.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(100), Validators.email])],
      subject:[],
      messageText:[]
    });
  }
  ngOnInit(): void {
  }

  loadPosts() {
   
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
    if (this.angForm.valid) {
      this.formsuccess = true;
      console.log('hbbuhyghyugy',data);
       

      this.ApidataService.getdepartmentUser({
          firstName: data.name,
          lastName: 'xyz',
          email: data.email,
          phone:"6789877890",
          subject: data.subject,
          messageText: data.messageText,
      }).pipe().subscribe((data: any) => {

        console.log("contacts-data", data)

    },
        error => {
          console.log("user-order", error);
        });
}
    
  }
}
