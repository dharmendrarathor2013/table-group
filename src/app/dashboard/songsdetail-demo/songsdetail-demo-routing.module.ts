import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsDetailDemoComponent } from './songsdetail-demo.component';
const routes: Routes = [
    { path: '**', component: SongsDetailDemoComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SongsDetailDemoRoutingModule {
}