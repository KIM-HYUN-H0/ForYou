import React, { Component } from "react";
import Axios from "axios";
import { Dropdown, DropdownButton } from "react-bootstrap";

class Translation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: 'ko',
      second: 'en',
      text: null,
      returntext: null,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstchange = this.firstchange.bind(this);
    this.secondchange = this.secondchange.bind(this);
  }
  async firstchange(event) {
    await this.setState({ first: event.target.value });
  }
  async secondchange(event) {
    await this.setState({ second: event.target.value });
  }
  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  async handleSubmit(event) {
    const result = await Axios.get("http://localhost:3001/api/translation", {
      params : {
        source : this.state.first,
        target : this.state.second,
        text : this.state.text
      }
    });
    console.log(result);
    this.setState({ returntext: result.data.message.result.translatedText });
  }

  render() {
    return (
      <>
        <div id="transdiv">
          
          <textarea
            className="form-control"
            id="transinput"
            value={this.state.text}
            onChange={this.handleTextChange}
          />

          <button
            type="button"
            className="btn btn-default"
            id="transsubmit"
            onClick={this.handleSubmit}
          >
            번역
          </button>
        </div>

        <div>
        <select name="job" onChange={this.firstchange}>
            <option value="ko">한국어</option>
            <option value="en">영어</option>
            <option value="zh-CN">중국어 간체</option>
            <option value="zh-TW">중국어 번체</option>
            <option value="es">스페인어</option>
            <option value="fr">프랑스어</option>
            <option value="vi">베트남어</option>
            <option value="th">태국어</option>
            <option value="id">인도네시아어</option>
          </select>
          =>
          <select name="job" id="secondselect" onChange={this.secondchange}>
          <option value="en">영어</option>
            <option value="ko">한국어</option>
            <option value="zh-CN">중국어 간체</option>
            <option value="zh-TW">중국어 번체</option>
            <option value="es">스페인어</option>
            <option value="fr">프랑스어</option>
            <option value="vi">베트남어</option>
            <option value="th">태국어</option>
            <option value="id">인도네시아어</option>
          </select>
          <textarea
            className="form-control"
            id="papago"
            value={this.state.returntext}
          />
        </div>
      </>
    );
  }
}
export default Translation;
