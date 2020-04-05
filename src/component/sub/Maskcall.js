import React, { Component } from "react";

class Maskcall extends Component {
  constructor() {
    super();
    this.state = {
      count : 0,
      result: null
    };
  }
  componentDidUpdate() {
    const { maskpos } = this.props;

    if (maskpos && this.state.count === 0) {
      this.setState({
        count : 1,
        result : maskpos.map((data, i) => (
          <tr>
            <td key={i}>{i}</td>
            <td>{data.name}</td>
            <td>{data.addr}</td>
            <td>{data.remain_stat}</td>
            <td>{data.stock_at}</td>
          </tr>
        ))
      });
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
              <td>재고상태</td>
              <td>입고시간</td>
            </tr>
            {this.state.result}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Maskcall;
