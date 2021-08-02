import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsnameComponent, } from './songsname.component';
import { SongsnameRoutingModule, } from './songsname-routing.module';
/* start angular material  Module*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';



/* end angular material  Module*/
const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatRadioModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatSliderModule,
  MatDialogModule
]
@NgModule({
  declarations: [
    SongsnameComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    SongsnameRoutingModule,
  ]
})
export class SongsnameModule { }
