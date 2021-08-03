import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDemoComponent } from './artist-demo.component';
const routes: Routes = [
    { path: '**', component: ArtistDemoComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtistDemoRoutingModule {
}