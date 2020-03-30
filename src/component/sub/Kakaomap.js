
import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("pos")
@observer
class Kakaomap extends Component {

  componentDidUpdate() {
    let a = this.props.mylat;
    let b = this.props.mylng;
    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(a,b), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

    let map = new kakao.maps.Map(mapContainer, mapOption);
  }

  render() {
    return (
      <>
      <div id="map"></div>
      </>
    )
  }
}

export default Kakaomap;
