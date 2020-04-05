import { observable, action } from "mobx";
import Axios from "axios";
import React, { Component } from "react";


export default class posstore {
  @observable mylat = 0;
  @observable mylng = 0;
  @observable maskpos  = null;

  @action async getPosition2() {
    await navigator.geolocation.getCurrentPosition(me => {
      this.mylat = me.coords.latitude;
      this.mylng = me.coords.longitude;
    });
  };
  
  // 내 위치 변수 및 내위치 구하기 action

  @action async getMask() {    
    const result = await Axios.get(
      "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json",
      {
        params: {
          lat: this.mylat,
          lng: this.mylng,
          m: 1000
        }
      }
    );
    if (this.maskpos == null && result.data.stores){
      this.maskpos = result.data.stores;
    }
    /*
    if (result.data.stores) {
      if(c){
      this.maskpos = result.data.stores;
      c = 0
    }

    } 
    else {
      console.log("mobx 알림 API 서버가 지연되고 있습니다.");
    }
*/    
  }

}

