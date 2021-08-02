import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsongComponent } from './addsong.component';
const routes: Routes = [
    { path: '**', component: AddsongComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddsongRoutingModule {
}