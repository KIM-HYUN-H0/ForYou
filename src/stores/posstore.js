import { observable, action, reaction } from "mobx";


export default class posstore {
  @observable mylat = 0;
  @observable mylng = 0;

  @action getPosition2 = () => {
    navigator.geolocation.getCurrentPosition(me => {
      this.mylat = me.coords.latitude;
      this.mylng = me.coords.longitude;
    });
  };
  
  // 내 위치 변수 및 내위치 구하기 action

  @action test1 = () => {
    this.mylat = this.mylat + 1;
    this.mylng = this.mylng - 1;
  }

}
