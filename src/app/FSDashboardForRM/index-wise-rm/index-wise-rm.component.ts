import { Component, OnInit } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';
import { FullscreenServiceService } from '../../fullscreen-service.service';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index-wise-rm',
  templateUrl: './index-wise-rm.component.html',
  styleUrls: ['./index-wise-rm.component.scss']
})
export class IndexWiseRMComponent implements OnInit {
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
  arrayLength: any;
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
    this.http.fullscreen_top_ten_rm_indexwise(body).subscribe((res) => {
    console.log(res);
    this.indexwise=res
    this.indexwise_response=this.indexwise.data
    // this.arrayLength=this.indexwise.data.fs_details[0]._ranking_data.length();
    // console.log(this.arrayLength);
    console.log(this.apiid);
    this.apiid=localStorage.getItem('id')
    console.log(this.apiid);

    this.indexwise_move_card_gradient=this.indexwise.data.fs_details[0]._fullscreen_themedetails.bg_color;
    this.element.nativeElement.style.setProperty('--myvar', `${this.indexwise_move_card_gradient}`)

if(this.apiid=='undefined'){

  this.indexwise_title=this.indexwise.data.fs_details[0].label
  this.indexwise_background_image=this.indexwise.data.fs_details[0]._fullscreen_themedetails.background_image
  this.indexwise_ranking=this.indexwise.data.fs_details[0]._ranking_data
  this.arrayLength=this.indexwise_ranking.length;
  console.log(this.indexwise_ranking.length);
  this.indexwise_ranking_score_background_image=this.indexwise.data.fs_details[0]._fullscreen_themedetails.score_background_image
  this.indexwise_ranking_name=this.indexwise.data.fs_details[0]._ranking_data[0].first_name
  this.indexwise_ranking_team_name=this.indexwise.data.fs_details[0]._ranking_data[0].brand_name
  this.indexwise_ranking_weightage=this.indexwise.data.fs_details[0]._ranking_data[0].rm_brand_weightage
  this.index_ranking_profile=this.indexwise.data.fs_details[0]._ranking_data[0].profile_logo
  this.index++


  setInterval(()=>{
   
    if(this.index>0 && this.index<6){   
      this.indexwise_ranking_name=this.indexwise.data.fs_details[0]._ranking_data[this.index].first_name
      this.indexwise_ranking_team_name=this.indexwise.data.fs_details[0]._ranking_data[this.index].brand_name
      this.indexwise_ranking_weightage=this.indexwise.data.fs_details[0]._ranking_data[this.index].rm_brand_weightage
      this.index_ranking_profile=this.indexwise.data.fs_details[0]._ranking_data[this.index].profile_logo
      this.index++;
      
    }
    if(this.index==6){
      this.index=0
      this.indexwise_ranking_name=this.indexwise.data.fs_details[0]._ranking_data[0].first_name
      this.indexwise_ranking_team_name=this.indexwise.data.fs_details[0]._ranking_data[0].brand_name
      this.indexwise_ranking_weightage=this.indexwise.data.fs_details[0]._ranking_data[0].rm_brand_weightage
      this.index_ranking_profile=this.indexwise.data.fs_details[0]._ranking_data[this.index].profile_logo
      this.index++;
    }
  },1350)
  this.loadIndexWiseRM()

}
else if(this.apiid==1){
  this.indexwise_title=this.indexwise.data.fs_details[1].label
  this.indexwise_background_image=this.indexwise.data.fs_details[1]._fullscreen_themedetails.background_image
  this.indexwise_ranking=this.indexwise.data.fs_details[1]._ranking_data
  this.arrayLength=this.indexwise_ranking.length;
  this.indexwise_ranking_score_background_image=this.indexwise.data.fs_details[1]._fullscreen_themedetails.score_background_image
  this.indexwise_ranking_name=this.indexwise.data.fs_details[1]._ranking_data[0].first_name
  this.indexwise_ranking_team_name=this.indexwise.data.fs_details[1]._ranking_data[0].brand_name
  this.indexwise_ranking_weightage=this.indexwise.data.fs_details[1]._ranking_data[0].rm_brand_weightage
  this.index_ranking_profile=this.indexwise.data.fs_details[1]._ranking_data[0].profile_logo
  this.index++


  setInterval(()=>{
   
    if(this.index>0 && this.index<6){
     
      this.indexwise_ranking_name=this.indexwise.data.fs_details[1]._ranking_data[this.index].first_name
      this.indexwise_ranking_team_name=this.indexwise.data.fs_details[1]._ranking_data[this.index].brand_name
      this.indexwise_ranking_weightage=this.indexwise.data.fs_details[1]._ranking_data[this.index].rm_brand_weightage
      this.index_ranking_profile=this.indexwise.data.fs_details[1]._ranking_data[this.index].profile_logo
      this.index++;
    }
    if(this.index==6){
      this.index=0;
      this.indexwise_ranking_name=this.indexwise.data.fs_details[1]._ranking_data[0].first_name
      this.indexwise_ranking_team_name=this.indexwise.data.fs_details[1]._ranking_data[0].brand_name
      this.indexwise_ranking_weightage=this.indexwise.data.fs_details[1]._ranking_data[0].rm_brand_weightage
      this.index_ranking_profile=this.indexwise.data.fs_details[1]._ranking_data[this.index].profile_logo
      this.index++;
    }
  },1350) 
  this.loadIndexWiseForId2RM()
}
else if(this.apiid==2){
  this.indexwise_title=this.indexwise.data.fs_details[2].label
  this.indexwise_background_image=this.indexwise.data.fs_details[2]._fullscreen_themedetails.background_image
  this.indexwise_ranking=this.indexwise.data.fs_details[2]._ranking_data
  this.arrayLength=this.indexwise_ranking.length;
  this.indexwise_ranking_score_background_image=this.indexwise.data.fs_details[2]._fullscreen_themedetails.score_background_image
  this.indexwise_ranking_name=this.indexwise.data.fs_details[2]._ranking_data[0].first_name
  this.indexwise_ranking_team_name=this.indexwise.data.fs_details[2]._ranking_data[0].brand_name
  this.indexwise_ranking_weightage=this.indexwise.data.fs_details[2]._ranking_data[0].rm_brand_weightage
  this.index_ranking_profile=this.indexwise.data.fs_details[2]._ranking_data[0].profile_logo
  this.index++


  setInterval(()=>{
   
    if(this.index>0 && this.index<6){
     
      this.indexwise_ranking_name=this.indexwise.data.fs_details[2]._ranking_data[this.index].first_name
      this.indexwise_ranking_team_name=this.indexwise.data.fs_details[2]._ranking_data[this.index].brand_name
      this.indexwise_ranking_weightage=this.indexwise.data.fs_details[2]._ranking_data[this.index].rm_brand_weightage
      this.index_ranking_profile=this.indexwise.data.fs_details[2]._ranking_data[this.index].profile_logo
      this.index++;
     
   
    
    }
    if(this.index==6){
      this.index=0
      this.indexwise_ranking_name=this.indexwise.data.fs_details[2]._ranking_data[0].first_name
      this.indexwise_ranking_team_name=this.indexwise.data.fs_details[2]._ranking_data[0].brand_name
      this.indexwise_ranking_weightage=this.indexwise.data.fs_details[2]._ranking_data[0].rm_brand_weightage
      this.index_ranking_profile=this.indexwise.data.fs_details[2]._ranking_data[this.index].profile_logo
      this.index++;
    }
  },1350)

  this.loadIndexWiseForId3RM()
  
}
else if(this.apiid==3){
  this.indexwise_title=this.indexwise.data.fs_details[3].label
  this.indexwise_background_image=this.indexwise.data.fs_details[3]._fullscreen_themedetails.background_image
  this.indexwise_ranking=this.indexwise.data.fs_details[3]._ranking_data
  this.arrayLength=this.indexwise_ranking.length;
  this.indexwise_ranking_score_background_image=this.indexwise.data.fs_details[3]._fullscreen_themedetails.score_background_image
  
  
  this.indexwise_ranking_name=this.indexwise.data.fs_details[3]._ranking_data[0].first_name
  this.indexwise_ranking_team_name=this.indexwise.data.fs_details[3]._ranking_data[0].brand_name
  this.indexwise_ranking_weightage=this.indexwise.data.fs_details[3]._ranking_data[0].rm_brand_weightage
  this.index_ranking_profile=this.indexwise.data.fs_details[3]._ranking_data[0].profile_logo
  this.index++


  setInterval(()=>{
   
    if(this.index>0 && this.index<6){
     
      this.indexwise_ranking_name=this.indexwise?.data?.fs_details[3]?._ranking_data[this.index]?.first_name
      this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[3]?._ranking_data[this.index]?.brand_name
      this.indexwise_ranking_weightage=this.indexwise.data?.fs_details[3]?._ranking_data[this.index]?.rm_brand_weightage
      this.index_ranking_profile=this.indexwise?.data?.fs_details[3]?._ranking_data[this.index]?.profile_logo
      this.index++; 
    }
    if(this.index==6){
      this.index=0
      this.indexwise_ranking_name=this.indexwise?.data?.fs_details[3]?._ranking_data[0]?.first_name
      this.indexwise_ranking_team_name=this.indexwise?.data?.fs_details[3]?._ranking_data[0]?.brand_name
      this.indexwise_ranking_weightage=this.indexwise?.data?.fs_details[3]?._ranking_data[0]?.rm_brand_weightage
      this.index_ranking_profile=this.indexwise?.data?.fs_details[3]?._ranking_data[this.index]?.profile_logo
      this.index++;
    }
  },1350)
   this.loadEmergingRM()
}
   
  })
  
   
   
}

loadIndexWiseRM(){
  
  setInterval(()=>{
    this.location.replaceState("indexwise_RM_dashboard?id=1");
    location.reload()
   
   },6750)  

}
loadIndexWiseForId2RM(){
  
  setInterval(()=>{
    this.location.replaceState("indexwise_RM_dashboard?id=2");
    location.reload()
   
   },6750)
   
   

}

loadIndexWiseForId3RM(){
  
  setInterval(()=>{
    this.location.replaceState("indexwise_RM_dashboard?id=3");
    location.reload()
   
   },6750)



   
   

}

loadEmergingRM(){
  setInterval(()=>{
    // this.location.replaceState("Emerging_RM_dashboard");
    this.location.replaceState(`fullscreen_dashboard?_gameID=${this._gameId}`);
    location.reload()
   
   },6750)
  
}

// loadIndexWiseForReturn(){
  
//   setInterval(()=>{
//     this.location.replaceState(`fullscreen_dashboard?_gameID=${this._gameId}`);
//     location.reload()
   
//    },36000)

// }

}
