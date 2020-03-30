import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="/">ForYou</a>
                  </div>
                  <div>
                    <ul className="nav nav-tabs">
                      <li role="presentation"><a href="/">실시간검색어</a></li>
                      <li role="presentation"><a href="/mask">마스크</a></li> 
                    </ul>
                  </div>
                </div>
			  </nav> 
      </>
    );
  }
}

export default Nav;
