import React, { Component } from "react";
import Axios from "axios";

class Maskcall extends Component {
  constructor() {
    super();
    this.state = {
      div2: 1,
      div4: 1
    };
  }
  async componentDidUpdate() {
    let a = this.props.mylat;
    let b = this.props.mylng;
    const result = await Axios.get(
      "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json",
      {
        params: {
          lat: a,
          lng: b,
          m: 1000
        }
      }
    );
    if (result.data.stores) {
      if (this.state.div2.length !== result.data.stores.length) {
        this.setState({
          div2: result.data.stores,
          div4: result.data.stores.map((data, i) => (
            <tr>
              <td key={i}>{i}</td>
              <td>{data.name}</td>
              <td>{data.addr}</td>
              <td>{data.lat}</td>
              <td>{data.lng}</td>
            </tr>
          ))
        });
      }
    } else {
      console.log("API 서버가 지연되고 있습니다.");
    }
  }
  render() {
    return (
        <div className="container">
        <table className="table table-hover">
          <tbody>
          <tr>
            <td>번호</td>
            <td>이름</td>
            <td>주소</td>
            <td>위도</td>
            <td>경도</td>
          </tr>
          {this.state.div4}
          </tbody>
        </table>
      </div>
        
    
    )
  }
}

export default Maskcall;
