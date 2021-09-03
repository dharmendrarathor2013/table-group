import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CoreModuleModule } from "../core-module/core-module.module";
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
import { MatDialogModule } from "@angular/material/dialog";
import { FlexLayoutModule } from '@angular/flex-layout';
import { SongsDetailDemoRoutingModule } from './songsdetail-demo-routing.module';
import { SongsDetailDemoComponent } from './songsdetail-demo.component';
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
  MatDialogModule,
  ReactiveFormsModule
]
@NgModule({
  declarations: [
    SongsDetailDemoComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    SongsDetailDemoRoutingModule
  //  CoreModuleModule
  ]
})

export class SongsDetailDemoModule { }
