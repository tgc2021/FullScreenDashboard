import { Component, OnInit } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';
import { FullscreenServiceService } from '../../fullscreen-service.service';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

// import { fade, slide, listAnimation } from "@angular/animations";
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
  gameid: any;
  index_ranking_profile: any;
  indexwise_move_card_gradient: any;
 _gameId: any;
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
      this.gameid=params['gameid'];
      console.log(this.id); // price
      localStorage.setItem('id',this.id)
    })

    this._gameId=localStorage.getItem('_gameID');
  
    let body={
      _game:this._gameId,
      _fs_type:"3"
    }
    this.http.fullscreen_top_ten_index_wise(body).subscribe((res) => {
    console.log(res);
    this.indexwise=res
    this.indexwise_response=this.indexwise?.data
    if (this.indexwise_response && this.indexwise_response.fs_details) {
      for (let i = 0; i < this.indexwise_response.fs_details.length; i++) {
          if (this.indexwise_response.fs_details[i]._ranking_data && this.indexwise_response.fs_details[i]._ranking_data.length === 0) {
              this.indexwise_response.fs_details.splice(i, 1);
              i--; // Decrement i as the array length has decreased by 1
          }
      }
  }

    console.log(this.apiid);
    this.apiid=localStorage.getItem('id')
    console.log(this.apiid);

    this.indexwise_move_card_gradient=this.indexwise.data?.fs_details[0]?._fullscreen_themedetails?.bg_color;
    this.element.nativeElement.style.setProperty('--myvar', `${this.indexwise_move_card_gradient}`)

    console.log('length 0',this.indexwise_response?.fs_details[1]?._ranking_data.length==0);

if(this.apiid=='undefined'){

  
  this.indexwise_title=this.indexwise?.data?.fs_details[0]?.label
  this.indexwise_background_image=this.indexwise?.data?.fs_details[0]?._fullscreen_themedetails?.background_image
  this.indexwise_ranking=this.indexwise?.data?.fs_details[0]?._ranking_data
  this.indexwise_ranking_score_background_image=this.indexwise?.data?.fs_details[0]?._fullscreen_themedetails?.score_background_image
  this.indexwise_ranking_name=this.indexwise?.data?.fs_details[0]?._ranking_data[0]?.first_name
  this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[0]?._ranking_data[0]?.team_name
  this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[0]?._ranking_data[0]?.weightage
  this.index_ranking_profile=this.indexwise?.data?.fs_details[0]?._ranking_data[0]?.profile_logo
  this.index++



  setInterval(()=>{
   
    if(this.index>0 && this.index<6){   
      this.indexwise_ranking_name=this.indexwise?.data?.fs_details[0]?._ranking_data[this.index]?.first_name
      this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[0]?._ranking_data[this.index]?.team_name
      this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[0]?._ranking_data[this.index]?.weightage
      this.index_ranking_profile=this.indexwise?.data?.fs_details[0]?._ranking_data[this.index]?.profile_logo
      this.index++;
    }
    if(this.index==6){
      this.index=0
      this.indexwise_ranking_name=this.indexwise?.data?.fs_details[0]?._ranking_data[0]?.first_name
      this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[0]?._ranking_data[0]?.team_name
      this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[0]?._ranking_data[0]?.weightage
      this.index_ranking_profile=this.indexwise?.data?.fs_details[0]?._ranking_data[this.index]?.profile_logo
      this.index++;
    }
  },1350)
  this.loadIndexWise()

}
else if(this.apiid==1){
  this.indexwise_title=this.indexwise?.data?.fs_details[1]?.label
  this.indexwise_background_image=this.indexwise?.data?.fs_details[1]?._fullscreen_themedetails?.background_image
  this.indexwise_ranking=this.indexwise?.data?.fs_details[1]?._ranking_data
  this.indexwise_ranking_score_background_image=this.indexwise?.data?.fs_details[1]?._fullscreen_themedetails?.score_background_image
  
  
  this.indexwise_ranking_name=this.indexwise?.data?.fs_details[1]?._ranking_data[0]?.first_name
  this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[1]?._ranking_data[0]?.team_name
  this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[1]?._ranking_data[0]?.weightage
  this.index_ranking_profile=this.indexwise?.data?.fs_details[1]?._ranking_data[0]?.profile_logo
  this.index++


  setInterval(()=>{
   
    if(this.index>0 && this.index<6){
     
      this.indexwise_ranking_name=this.indexwise?.data?.fs_details[1]?._ranking_data[this.index]?.first_name
      this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[1]?._ranking_data[this.index]?.team_name
      this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[1]?._ranking_data[this.index]?.weightage
      this.index_ranking_profile=this.indexwise?.data?.fs_details[1]?._ranking_data[this.index]?.profile_logo
      this.index++;
     
   
    
    }
    if(this.index==6){
      this.index=0
      this.indexwise_ranking_name=this.indexwise?.data?.fs_details[1]?._ranking_data[0]?.first_name
      this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[1]?._ranking_data[0]?.team_name
      this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[1]?._ranking_data[0]?.weightage
      this.index_ranking_profile=this.indexwise?.data?.fs_details[1]?._ranking_data[this.index]?.profile_logo
      this.index++;
    }
  },1350) 
  this.loadIndexWiseForId2()
}
else if(this.apiid==2){
  this.indexwise_title=this.indexwise?.data?.fs_details[2]?.label
  this.indexwise_background_image=this.indexwise?.data?.fs_details[2]?._fullscreen_themedetails?.background_image
  this.indexwise_ranking=this.indexwise?.data?.fs_details[2]?._ranking_data
  this.indexwise_ranking_score_background_image=this.indexwise?.data?.fs_details[2]?._fullscreen_themedetails?.score_background_image
  
  
  this.indexwise_ranking_name=this.indexwise?.data?.fs_details[2]?._ranking_data[0]?.first_name
  this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[2]?._ranking_data[0]?.team_name
  this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[2]?._ranking_data[0]?.weightage
  this.index_ranking_profile=this.indexwise?.data?.fs_details[2]?._ranking_data[0]?.profile_logo
  this.index++


  setInterval(()=>{
   
    if(this.index>0 && this.index<6){
     
      this.indexwise_ranking_name=this.indexwise?.data?.fs_details[2]?._ranking_data[this.index]?.first_name
      this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[2]?._ranking_data[this.index]?.team_name
      this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[2]?._ranking_data[this.index]?.weightage
      this.index_ranking_profile=this.indexwise?.data?.fs_details[2]?._ranking_data[this.index]?.profile_logo
      this.index++;
     
   
    
    }
    if(this.index==6){
      this.index=0
      this.indexwise_ranking_name=this.indexwise?.data?.fs_details[2]?._ranking_data[0]?.first_name
      this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[2]?._ranking_data[0]?.team_name
      this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[2]?._ranking_data[0]?.weightage
      this.index_ranking_profile=this.indexwise?.data?.fs_details[2]?._ranking_data[this.index]?.profile_logo
      this.index++;
    }
  },1350)

  this.loadIndexWiseForId3()
  
}
else if(this.apiid==3){
  this.indexwise_title=this.indexwise?.data?.fs_details[3]?.label
  this.indexwise_background_image=this.indexwise?.data?.fs_details[3]?._fullscreen_themedetails?.background_image
  this.indexwise_ranking=this.indexwise?.data?.fs_details[3]?._ranking_data
  this.indexwise_ranking_score_background_image=this.indexwise?.data?.fs_details[3]?._fullscreen_themedetails?.score_background_image
  
  
  this.indexwise_ranking_name=this.indexwise?.data?.fs_details[3]?._ranking_data[0]?.first_name
  this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[3]?._ranking_data[0]?.team_name
  this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[3]?._ranking_data[0]?.weightage
  this.index_ranking_profile=this.indexwise?.data?.fs_details[3]?._ranking_data[0]?.profile_logo
  this.index++


  setInterval(()=>{
   
    if(this.index>0 && this.index<6){
     
      this.indexwise_ranking_name=this.indexwise?.data?.fs_details[3]?._ranking_data[this.index]?.first_name
      this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[3]?._ranking_data[this.index]?.team_name
      this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[3]?._ranking_data[this.index]?.weightage
      this.index_ranking_profile=this.indexwise?.data?.fs_details[3]?._ranking_data[this.index]?.profile_logo
      this.index++;
     
   
    
    }
    if(this.index==6){
      this.index=0
      this.indexwise_ranking_name=this?.indexwise?.data?.fs_details[3]?._ranking_data[0]?.first_name
      this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[3]?._ranking_data[0]?.team_name
      this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[3]?._ranking_data[0]?.weightage
      this.index_ranking_profile=this.indexwise?.data?.fs_details[3]?._ranking_data[this.index]?.profile_logo
      this.index++;
    }
  },1350)
  this.loadEmergingPlayer()
}
   
  })
  
   
   
}

loadIndexWise(){
  
  setInterval(()=>{
    this.location.replaceState("indexwise_dashboard?id=1");
    location.reload()
   
   },13500)  

}
loadIndexWiseForId2(){
  
  setInterval(()=>{
    this.location.replaceState("indexwise_dashboard?id=2");
    location.reload()
   
   },13500)
   
   

}

loadIndexWiseForId3(){
  
  setInterval(()=>{
    this.location.replaceState("indexwise_dashboard?id=3");
    location.reload()
   
   },13500)



   
   

}

loadEmergingPlayer(){
  setInterval(()=>{
    this.location.replaceState("Emerging_player_dashboard");
    location.reload()
   
   },13500)
  
}



}


