import { Component, OnInit } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-fullscreen-leaderboard',
  templateUrl: './fullscreen-leaderboard.component.html',
  styleUrls: ['./fullscreen-leaderboard.component.scss']
})

export class FullscreenLeaderboardComponent implements OnInit {
  @ViewChild('ScrollTarget') scrollTarget:ElementRef | undefined

  constructor() { }

  ngOnInit(): void {
    this.scrollTarget?.nativeElement.scrollIntoView({behaviour:'smooth',block:'start'})

  }
  scrollIntoView(){
    this.scrollTarget?.nativeElement.scrollIntoView({behaviour:'smooth',block:'end'})
  }

}
