import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullscreenLeaderboardComponent } from './fullscreen-leaderboard/fullscreen-leaderboard.component';
import { Top10EmergingPlayerComponent } from './top10-emerging-player/top10-emerging-player.component';
import {MatCardModule} from '@angular/material/card';
import { FullscreenDashboardComponent } from './fullscreen-dashboard/fullscreen-dashboard.component';
<<<<<<< HEAD
import { Top10EmergingPlayerComponent } from './top10-emerging-player/top10-emerging-player.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OrdinalsPipe } from './ordinals.pipe';

>>>>>>> ec07b38e4989f08ffccca1171f2c4bc78d0d075c

@NgModule({
  declarations: [
    AppComponent,
    FullscreenLeaderboardComponent,
    FullscreenDashboardComponent,
<<<<<<< HEAD
    Top10EmergingPlayerComponent
=======
    Top10EmergingPlayerComponent,
    OrdinalsPipe,
  
>>>>>>> ec07b38e4989f08ffccca1171f2c4bc78d0d075c
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
