import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* start angular material  Module*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';




/* end angular material  Module*/
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { HeaderComponent } from '../header/header.component';
const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatRadioModule,
  FlexLayoutModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule

]
@NgModule({
  declarations: [
    LoginComponent,
    // HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    LoginRoutingModule,
    MatCheckboxModule,
  ]
})
export class LoginModule { }
