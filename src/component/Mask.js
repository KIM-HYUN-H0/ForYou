import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Kakaomap from "./sub/Kakaomap";
import Maskcall from './sub/Maskcall';

@inject("pos")
@observer
class Mask extends Component {
  render() {
    const { pos } = this.props;
    pos.getPosition2();
    return (
        <>        
          <Kakaomap mylat={pos.mylat} mylng={pos.mylng}/>
          <Maskcall mylat={pos.mylat} mylng={pos.mylng}/>
        </>
    );
  }
}

export default Mask;
