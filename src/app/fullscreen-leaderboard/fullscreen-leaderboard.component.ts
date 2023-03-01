import { Component, OnInit } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';
import { FullscreenServiceService } from '../fullscreen-service.service';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fullscreen-leaderboard',
  templateUrl: './fullscreen-leaderboard.component.html',
  styleUrls: ['./fullscreen-leaderboard.component.scss']
})

export class FullscreenLeaderboardComponent implements OnInit {
  player: any;
  index: any=0;
  indexwise_response:any
  indexwise:any
  indexwise_title:any
  indexwise_background_image:any
  indexwise_ranking:any
  indexwise_ranking_score_background_image:any
  indexwise_ranking_name:any
  indexwise_ranking_team_name:any
  indexwise_ranking_weightage:any
  windowlocation:any
  url:any
  id:any
  apiid:any
  constructor(public http:FullscreenServiceService, public element: ElementRef,public location:Location,public route:ActivatedRoute) { }
  ngOnInit(): void {
    
    this.windowlocation=window.location.href
    console.log(this.windowlocation);

    this.url=new URL(this.windowlocation)
    console.log(this.url);
    
    var checkUserID= this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.id = params['id'];
      console.log(this.id); // price
      localStorage.setItem('id',this.id)
    })

    let body={
      _game:"296",
      _fs_type:"3"
    }

    this.http.fullscreen_top_ten_index_wise(body).subscribe((res) => {
    console.log(res);
    this.indexwise=res
    this.indexwise_response=this.indexwise.data
    console.log(this.apiid);
    this.apiid=localStorage.getItem('id')
    console.log(this.apiid);

if(this.apiid=='undefined'){
  this.indexwise_title=this.indexwise.data.fs_details[0].label
  this.indexwise_background_image=this.indexwise.data.fs_details[0]._fullscreen_themedetails.background_image
  this.indexwise_ranking=this.indexwise.data.fs_details[0]._ranking_data
  this.indexwise_ranking_score_background_image=this.indexwise.data.fs_details[0]._fullscreen_themedetails.score_background_image
  
  
  this.indexwise_ranking_name=this.indexwise.data.fs_details[0]._ranking_data[0].first_name
  this.indexwise_ranking_team_name=this.indexwise.data.fs_details[0]._ranking_data[0].team_name
  this.indexwise_ranking_weightage=this.indexwise.data.fs_details[0]._ranking_data[0].weightage


  setInterval(()=>{
    if(this.index<5){
      this.indexwise_ranking_name=this.indexwise.data.fs_details[0]._ranking_data[this.index].first_name
      this.indexwise_ranking_team_name=this.indexwise.data.fs_details[0]._ranking_data[this.index].team_name
      this.indexwise_ranking_weightage=this.indexwise.data.fs_details[0]._ranking_data[this.index].weightage
      this.index++;
    
    }
    if(this.index>4){
      this.index=0
      this.indexwise_ranking_name=this.indexwise.data.fs_details[0]._ranking_data[0].first_name
      this.indexwise_ranking_team_name=this.indexwise.data.fs_details[0]._ranking_data[0].team_name
      this.indexwise_ranking_weightage=this.indexwise.data.fs_details[0]._ranking_data[0].weightage
  
    }
  },3000)
  // this.loadIndexWise()

}
else if(this.apiid==1){
  console.log(this.apiid);
  
  this.indexwise_title=this.indexwise.data.fs_details[1].label
  this.indexwise_background_image=this.indexwise.data.fs_details[1]._fullscreen_themedetails.background_image
  this.indexwise_ranking=this.indexwise.data.fs_details[1]._ranking_data
  this.indexwise_ranking_score_background_image=this.indexwise.data.fs_details[1]._fullscreen_themedetails.score_background_image
  
  
  this.indexwise_ranking_name=this.indexwise.data.fs_details[1]._ranking_data[0].first_name
  this.indexwise_ranking_team_name=this.indexwise.data.fs_details[1]._ranking_data[0].team_name
  this.indexwise_ranking_weightage=this.indexwise.data.fs_details[1]._ranking_data[0].weightage
}
   
  })
  
   
   
}

// loadIndexWise(){
  
//   setInterval(()=>{
//     this.location.replaceState("indexwise_dashboard?id=1");
//     location.reload()
   
//    },15000)  

// }
}


