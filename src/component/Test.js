import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("pos")
@observer
class Test extends Component {
    
    componentDidMount() {
        console.log('componentDidMount', this.props);
        console.log('componentDidMount', this.props.mylat);
    }
    render() {
        console.log(this.props);
        console.log(this.props.mylat);
        return (
            <>
            hi. 
            </>
        )
    }
}
export default Test;