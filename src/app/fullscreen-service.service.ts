import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FullscreenServiceService {
  URLstring = environment.apiURL
  Path='coroebus-tgc-api-levels';
  // Path='coroebus-beta-api-levels';
  constructor(public Http:HttpClient) { }
  fullscreen_top_ten(data:any){
    // var tempurl = ${this.URLstring}+/coroebus-beta-api-levels/Passbook/getReward
    var tempurl = `${this.URLstring}`+`/${this.Path}/FullScreenDashboard/top_ten`
    return this.Http.post(tempurl,data)

  }
  fullscreen_top_ten_index_wise(data:any){
    // var tempurl = ${this.URLstring}+/coroebus-beta-api-levels/Passbook/getReward
    var tempurl = `${this.URLstring}`+`/${this.Path}/FullScreenDashboard/top_ten_pl_indexwise`
    return this.Http.post(tempurl,data)

  }
  fullscreen_top_ten_Emerging(data:any){
    // var tempurl = ${this.URLstring}+/coroebus-beta-api-levels/Passbook/getReward
    var tempurl = `${this.URLstring}`+`/${this.Path}/FullScreenDashboard/top_ten_pl_indexwise_emerging`
    return this.Http.post(tempurl,data)

  }
  fullscreen_top_ten_tl_overall(data:any){
    // var tempurl = ${this.URLstring}+/coroebus-beta-api-levels/Passbook/getReward
    var tempurl = `${this.URLstring}`+`/${this.Path}/FullScreenDashboard/top_ten_tl_overall`
    return this.Http.post(tempurl,data)

  }
  fullscreen_top_ten_tl_indexwise(data:any){
    // var tempurl = ${this.URLstring}+/coroebus-beta-api-levels/Passbook/getReward
    var tempurl = `${this.URLstring}`+`/${this.Path}/FullScreenDashboard/top_ten_tl_indexwise`
    return this.Http.post(tempurl,data)

  }

  fullscreen_top_ten_rm_overall(data:any){
    // var tempurl = ${this.URLstring}+/coroebus-beta-api-levels/Passbook/getReward
    var tempurl = `${this.URLstring}`+`/${this.Path}/FullScreenDashboard/top_ten_rm_overall`
    return this.Http.post(tempurl,data)

  }
  fullscreen_top_ten_rm_indexwise(data:any){
    // var tempurl = ${this.URLstring}+/coroebus-beta-api-levels/Passbook/getReward
    var tempurl = `${this.URLstring}`+`/${this.Path}/FullScreenDashboard/top_ten_rm_indexwise`
    return this.Http.post(tempurl,data)

  }
  
}
