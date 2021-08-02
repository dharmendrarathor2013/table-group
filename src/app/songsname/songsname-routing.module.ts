import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsnameComponent } from './songsname.component';
const routes: Routes = [
    { path: '**', component: SongsnameComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SongsnameRoutingModule {
}