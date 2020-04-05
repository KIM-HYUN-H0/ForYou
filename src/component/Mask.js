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
    pos.getMask();
    return (
        <>        
          <Kakaomap mylat={pos.mylat} mylng={pos.mylng} maskpos={pos.maskpos}/>
          <Maskcall maskpos = {pos.maskpos} />
        </>
    );
  }
}

export default Mask;
