import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { ClosewithoutDialog } from "./closewithoutdialog/close-without-dialog";
declare const myTest: any;
declare const stopRecording:any
let video = document.getElementById('my-preview');
let recorder;
@Component({
  selector: 'app-songsname',
  templateUrl: './songsname.component.html',
  styleUrls: ['./songsname.component.scss'],
})
export class SongsnameComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {


  }
//   onClick() {
//     myTest();
// }
  openAddSongnamediolog() {
    this.dialog.open (ClosewithoutDialog)

  }

}




