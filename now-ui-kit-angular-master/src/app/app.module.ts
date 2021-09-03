import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {MatIconModule} from '@angular/material/icon';

import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        Ng2CarouselamosModule,
        BrowserModule,
        HttpClientModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
