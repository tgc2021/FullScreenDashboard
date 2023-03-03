import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullscreenLeaderboardComponent } from './fullscreen-leaderboard/fullscreen-leaderboard.component';
import { Top10EmergingPlayerComponent } from './top10-emerging-player/top10-emerging-player.component';
import {MatCardModule} from '@angular/material/card';
import { FullscreenDashboardComponent } from './fullscreen-dashboard/fullscreen-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OrdinalsPipe } from './ordinals.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FullscreenLeaderboardComponent,
    FullscreenDashboardComponent,
    Top10EmergingPlayerComponent,
    OrdinalsPipe,
  
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
