import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullscreenLeaderboardComponent } from './fullscreen-leaderboard/fullscreen-leaderboard.component';
import {MatCardModule} from '@angular/material/card';
import { FullscreenDashboardComponent } from './fullscreen-dashboard/fullscreen-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FullscreenLeaderboardComponent,
    FullscreenDashboardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
