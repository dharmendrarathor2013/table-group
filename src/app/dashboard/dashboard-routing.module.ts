import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboardcomponent';
const routes: Routes = [

    {
        path: '', component: DashboardComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
            },

            {
                path: 'addsong',
                loadChildren: () => import('../addsong/addsong.module').then(m => m.AddsongModule)
            },

            {
                path: 'recording',
                loadChildren: () => import('../recording/recording.module').then(m => m.RecordingModule)
            },

            {
                path: 'songsname',
                loadChildren: () => import('../songsname/songsname.module').then(m => m.SongsnameModule)
            },

            {
                path: 'artist-demo/:id',
                loadChildren: () => import('./artist-demo/artist-demo.module').then(m => m.ArtistDemoModule)
            },

            // {
            //     path: 'songs-detail-demo/:id',
            //     loadChildren: () => import('./artist-demo/artist-demo.module').then(m => m.ArtistDemoModule)
            // },

            {
                path: 'home/:id',
                loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
            },

            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'Digi_videoRecorder', pathMatch: '/home/ubuntu/project/tab26/tabe-group/Digi_videoRecorder/index.html' }
        ]
    }






]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}