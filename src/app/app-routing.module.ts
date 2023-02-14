import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullscreenDashboardComponent } from './fullscreen-dashboard/fullscreen-dashboard.component';
import { FullscreenLeaderboardComponent } from './fullscreen-leaderboard/fullscreen-leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'fullscreen_dashboard', pathMatch: 'full' },
  { path: 'fullscreen_dashboard', component:FullscreenDashboardComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
