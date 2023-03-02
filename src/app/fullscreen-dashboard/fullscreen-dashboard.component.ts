import { Component, OnInit ,ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullscreenServiceService } from '../fullscreen-service.service';
import { Location } from '@angular/common';


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
  fullscreen:any
  fullscreen_response:any
  background_image:any
  medal:any;
  tile6:any
  tile7:any
  tile8:any
  tile9:any
  tile10:any
  title:any
  team_name:any
  profile_gradient_color:any
  top5toppers:any
  title7_name:any
  title7_name_split:any
  title7_name_final:any
  title6_name:any
  title6_name_split:any
  title6_name_final:any

  title8_name:any
  title8_name_split:any
  title8_name_final:any

  
  title9_name:any
  title9_name_split:any
  title9_name_final:any


  
  title10_name:any
  title10_name_split:any
  title10_name_final:any
  location:any
  math = Math;

  theme_color:any
  _gameID:any
  constructor(public http:FullscreenServiceService, public element: ElementRef, private route: ActivatedRoute,public _location:Location) { }

  ngOnInit(): void {

    this.location=window.location.href
    console.log(this.location);
    var url = new URL(this.location)
    console.log(url);

    var checkUserID= this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this._gameID = params['_gameID'];
      console.log(this._gameID); // price
      
    })


//     if(this.location.includes('_gameID')){
// console.log('game');
 
//     }
console.log(this._gameID);
localStorage.setItem('_gameID',this._gameID)

    let body={
      
      _game:this._gameID,
      _fs_type:"1"
    }

    this.http.fullscreen_top_ten(body).subscribe((res) => {

      console.log(res);
      this.fullscreen=res
      this.fullscreen_response=this.fullscreen.data
      console.log(this.fullscreen_response);
      
      this.background_image=this.fullscreen_response._fullscreen_themedetails[0].background_image
      console.log(this.background_image);
      this.title=this.fullscreen_response._fullscreen_themedetails[0].fs_title

      this.medal=this.fullscreen_response._fullscreen_themedetails[0].medal_image
      this.tile6=this.fullscreen_response._fullscreen_themedetails[0].tile_1
      this.tile7=this.fullscreen_response._fullscreen_themedetails[0].tile_2
      this.tile8=this.fullscreen_response._fullscreen_themedetails[0].tile_3
      this.tile9=this.fullscreen_response._fullscreen_themedetails[0].tile_4
      this.tile10=this.fullscreen_response._fullscreen_themedetails[0].tile_5

      this.title7_name=this.fullscreen_response.fs_data_toppers[6].first_name
      this.title7_name_split=this.title7_name.split(" ")
      console.log(this.title7_name_split);
      if(this.title7_name_split[0].length>9){
        this.title7_name_final=this.title7_name_split[0].substring(0,9)+'\n'+this.title7_name_split[0].substring(9)
        this.title7_name_final=this.title7_name_final

      }
      else{
        if(this.title7_name_split[1].length>8){
          this.title7_name_final=this.title7_name_split[0]+" "+this.title7_name_split[1].slice(0,8)
          this.title7_name_final=this.title7_name_final+"..."
  
        }
        else{
          this.title7_name_final=this.title7_name_split[0]+" "+this.title7_name_split[1]
  
        }
      }
   


      console.log(this.title7_name_final);


      this.title6_name=this.fullscreen_response.fs_data_toppers[5].first_name
      this.title6_name_split=this.title6_name.split(" ")
      console.log(this.title6_name_split);

      if(this.title6_name_split[0].length>9){
        this.title6_name_final=this.title6_name_split[0].substring(0,9)+'\n'+this.title6_name_split[0].substring(9)
        this.title6_name_final=this.title6_name_final

      }
      else{
        if(this.title6_name_split[1].length>8){
          this.title6_name_final=this.title6_name_split[0]+" "+this.title6_name_split[1].slice(0,8)
          this.title6_name_final=this.title6_name_final+"..."
  
        }
        else{
          this.title6_name_final=this.title6_name_split[0]+" "+this.title6_name_split[1]
  
        }
      }
    

      console.log(this.title6_name_final);
      

      this.title8_name=this.fullscreen_response.fs_data_toppers[7].first_name
      this.title8_name_split=this.title8_name.split(" ")
      console.log(this.title8_name_split);
      if(this.title8_name_split[0].length>9){
        this.title8_name_final=this.title8_name_split[0].substring(0,9)+'\n'+this.title8_name_split[0].substring(9)
        this.title8_name_final=this.title8_name_final

      }
      else{
        if(this.title8_name_split[1].length>8){
          this.title8_name_final=this.title8_name_split[0]+" "+this.title8_name_split[1].slice(0,8)
          this.title8_name_final=this.title8_name_final+"..."
  
        }
        else{
          this.title8_name_final=this.title8_name_split[0]+" "+this.title8_name_split[1]
  
        }
  
      }
    
      console.log(this.title8_name_final);

      
      this.title9_name=this.fullscreen_response.fs_data_toppers[8].first_name
      this.title9_name_split=this.title9_name.split(" ")
      console.log(this.title9_name_split);

      if(this.title9_name_split[0].length>9){
        this.title9_name_final=this.title9_name_split[0].substring(0,9)+'\n'+this.title9_name_split[0].substring(9)
        this.title9_name_final=this.title9_name_final

      }
      else{
        if(this.title9_name_split[1].length>8){
          this.title9_name_final=this.title9_name_split[0]+" "+this.title9_name_split[1].slice(0,8)
          this.title9_name_final=this.title9_name_final+"..."
        }
        else{
          this.title9_name_final=this.title9_name_split[0]+" "+this.title9_name_split[1]
  
        }
      }
     
      console.log(this.title9_name_final);

      
      this.title10_name=this.fullscreen_response.fs_data_toppers[9].first_name
      this.title10_name_split=this.title10_name.split(" ")
      console.log(this.title10_name_split);

      if(this.title10_name_split[0].length>9){
        this.title10_name_final=this.title10_name_split[0].substring(0,9)+'\n'+this.title10_name_split[0].substring(9)
        this.title10_name_final=this.title10_name_final

      }
      else{
        if(this.title10_name_split[1].length>8){
          this.title10_name_final=this.title10_name_split[0]+" "+this.title10_name_split[1].slice(0,8)
          this.title10_name_final=this.title10_name_final+"..."
        }
        else{
          this.title10_name_final=this.title10_name_split[0]+" "+this.title10_name_split[1]
  
        }
      }
     
      console.log(this.title10_name_final);

      // var spaceCount = (this.title10_name_split[0].length - 1);
      // console.log(spaceCount)

      this.theme_color=this.fullscreen_response._fullscreen_themedetails[0].bg_color
      this.profile_gradient_color=this.fullscreen_response._fullscreen_themedetails[0].gradient_color

      this.element.nativeElement.style.setProperty('--myvar', `${this.theme_color}`)
      this.element.nativeElement.style.setProperty('--gradient', `${this.profile_gradient_color}`)

      this.top5toppers=this.fullscreen_response. fs_data_toppers
      console.log( this.top5toppers);

    this.name=this.top5toppers[0].first_name
    this.score=this.top5toppers[0].weightage
    this.rank=this.top5toppers[0].rankingtable_number
    this.profile=this.top5toppers[0].profile_logo
    this.team_name=this.top5toppers[0].team_name

    this.loadIndexWise()

    setInterval(()=>{
    //  this.counter=0
      console.log(this.counter);
    
      if(this.counter<4){
       
        this.activeclass= this.counter
        this.counter++
        this.name=this.top5toppers[this.counter].first_name
        this.score=this.top5toppers[this.counter].weightage
        this.rank=this.top5toppers[this.counter].rankingtable_number
        this.profile=this.top5toppers[this.counter].profile_logo
        this.team_name=this.top5toppers[this.counter].team_name
        console.log(this.name);
        

      }
      else if(this.counter==4){
        this.counter=0
        this.name=this.top5toppers[0].first_name
        this.score=this.top5toppers[0].weightage
        this.rank=this.top5toppers[0].rankingtable_number
        this.profile=this.top5toppers[0].profile_logo
        this.team_name=this.top5toppers[0].team_name

        console.log(this.counter);
        this.activeclass= this.counter
       
      }
    },5000)
    console.log(this.counter);

    })

  
  }

  loadIndexWise(){
  
    setInterval(()=>{
      this._location.replaceState("indexwise_dashboard");
      location.reload()
     
     },15000)  
  
  }
  // activeRank(index:any){
  //  this.activeclass=index
  //  this.id=index++
  // }
}
