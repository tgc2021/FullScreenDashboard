import { Component, OnInit } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';
import { AnimationEvent } from "@angular/animations";

// import { fade, slide, listAnimation } from "@angular/animations";
@Component({
  selector: 'app-fullscreen-leaderboard',
  templateUrl: './fullscreen-leaderboard.component.html',
  styleUrls: ['./fullscreen-leaderboard.component.scss']
})

export class FullscreenLeaderboardComponent implements OnInit {
  
  player: any;
  index: any=0;


  constructor() { }

  Players=[{
    id:1,
    name:"Shubham Karad",
    Team_name:'FearlessFerrari',
    points:2555
  },
  {
    id:2,
    name:"Kartikee Pawar",
    Team_name:'FearlessFerrari',
    points:2545


  },
  {
    id:3,
    name:"Raunak Shringarpure",
    Team_name:'FearlessFerrari',
    points:2540


  },
  {
    id:4,
    name:"Rajat Bhat",
    Team_name:'FearlessFerrari',
    points:2535
  },
  {
    id:5,
    name:"Shubham Dhekolkar",
    Team_name:'FearlessFerrari',
    points:2543


  }
  

]
  
  ngOnInit(): void {
    this.Players
    setInterval(()=>{
      if(this.index>=0 && this.index<=4){
        this.index++;
      }
      else{
        this.index=0;
      }
    },1700)
   
}
}
