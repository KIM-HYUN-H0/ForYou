import React, { Component } from "react";
import axios from "axios";
import cheerio from 'cheerio';
const url = 'https://datalab.naver.com/keyword/realtimeList.naver?where=main';

class Silkum2 extends Component {
  constructor() {
    super();
    this.state = {
      div3 : null
    }
  }
  componentDidMount() {

    this.silkumcall();
  }
  async silkumcall() {
    const SearchURLFront = "https://search.naver.com/search.naver?where=nexearch&query="
    const SearchURLBack = "&sm=top_lve.agallgrpmamsi0en0sp0&ie=utf8";
    const result2 = {};
    const result = await axios({
      url : url,
      method : 'GET',
      
    })
    if (result.status ===200) {
      const $ = cheerio.load(result.data);
      let select = $('span.item_title');
      select.each(function(i,elem) {
        result2[i] = $(this).text();
      })
      this.setState({
        div3 : Object.values(result2).map((data, i) => (
          <tr>
          <td key={i}>{i}</td>
          <td><a href={SearchURLFront + data + SearchURLBack}>{data}</a></td>
          </tr>
        ))
      })
    }
    else { console.log('가져오기 실패'); }
  }
    

  render() {    
    return (
      
      <div className="container">
        <table className="table table-hover">
          <tbody>
          <tr>
            <td>순위</td>
            <td>내용</td>
          </tr>
          {this.state.div3}
          </tbody>
        </table>
      </div>
      
      
    );
  }

}

export default Silkum2;
