import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { AddDialog } from "./addsong-dialog/add-dialog";

@Component({
  selector: 'addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.scss'],
})
export class AddsongComponent implements OnInit {
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

  ngOnInit(): void { }

  openAddSongPage() {
    this.dialog.open(AddDialog)
  }

}

