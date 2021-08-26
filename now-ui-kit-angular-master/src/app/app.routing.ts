import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { HomeComponent } from './examples/home/home.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { AboutComponent } from "./components/about/about.component";
import { ServicesComponent} from "./components/services/services.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { ExamplesComponent } from './examples/examples.component';


const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ComponentsComponent },
    // { path: 'index', component: HomeComponent },
    { path: 'examples/landing', component: LandingComponent },
    { path: 'examples/login', component: LoginComponent },
    { path: 'examples/home', component: HomeComponent },

    { path: 'examples/profile', component: ProfileComponent },
    { path: 'components/about', component: AboutComponent },
    { path: 'components/services', component: ServicesComponent },
    { path: 'components/contacts', component: ContactsComponent },
    { path: 'examples', component: ExamplesComponent },


];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
