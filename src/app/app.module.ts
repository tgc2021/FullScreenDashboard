import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullscreenLeaderboardComponent } from './FullScreenDashboardForPlayers/fullscreen-leaderboard/fullscreen-leaderboard.component';
import { Top10EmergingPlayerComponent } from './FullScreenDashboardForPlayers/top10-emerging-player/top10-emerging-player.component';
import {MatCardModule} from '@angular/material/card';
import { FullscreenDashboardComponent } from './FullScreenDashboardForPlayers/fullscreen-dashboard/fullscreen-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OrdinalsPipe } from './ordinals.pipe';
import { OverallTLComponent } from './FSDashboardForTL/overall-tl/overall-tl.component';
import { IndexwiseTLComponent } from './FSDashboardForTL/indexwise-tl/indexwise-tl.component';
import { EmergingTLComponent } from './FSDashboardForTL/emerging-tl/emerging-tl.component';
import { OverallRMComponent } from './FSDashboardForRM/overall-rm/overall-rm.component';
import { IndexWiseRMComponent } from './FSDashboardForRM/index-wise-rm/index-wise-rm.component';
import { EmergingRMComponent } from './FSDashboardForRM/emerging-rm/emerging-rm.component';


@NgModule({
  declarations: [
    AppComponent,
    FullscreenLeaderboardComponent,
    FullscreenDashboardComponent,
    Top10EmergingPlayerComponent,
    OrdinalsPipe,
    OverallTLComponent,
    IndexwiseTLComponent,
    EmergingTLComponent,
    OverallRMComponent,
    IndexWiseRMComponent,
    EmergingRMComponent,
  
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [Location,{provide: LocationStrategy,useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
