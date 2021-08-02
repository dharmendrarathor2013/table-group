import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordingComponent } from './recording.component';
const routes: Routes = [
    { path: '**', component: RecordingComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecordingRoutingModule {
}