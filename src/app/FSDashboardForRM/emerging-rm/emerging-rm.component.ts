import { Component, OnInit,ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { FullscreenServiceService } from '../../fullscreen-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emerging-rm',
  templateUrl: './emerging-rm.component.html',
  styleUrls: ['./emerging-rm.component.scss']
})
export class EmergingRMComponent implements OnInit {
  players:any;
  scale: any=1.0;
  index: any=0;
  themeDetails: any;
  label: any;
  ranking_data: any;
  windowlocation: any;
  url:any;
  route: any;
  id: any;
  gameid: any;
  apiid: any;
  _gameId: any;
  points_color: any;

  
  constructor(public location:Location,public http:FullscreenServiceService,public router:ActivatedRoute,public element:ElementRef){
   

  }
  


ngOnInit(): void {


  this.windowlocation=window.location.href
    console.log(this.windowlocation);

    this.url=new URL(this.windowlocation)
    console.log(this.url);
    
    var checkUserID= this.router.queryParams
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
      _fs_type:"4"
    }
    
  this.http.fullscreen_top_ten_Emerging(body).subscribe((res:any)=>{
    console.log(res);
    this.apiid=localStorage.getItem('id');
    console.log(this.apiid);
    this.points_color=res.data.fs_details[0]._fullscreen_themedetails.bg_color
    this.element.nativeElement.style.setProperty('--myvar', this.points_color)
    if(this.apiid==='undefined'){
      this.themeDetails=res.data.fs_details[0]._fullscreen_themedetails;
    

      this.label=res.data.fs_details[0].label;
    this.ranking_data=res.data.fs_details[0]._ranking_data;
    setInterval(() => {
      if(this.index>=0 && this.index<5){
        this.index++;
        
        console.log(this.index)
      }
      else {
        this.index=0
      }
     
     
      
    }, 3000);
    this.loadEmergingRM()
    }
    else if(this.apiid==1){
      this.themeDetails=res.data.fs_details[1]._fullscreen_themedetails;
      this.label=res.data.fs_details[1].label;
      console.log(this.label)
    this.ranking_data=res.data.fs_details[1]._ranking_data;
      setInterval(() => {
      if(this.index>=0 && this.index<5){
        this.index++;
        
        console.log(this.index)
      }
      else {
        this.index=0
      }
     
     
      
    }, 3000);
    this.loadEmergingRMForId2()
    }
    
    else if(this.apiid==2){
      this.themeDetails=res?.data?.fs_details[2]?._fullscreen_themedetails;
      this.label=res?.data?.fs_details[2]?.label;
      
    this.ranking_data=res?.data?.fs_details[2]?._ranking_data;
    setInterval(() => {
      if(this.index>=0 && this.index<5){
        this.index++;
        
       
      }
      else {
        this.index=0
      }
     
     
      
    }, 3000);
    this.loadEmergingRMForId3()
    }
    else if(this.apiid==3){
      this.themeDetails=res?.data?.fs_details[3]?._fullscreen_themedetails;
      this.label=res?.data?.fs_details[3]?.label;
    
    this.ranking_data=res?.data?.fs_details[3]?._ranking_data;
    setInterval(() => {
      if(this.index>=0 && this.index<5){
        this.index++;
        
        console.log(this.index)
      }
      else  {
        this.index=0
      }
     
     
      
    }, 3000);
    this.loadOverallPlayer()

    }
    
    
  })

 

}


loadEmergingRM(){
  
  setInterval(()=>{
    this.location.replaceState(`Emerging_RM_dashboard?id=1`);
    location.reload()
   
   },36000)  

}
loadEmergingRMForId2(){
  
  setInterval(()=>{
    this.location.replaceState("Emerging_RM_dashboard?id=2");
    location.reload()
   
   },36000)
   
   

}

loadEmergingRMForId3(){
  
  setInterval(()=>{
    this.location.replaceState("Emerging_RM_dashboard?id=3");
    location.reload()
   
   },36000)
  


}
loadOverallPlayer(){
  
  setInterval(()=>{
    this.location.replaceState(`fullscreen_dashboard?_gameID=${this._gameId}`);
    location.reload()
   
   },36000)

}



}


