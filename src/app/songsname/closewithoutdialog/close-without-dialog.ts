import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
    selector: 'add-closewithoutdiolog',
    templateUrl: './close-without-dialog.html',

    styleUrls: ['./close-without-dialog.css'],

})

export class ClosewithoutDialog implements OnInit {
    constructor(public dialogRef: MatDialogRef<ClosewithoutDialog>) {



    }

    ngOnInit(): void { }

    closeFunc() {
        console.log("sfsfdfdfs");
        
        this.dialogRef.close();
    }


}

