import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullscreenLeaderboardComponent } from './fullscreen-leaderboard/fullscreen-leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'fullscreen_dashboard', pathMatch: 'full' },
  { path: 'fullscreen_dashboard', component:FullscreenLeaderboardComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
