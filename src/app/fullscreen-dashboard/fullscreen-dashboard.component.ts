import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullscreen-dashboard',
  templateUrl: './fullscreen-dashboard.component.html',
  styleUrls: ['./fullscreen-dashboard.component.scss']
})
export class FullscreenDashboardComponent implements OnInit {
  activeclass:any=0
  id:any
  counter:any=0
  name:any
  score:any
  rank:any
  profile:any
  leaderboard=[
    {
      rank:'1',
      name:'Karan Wahi',
      score:'9456',
      profile:'/assets/fullscreen_cricket/profile_pic.png'
      
    },
    {
    rank:'2',
    name:'Arun Patel',
    score:'8035',
    profile:'/assets/fullscreen_cricket/image_1.jpg'

  },
  {
    rank:'3',
    name:'Chetandra Pratap Singh',
    score:'7382',
    profile:'/assets/fullscreen_cricket/image_2.jpg'

  },
  {
    rank:'4',
    name:'Sameer Sharma',
    score:'6000',
    profile:'/assets/fullscreen_cricket/image_3.jpg'

  },
  {
    rank:'5',
    name:'Sachin Malhotra',
    score:'100',
    profile:'/assets/fullscreen_cricket/image_4.avif'

  },
 
]
  constructor() { }

  ngOnInit(): void {
    this.name=this.leaderboard[0].name
    this.score=this.leaderboard[0].score
    this.rank=this.leaderboard[0].rank
    this.profile=this.leaderboard[0].profile

    setInterval(()=>{
    //  this.counter=0
      console.log(this.counter);
    
      if(this.counter<4){
       
        this.activeclass= this.counter
        this.counter++
        this.name=this.leaderboard[this.counter].name
        this.score=this.leaderboard[this.counter].score
        this.rank=this.leaderboard[this.counter].rank
        this.profile=this.leaderboard[this.counter].profile

        console.log(this.name);
        

      }
      else if(this.counter==4){
        this.counter=0
        this.name=this.leaderboard[0].name
        this.score=this.leaderboard[0].score
        this.rank=this.leaderboard[0].rank
        this.profile=this.leaderboard[0].profile

        console.log(this.counter);
        this.activeclass= this.counter
       
      }
    },5000)
    console.log(this.counter);
    

  }

  // activeRank(index:any){
  //  this.activeclass=index
  //  this.id=index++
  // }
}
