import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergingRMComponent } from './FSDashboardForRM/emerging-rm/emerging-rm.component';
import { IndexWiseRMComponent } from './FSDashboardForRM/index-wise-rm/index-wise-rm.component';
import { OverallRMComponent } from './FSDashboardForRM/overall-rm/overall-rm.component';
import { EmergingTLComponent } from './FSDashboardForTL/emerging-tl/emerging-tl.component';
import { IndexwiseTLComponent } from './FSDashboardForTL/indexwise-tl/indexwise-tl.component';
import { OverallTLComponent } from './FSDashboardForTL/overall-tl/overall-tl.component';
import { FullscreenDashboardComponent } from './FullScreenDashboardForPlayers/fullscreen-dashboard/fullscreen-dashboard.component';
import { FullscreenLeaderboardComponent } from './FullScreenDashboardForPlayers/fullscreen-leaderboard/fullscreen-leaderboard.component';
import { Top10EmergingPlayerComponent } from './FullScreenDashboardForPlayers/top10-emerging-player/top10-emerging-player.component';

const routes: Routes = [
  { path: '', redirectTo: 'fullscreen_dashboard', pathMatch: 'full' },
  { path: 'fullscreen_dashboard', component:FullscreenDashboardComponent},
  { path: 'indexwise_dashboard', component:FullscreenLeaderboardComponent},
  {path:'Emerging_player_dashboard',component:Top10EmergingPlayerComponent},

  {path:'Overall_TL',component:OverallTLComponent},
  {path:'Emerging_TL_dashboard',component:EmergingTLComponent},
  { path: 'indexwise_TL_dashboard', component:IndexwiseTLComponent},

  {path:'Overall_RM',component:OverallRMComponent},
  {path:'Emerging_RM_dashboard',component:EmergingRMComponent},
  { path: 'indexwise_RM_dashboard', component:IndexWiseRMComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
